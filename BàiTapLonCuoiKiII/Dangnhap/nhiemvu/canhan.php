<?php
// Kiểm tra xem có dữ liệu được gửi từ biểu mẫu không
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ biểu mẫu
    $taskName = $_POST['taskName'];
    $taskDescription = $_POST['taskDescription'];
    $taskDueDate = $_POST['taskDueDate'];
    $taskPriority = $_POST['taskPriority'];

    // Kiểm tra và xử lý dữ liệu nếu cần
    // Ví dụ: Kiểm tra dữ liệu hợp lệ trước khi lưu vào cơ sở dữ liệu
    // Ví dụ: Lưu dữ liệu vào cơ sở dữ liệu
    // Ví dụ: Gửi dữ liệu qua email hoặc API khác

    // Sau khi xử lý, bạn có thể chuyển hướng người dùng đến trang khác hoặc xuất thông báo thành công
    // Ví dụ: Chuyển hướng người dùng đến trang danh sách nhiệm vụ
    header("Location: task_list.php");
    exit;
}
?>
