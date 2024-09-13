// Hàm để thêm số hoặc dấu vào màn hình hiển thị
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

// Hàm tính toán kết quả và hiển thị
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Hàm xóa toàn bộ màn hình hiển thị
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Hàm xóa ký tự cuối cùng trên màn hình
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
