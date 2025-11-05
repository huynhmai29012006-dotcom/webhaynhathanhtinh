
// function createAccount(){
//  let accounts=[{
//     username:'admin',
//     password:123456,
//  },
//  {
//     username:'staff',
//     password:123456
// }
// ]
//     localStorage.setItem('accounts', JSON.stringify(accounts))
// };
document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const errorMessageDiv = document.getElementById('error-message');

    // Khóa (key) để lưu danh sách tài khoản
   
    // Khóa (key) để lưu người dùng đang đăng nhập
   
let message=document.getElementById('login-message');
    // --- XỬ LÝ ĐĂNG NHẬP ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Ngăn form tải lại trang
            
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Lấy danh sách tài khoản từ localStorage
            const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            // Tìm tài khoản
            const userFound = accounts.find(user => user.username === username);

            if (!userFound) {
                message.innerHTML= '<p class="error">Tài Khoản không tồn tại.</p>';
            } else if (userFound.password !== password) {
                message.innerHTML = '<p class="error">Sai mật khẩu. Vui lòng thử lại.</p>';
            } else {
                // Đăng nhập thành công
                if(userFound.username==='admin'){
                    alert("Đăng nhập thành công với tư cách Quản trị viên!");
                    window.location.href = 'dashboard.html';
                    return;
                }
                if(userFound.username==='staff'){
                    alert("Đăng nhập thành công với tư cách Nhân viên!");
                    window.location.href = 'orders.html';
                    return;
                }
                localStorage.setItem('currentUser', JSON.stringify(userFound));
                alert("Đăng nhập thành công!");
                window.location.href = 'index.html'; // Chuyển về trang chủ
            }
        });
    }

    // --- XỬ LÝ ĐĂNG KÝ ---
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Ngăn form tải lại trang

      
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Validation (Kiểm tra dữ liệu)
            if (password.length < 6) {
                showError("Mật khẩu phải có ít nhất 6 ký tự.");
                return;
            }
            if (password !== confirmPassword) {
                showError("Mật khẩu nhập lại không khớp.");
                return;
            }

            // Lấy danh sách tài khoản từ localStorage
            const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

            // Kiểm tra tên đăng nhập đã tồn tại chưa
            const userExists = accounts.find(user => user.username === username);

            if (userExists) {
                showError("Tên đăng nhập này đã được đăng ký.");
            } else {
                // Tạo tài khoản mới
                const newUser = {
                    fullname: fullname,
                    phone: phone,
                    password: password, // Lưu ý: Trong thực tế, mật khẩu cần được mã hóa
                    cart: [] // Giỏ hàng rỗng
                };

                // Thêm user mới vào danh sách
                accounts.push(newUser);
                // Lưu lại danh sách
                localStorage.setItem('accounts', JSON.stringify(accounts));

                // Tự động đăng nhập cho user mới
                localStorage.setItem('currentUser', JSON.stringify(newUser));

                alert("Đăng ký thành công! Chào mừng bạn!");
                window.location.href = 'index.html'; // Chuyển về trang chủ
            }
        });
    }

    // Hàm hiển thị lỗi
    function showError(message) {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.display = 'block';
        }
    }
});
const handleLogin = (e) => {
    e.preventDefault();
    
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');
    const messageEl = document.getElementById('login-message');

    if (!usernameEl || !passwordEl || !messageEl) return;

    const username = usernameEl.value.trim().toLowerCase();
    const password = passwordEl.value.trim();
    
    // 1. Kiểm tra tài khoản cứng
    let role = null;
    let redirectPage = null;

    if (username === 'admin' && password === '123456') {
        role = 'admin';
        redirectPage = 'dashboard.html';
    } else if (username === 'staff' && password === '123456') {
        role = 'staff';
        redirectPage = 'orders.html';
    }

    if (role) {
        // 2. Đăng nhập thành công: Lưu trạng thái và chuyển hướng
        localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify({ username, role, timestamp: Date.now() }));
        messageEl.style.color = 'var(--positive, #28a745)';
        messageEl.textContent = 'Đăng nhập thành công! Đang chuyển hướng...';
        
        // Chuyển hướng sau 1 giây
        setTimeout(() => {
            window.location.href = redirectPage;
        }, 1000);
    } else {
        // 3. Đăng nhập thất bại
        messageEl.style.color = 'var(--danger, #dc3545)';
        messageEl.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng.';
    }
};