document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form được submit mặc định

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        
        // Kiểm tra xem tất cả các trường bắt buộc đã được nhập chưa
        var hovaten = document.querySelector('input[name="hovaten"]').value;
        var username = document.querySelector('input[name="username"]').value;
        var email = document.querySelector('input[name="email"]').value;

        if (hovaten && username && password && confirmPassword && email) {
            // Nếu tất cả các trường bắt buộc đều đã được nhập, chuyển hướng trang
            window.location.href = "http://127.0.0.1:5500/Dangnhap/trangchu/congviec.html";
        } else {
            alert("Vui lòng điền tất cả các thông tin bắt buộc.");
        }
    }
});
