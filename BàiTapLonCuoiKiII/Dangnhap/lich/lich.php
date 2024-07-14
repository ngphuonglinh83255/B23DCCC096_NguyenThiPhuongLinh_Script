<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Xử lý dữ liệu gửi từ biểu mẫu
    $taskText = $_POST["task_text"];

    // Thực hiện thêm nhiệm vụ mới vào cơ sở dữ liệu hoặc tập tin, ví dụ:
    // insertTaskIntoDatabase($taskText);
}
?>
<?php
// Kết nối đến cơ sở dữ liệu
$conn = mysqli_connect("localhost", "username", "password", "database_name");

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối không thành công: " . mysqli_connect_error());
}

// Thực hiện truy vấn để lấy dữ liệu
$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

// Kiểm tra và hiển thị dữ liệu
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"]. " - Nhiệm vụ: " . $row["task_text"]. "<br>";
    }
} else {
    echo "0 kết quả";
}

// Đóng kết nối
mysqli_close($conn);
?>
