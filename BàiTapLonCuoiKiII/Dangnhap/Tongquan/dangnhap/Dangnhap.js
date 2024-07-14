document.addEventListener("DOMContentLoaded", function() {
    var signInForm = document.getElementById("signInForm");

    signInForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn form gửi đi
        
        // Kiểm tra thông tin đăng nhập (có thể thêm logic kiểm tra ở đây)
        var email = signInForm.elements["email"].value;
        var password = signInForm.elements["password"].value;
        
        // Nếu thông tin hợp lệ, chuyển hướng đến trang mới
        if (email && password) { // Đây là kiểm tra cơ bản, bạn có thể thêm kiểm tra phức tạp hơn
            window.location.href = "http://127.0.0.1:5500/Dangnhap/trangchu/congviec.html";
        } else {
            alert("Please enter valid email and password.");
        }
    });
});
    document.getElementById("signUp").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5500/Dangnhap/Tongquan/dangki/Dangki.html";
    });
    

