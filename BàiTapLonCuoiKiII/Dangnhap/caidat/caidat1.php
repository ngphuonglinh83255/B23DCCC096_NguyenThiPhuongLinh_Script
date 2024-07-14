<?php
// Xử lý dữ liệu gửi từ biểu mẫu và lưu vào cơ sở dữ liệu
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$role = $_POST['role'];
$accessLevel = $_POST['accessLevel'];
$timezone = $_POST['timezone'];
$notification = isset($_POST['notification']) ? 1 : 0; // Kiểm tra xem checkbox được chọn hay không
$darkMode = isset($_POST['darkMode']) ? 1 : 0; // Kiểm tra xem checkbox được chọn hay không

// Tiếp theo, bạn có thể thực hiện các thao tác như lưu dữ liệu vào cơ sở dữ liệu và cập nhật thông tin người dùng

// Ví dụ:
// $db->query("UPDATE users SET role='$role', accessLevel='$accessLevel', timezone='$timezone', notification='$notification', darkMode='$darkMode' WHERE username='$username'");
// Nếu sử dụng PHP và MySQL

// Sau đó, chuyển hướng người dùng đến trang cài đặt hoặc trang khác
// header('Location: settings.php');
?>
