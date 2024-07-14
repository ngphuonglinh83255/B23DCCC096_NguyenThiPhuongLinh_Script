// caidat1.js

document.addEventListener('DOMContentLoaded', function() {
    // Nút "Quay lại" trở về trang trước đó
    document.getElementById('back-btn').addEventListener('click', function() {
        window.history.back();
    });

    // Chuyển đổi chế độ tối
    document.getElementById('dark-mode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Lưu cài đặt
    document.querySelector('.form-actions button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit
        
        // Lấy giá trị của các trường cài đặt
        const siteTitle = document.getElementById('site-title').value;
        const language = document.getElementById('language').value;
        const darkMode = document.getElementById('dark-mode').checked;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const emailNotifications = document.getElementById('email-notifications').checked;
        const smsNotifications = document.getElementById('sms-notifications').checked;

        // Thực hiện xử lý lưu cài đặt (ví dụ: gửi dữ liệu tới server)
        console.log('Lưu cài đặt:');
        console.log('Tiêu đề trang:', siteTitle);
        console.log('Ngôn ngữ:', language);
        console.log('Chế độ tối:', darkMode);
        console.log('Tên người dùng:', username);
        console.log('Email:', email);
        console.log('Mật khẩu hiện tại:', currentPassword);
        console.log('Mật khẩu mới:', newPassword);
        console.log('Thông báo qua email:', emailNotifications);
        console.log('Thông báo qua SMS:', smsNotifications);

        // Hiển thị thông báo lưu thành công (có thể thay thế bằng thông báo thực tế)
        alert('Cài đặt đã được lưu thành công!');
    });
});
