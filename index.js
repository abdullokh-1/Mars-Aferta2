document.addEventListener('DOMContentLoaded', function() {
    // Elementlarni olish
    const studentBtn = document.getElementById('studentBtn');
    const parentBtn = document.getElementById('parentBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginBtn = document.getElementById('loginBtn');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const loginSuccess = document.getElementById('loginSuccess');
    
    // Foydalanuvchi turini tanlash
    studentBtn.addEventListener('click', function() {
      studentBtn.classList.add('active');
      parentBtn.classList.remove('active');
    });
    
    parentBtn.addEventListener('click', function() {
      parentBtn.classList.add('active');
      studentBtn.classList.remove('active');
    });
    
    // Parolni ko'rsatish/yashirish
    togglePassword.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🔒';
      } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
      }
    });
    
    // Formani tekshirish va yuborish
    loginBtn.addEventListener('click', function() {
      let isValid = true;
      
      // Xatolarni tozalash
      usernameError.style.display = 'none';
      passwordError.style.display = 'none';
      loginSuccess.style.display = 'none';
      
      // Username tekshirish
      if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        isValid = false;
      }
      
      // Parolni tekshirish
      if (passwordInput.value.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
      }
      
      // Agar hamma maydonlar to'g'ri to'ldirilgan bo'lsa
      if (isValid) {
        // Test uchun parol tekshirish (haqiqiy loyihada server bilan tekshiriladi)
        if (passwordInput.value === '123456') {
          loginSuccess.style.display = 'block';
          // Muvaffaqiyatli kirish uchun 2 soniyadan keyin boshqa sahifaga o'tish
          setTimeout(function() {
            alert('Muvaffaqiyatli kirildi! Asosiy sahifaga yo\'naltirilmoqdasiz.');
            // window.location.href = 'dashboard.html'; // Asosiy sahifaga yo'naltirish
          }, 2000);
        } else {
          passwordError.textContent = 'Noto\'g\'ri parol';
          passwordError.style.display = 'block';
        }
      }
    });
    
    // Enter tugmasini bosish orqali kirish
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginBtn.click();
      }
    });
  });