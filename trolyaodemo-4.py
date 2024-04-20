import os
import speech_recognition as sr
import time
import wikipedia
import datetime
import webbrowser
import requests
from pydub import AudioSegment
from pydub.playback import play
from io import BytesIO
from time import strftime
from gtts import gTTS
from youtube_search import YoutubeSearch
from openai import OpenAI, OpenAIError 
language = 'vi'
wikipedia.set_lang(language)

API_KEY = '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'
ENDPOINT = 'https://api.openai.com/v1/chat/completions'
def ask_question(question):
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY,
    }
    promt = f"""Cho danh sách các ý định sau:
    1. chào hỏi
    2. nghe nhạc
    3. đọc báo
    ---------
    Hãy dựa vào danh sách trên và câu hỏi sau đây: Question {question}
    Phân loại cho tôi câu hỏi thuộc ý định nào
    Hãy nhớ, chỉ cần trả về tên của ý định
    Nếu câu hỏi không liên quan đến ý định nào trong dánh sách, bạn không cần phân loại nữa mà hãy đưa ra câu trả lời của riêng bạn
    Nếu không phân loại được thì hãy dùng tri thức mà bạn có để tư duy ra câu trả lời
    ---------
    Câu trả lời: """
    data = {
        'model': 'gpt-3.5-turbo',
        "messages": [{"role": "user", "content": promt}],
        "temperature": 0.7
    }
    response = requests.post(ENDPOINT, headers=headers, json=data)
    if response.status_code == 200:
        return response.json()
    else:
        print(response.text)
        return 'Xin lỗi, không thể xử lý yêu cầu của bạn vào lúc này.'

try:
    client = OpenAI(api_key=API_KEY)
    # Mã của bạn sử dụng client OpenAI ở đây
except OpenAIError as e:
    print("Lỗi:", e)

def speak(text):
# nhận một đoạn văn bản,in nó ra màn hình và chuyển đổi thành giọng nói,sau đó phát ra âm thanh.
    print("Nexus: {}".format(text))
    tts = gTTS(text=text, lang=language, slow=False)
    fp = BytesIO()
    tts.write_to_fp(fp)
    fp.seek(0)
    audio = AudioSegment.from_file(fp, format="mp3")
    play(audio)

def get_audio():
# sử dụng thư viện speech_recognition để nhận dạng giọng nói từ microphone và trả về văn bản tương ứng.
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Tôi: ", end='')
        audio = r.listen(source, phrase_time_limit=5)
        try:
            text = r.recognize_google(audio, language="vi-VN")
            print(text)
            return text
        except:
            print("...")
            return 0

def stop():
# thông báo rằng trợ lý ảo sẽ tạm biệt và dừng chương trình.
    speak("Hẹn gặp lại bạn sau!")

def get_text():
# yêu cầu người dùng nói vào microphone và lặp lại nếu không nhận diện được đúng.
    print("Vui long noi gi do?")
    for i in range(3):
        text = get_audio()
        if text:
            return text.lower()
        elif i < 2:
            speak("Nexus không nghe rõ. Bạn nói lại được không!")
    time.sleep(2)
    stop()
    return 0

def hello(name):
# chào hỏi người dùng dựa trên thời gian trong ngày và tên của họ.
    day_time = int(strftime('%H'))
    if day_time < 12:
        speak("Chào buổi sáng bạn {}. Chúc bạn một ngày tốt lành.".format(name))
    elif 12 <= day_time < 18:
        speak("Chào buổi chiều bạn {}.".format(name))
    else:
        speak("Chào buổi tối bạn {}.".format(name))

def get_time(text):
# nhận một đoạn văn bản từ người dùng và trả lời với thông tin thời gian hiện tại hoặc ngày hiện tại.
    now = datetime.datetime.now()
    if "giờ" in text:
        speak('Bây giờ là %d giờ %d phút' % (now.hour, now.minute))
    elif "ngày" in text:
        speak("Hôm nay là ngày %d tháng %d năm %d" %
              (now.day, now.month, now.year))
    else:
        speak("Bot chưa hiểu ý của bạn. Bạn nói lại được không?")

def play_song():
# cho phép người dùng chọn một tên bài hát,tìm kiếm trên YouTube và mở bài hát đầu tiên từ kết quả tìm kiếm.
    speak('Xin mời bạn chọn tên bài hát')
    mysong = get_text()
    while True:
        result = YoutubeSearch(mysong, max_results=10).to_dict()
        if result:
            break
    url = 'https://www.youtube.com/watch?v=' + result[0]['id']
    webbrowser.open(url)
    speak("Bài hát bạn yêu cầu đã được mở.")

def open_application(text):
# mở các ứng dụng cụ thể dựa trên văn bản đầu vào từ người dùng.
    if "google" in text:
        speak("Mở Google Chrome")
        os.startfile('C:\Program Files\Google\Chrome\Application\chrome')
    elif "word" in text:
        speak("Mở Microsoft Word")
        os.startfile('C:\Program Files\Microsoft Office\\root\Office16\\WINWORD.EXE')
    elif "excel" in text:
        speak("Mở Microsoft Excel")
        os.startfile('C:\Program Files\Microsoft Office\\root\Office16\EXCEL.EXE')
    else:
        speak("Ứng dụng chưa được cài đặt. Bạn hãy thử lại!")

def tell_me_about():
# sử dụng Wikipedia để cung cấp thông tin định nghĩa về một thuật ngữ hoặc chủ đề được yêu cầu bởi người dùng.
    try:
        speak("Bạn muốn nghe về gì ạ")
        text = get_text()
        contents = wikipedia.summary(text).split('\n')
        speak(contents[0])
        time.sleep(5)
        for content in contents[1:]:
            speak("Bạn muốn nghe thêm không")
            ans = get_text()
            if "có" not in ans:
                break    
            speak(content)
            time.sleep(5)
        speak('Cảm ơn bạn đã lắng nghe!!!')
    except:
        speak("Nexus không định nghĩa được thuật ngữ của bạn. Xin mời bạn nói lại")

def help_me():
# sử dụng speak để đọc một đoạn văn bản thông báo về các chức năng mà trợ lý ảo có thể thực hiện.
    speak("""Nexus có thể giúp bạn thực hiện các câu lệnh sau đây:
    1. Chào hỏi, giao tiếp, hỏi đáp
    2. Cho người dùng biết thời gian hiện tại
    3. Mở video nhạc Youtube
    4. Mở google chrome, application
    5. Tìm định nghĩa trên từ điển wikipedia""")

def current_weather():
    speak("Bạn muốn xem thời tiết ở đâu ạ.")
    ow_url = "http://api.openweathermap.org/data/2.5/weather?"
    city = get_text()
    if not city:
        pass
    api_key = "fe8d8c65cf345889139d8e545f57819a"
    call_url = ow_url + "appid=" + api_key + "&q=" + city + "&units=metric"
    response = requests.get(call_url)
    data = response.json()
    if data["cod"] != "404":
        city_res = data["main"]
        current_temperature = city_res["temp"]
        current_pressure = city_res["pressure"]
        current_humidity = city_res["humidity"]
        suntime = data["sys"]
        sunrise = datetime.datetime.fromtimestamp(suntime["sunrise"])
        sunset = datetime.datetime.fromtimestamp(suntime["sunset"])
        wthr = data["weather"]
        weather_description = wthr[0]["description"]
        now = datetime.datetime.now()
        content = """
        Hôm nay là ngày {day} tháng {month} năm {year}
        Mặt trời mọc vào {hourrise} giờ {minrise} phút
        Mặt trời lặn vào {hourset} giờ {minset} phút
        Nhiệt độ trung bình là {temp} độ C
        Áp suất không khí là {pressure} héc tơ Pascal
        Độ ẩm là {humidity}%
        Trời hôm nay quang mây. Dự báo mưa rải rác ở một số nơi.""".format(day = now.day,month = now.month, year= now.year, hourrise = sunrise.hour, minrise = sunrise.minute,
                                                                           hourset = sunset.hour, minset = sunset.minute, 
                                                                           temp = current_temperature, pressure = current_pressure, humidity = current_humidity)
        speak(content)
        time.sleep(20)
    else:
        speak("Không tìm thấy địa chỉ của bạn")

def assistant():
# chạy chương trình chính của trợ lý ảo, tương tác với người dùng và thực hiện các chức năng tương ứng với các lệnh người dùng.
    speak("Xin chào, bạn tên là gì nhỉ?")
    time.sleep(2)
    name = get_text()
    if name:
        speak("Chào bạn {}".format(name))
        speak("Bạn cần Nexus có thể giúp gì ạ?")
        while True:
            text = get_text()
            if not text:
                audio_file= open("/path/to/file/audio.mp3", "rb")
                transcription = client.audio.transcriptions.create(
                 model="whisper-1", 
                 file=audio_file
                 )
                speak(transcription.text)
                audio_file = open("/path/to/file/speech.mp3", "rb")
                transcription = client.audio.transcriptions.create(
                 model="whisper-1", 
                 file=audio_file, 
                 response_format="text"
                 )
                speak(transcription.text)
                audio_file = open("speech.mp3", "rb")
                transcript = client.audio.transcriptions.create(
                 file=audio_file,
                 model="whisper-1",
                 response_format="verbose_json",
                 timestamp_granularities=["word"]
                )
                speak(transcript.words)
            elif "dừng" in text or "tạm biệt" in text or "chào robot" in text or "ngủ thôi" in text:
                stop()
                break
            elif "chào trợ lý ảo" in text:
                hello(name)
            elif "có thể làm gì" in text:
                help_me()
            elif "hiện tại" in text:
                get_time(text)
            elif "mở" in text:
                open_application(text)
            elif "nhạc" in text:
                play_song()
            elif "thông tin" in text:
                tell_me_about()
            elif "thời tiết" in text:
                current_weather()
            else:
                response = ask_question(text)
                speak(response["choices"][0]['message']['content'])
assistant()