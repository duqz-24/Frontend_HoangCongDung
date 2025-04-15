document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const registrationSuccess = document.getElementById('registrationSuccess');
    const emailExistsError = document.getElementById('emailExistsError');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        registrationSuccess.style.display = 'none';
        emailExistsError.style.display = 'none';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        let isValid = true;

        if (email === '') {
            emailError.textContent = 'Vui lòng nhập địa chỉ email.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Vui lòng nhập mật khẩu.';
            isValid = false;
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Mật khẩu xác nhận không trùng khớp.';
            isValid = false;
        }

        if (isValid) {
            const existingAccounts = localStorage.getItem('accounts');
            let accounts = existingAccounts ? JSON.parse(existingAccounts) : [];

            const isEmailTaken = accounts.some(account => account.email === email);

            if (isEmailTaken) {
                emailExistsError.style.display = 'block';
            } else {
                const newAccount = { email: email, password: password };
                accounts.push(newAccount);
                localStorage.setItem('accounts', JSON.stringify(accounts));

                registrationSuccess.style.display = 'block';
                registerForm.reset(); 
            }
        }
    });
});