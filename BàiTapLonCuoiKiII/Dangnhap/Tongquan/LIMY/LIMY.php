<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "task_manager";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
?>
<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task_text = $_POST['task_text'];

    $sql = "INSERT INTO tasks (text) VALUES ('$task_text')";
    if ($conn->query($sql) === TRUE) {
        echo "Thêm công việc thành công";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>
<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task_id = $_POST['task_id'];

    $sql = "DELETE FROM tasks WHERE id=$task_id";
    if ($conn->query($sql) === TRUE) {
        echo "Xóa công việc thành công";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>
<?php
include 'db.php';

$sql = "SELECT id, text FROM tasks";
$result = $conn->query($sql);

$tasks = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
}
echo json_encode($tasks);

$conn->close();
?>
