document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const saveProfileBtn = document.getElementById('save-profile-btn');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const changeAvatarBtn = document.getElementById('change-avatar-btn');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    const birthdateInput = document.getElementById('birthdate');
    const bioTextarea = document.getElementById('bio');
    const avatarImg = document.getElementById('avatar-img');

    // Biến lưu trữ trạng thái sửa đổi
    let isEditing = false;

    // Xử lý sự kiện khi click vào nút "Edit Profile"
    editProfileBtn.addEventListener('click', function() {
        isEditing = true;
        enableInputs();
        editProfileBtn.style.display = 'none';
        saveProfileBtn.style.display = 'inline-block';
        cancelEditBtn.style.display = 'inline-block';
    });

    // Xử lý sự kiện khi click vào nút "Cancel"
    cancelEditBtn.addEventListener('click', function() {
        isEditing = false;
        disableInputs();
        editProfileBtn.style.display = 'inline-block';
        saveProfileBtn.style.display = 'none';
        cancelEditBtn.style.display = 'none';
        // Khôi phục giá trị ban đầu của các input
        restoreDefaultValues();
    });

    // Xử lý sự kiện khi click vào nút "Save Profile"
    saveProfileBtn.addEventListener('click', function() {
        isEditing = false;
        // Lưu thông tin sau khi chỉnh sửa (ở đây là giả sử lưu vào localStorage)
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('address', addressInput.value);
        localStorage.setItem('phone', phoneInput.value);
        localStorage.setItem('birthdate', birthdateInput.value);
        localStorage.setItem('bio', bioTextarea.value);

        disableInputs();
        editProfileBtn.style.display = 'inline-block';
        saveProfileBtn.style.display = 'none';
        cancelEditBtn.style.display = 'none';
    });

    // Xử lý sự kiện khi click vào nút "Change Avatar"
    changeAvatarBtn.addEventListener('click', function() {
        if (isEditing) {
            // Thực hiện thay đổi avatar (ở đây là giả sử)
            var newAvatarUrl = prompt("Enter the URL of the new avatar image:");
            if (newAvatarUrl) {
                avatarImg.src = newAvatarUrl;
                console.log('Avatar changed to:', newAvatarUrl);
            }
        }
    });

    // Khôi phục thông tin từ localStorage khi trang được tải
    function loadProfileInfo() {
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');
        const storedAddress = localStorage.getItem('address');
        const storedPhone = localStorage.getItem('phone');
        const storedBirthdate = localStorage.getItem('birthdate');
        const storedBio = localStorage.getItem('bio');

        if (storedUsername) {
            usernameInput.value = storedUsername;
        }

        if (storedEmail) {
            emailInput.value = storedEmail;
        }

        if (storedAddress) {
            addressInput.value = storedAddress;
        }

        if (storedPhone) {
            phoneInput.value = storedPhone;
        }

        if (storedBirthdate) {
            birthdateInput.value = storedBirthdate;
        }

        if (storedBio) {
            bioTextarea.value = storedBio;
        }
    }

    // Cho phép chỉnh sửa các trường input
    function enableInputs() {
        usernameInput.removeAttribute('readonly');
        emailInput.removeAttribute('readonly');
        addressInput.removeAttribute('disabled');
        phoneInput.removeAttribute('disabled');
        birthdateInput.removeAttribute('disabled');
        bioTextarea.removeAttribute('disabled');
    }

    // Vô hiệu hóa các trường input
    function disableInputs() {
        usernameInput.setAttribute('readonly', true);
        emailInput.setAttribute('readonly', true);
        addressInput.setAttribute('disabled', true);
        phoneInput.setAttribute('disabled', true);
        birthdateInput.setAttribute('disabled', true);
        bioTextarea.setAttribute('disabled', true);
    }

    // Khôi phục giá trị ban đầu của các input
    function restoreDefaultValues() {
        usernameInput.value = localStorage.getItem('username') || "Leen";
        emailInput.value = localStorage.getItem('email') || "example@example.com";
        addressInput.value = localStorage.getItem('address') || "";
        phoneInput.value = localStorage.getItem('phone') || "";
        birthdateInput.value = localStorage.getItem('birthdate') || "";
        bioTextarea.value = localStorage.getItem('bio') || "";
    }

    loadProfileInfo();
});
document.getElementById('back-btn').addEventListener('click', function() {
    window.history.back();
});
