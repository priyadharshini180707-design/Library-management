// --- 1. POPUP CONTROL FUNCTIONS ---
function opensign() {
    const popup = document.getElementById('loginPopup');
    const signupBox = document.getElementById('signupBox');
    const loginBox = document.getElementById('loginBox');
    
    if (popup) popup.style.display = 'flex';
    if (signupBox) signupBox.style.display = 'block';
    if (loginBox) loginBox.style.display = 'none';
}

function openLogin() {
    const popup = document.getElementById('loginPopup');
    const signupBox = document.getElementById('signupBox');
    const loginBox = document.getElementById('loginBox');
    
    if (popup) popup.style.display = 'flex';
    if (signupBox) signupBox.style.display = 'none';
    if (loginBox) loginBox.style.display = 'block';
}

function closeLogin() {
    const popup = document.getElementById('loginPopup');
    if (popup) popup.style.display = 'none';
}

// --- 2. PASSWORD SHOW/HIDE (EYE ICON FEATURE) ---
function togglePassword(fieldId, iconId) {
    const passwordField = document.getElementById(fieldId);
    const eyeIcon = document.getElementById(iconId);

    if (passwordField && eyeIcon) {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }
}

// --- 3. SIGNUP USER (FULL FIXED FUNCTION) ---
function signupUser() {
    const usernameInput = document.getElementById('signupUsername');
    const passwordInput = document.getElementById('signuppassword');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!username || !password) {
        alert('Please fill in both username and password! 🥹');
        return;
    }

    // Save registered user info in localStorage
    localStorage.setItem('libraRegisteredUser', username);
    localStorage.setItem('libraRegisteredPass', password);
    
    // Automatically login and set current user
    localStorage.setItem('libraUser', username);

    alert('Account created successfully! 🥳 Redirecting to your books...');
    
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';

    closeLogin();

    // Directly redirect to mybooks.html after successful signup
    window.location.href = './mybooks.html';
}

// --- 4. LOGIN USER (ABSOLUTE PATH FIX) ---
function loginUser() {
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!username || !password) {
        alert('Please fill in both username and password!');
        return;
    }

    // Save active logged-in user
    localStorage.setItem('libraUser', username);

    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';

    closeLogin();
    checkUserLogin();

    alert('Login successful! Welcome back. 🎉');

    // Fix path to point directly in the same folder
    window.location.href = './mybooks.html';
}

// --- 5. NAVBAR STATUS CHECK ---
function checkUserLogin() {
    const currentUser = localStorage.getItem('libraUser');
    const authButtons = document.getElementById('authButtons');

    if (currentUser && authButtons) {
        authButtons.innerHTML = `
            <span style="color: gray; margin-right: 15px; font-weight: 500;">
                <i class="fa-solid fa-user"></i> ${currentUser}
            </span>
            <button class="b2" onclick="logoutUser()" style="background-color: crimson; border: none; cursor: pointer; padding: 6px 14px; border-radius: 4px; color: white;">Logout</button>
        `;
    }
}

// --- 6. LOGOUT FUNCTION ---
function logoutUser() {
    localStorage.removeItem('libraUser');
    localStorage.removeItem('redirectAfterLogin');

    const authButtons = document.getElementById('authButtons');
    if (authButtons) {
        authButtons.innerHTML = `
            <button class="b1" onclick="opensign()">Signup</button>
            <button class="b2" onclick="openLogin()">Login</button>
        `;
    }
    window.location.reload();
}

// --- 7. DARK / LIGHT MODE TOGGLE FEATURE ---
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('themeIcon');
    
    if (document.body.classList.contains('dark-mode')) {
        if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        if(icon) icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// --- 8. INITIAL CHECK ON PAGE LOAD ---
window.onload = function() {
    checkUserLogin();
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('themeIcon');
        if(icon) icon.classList.replace('fa-moon', 'fa-sun');
    }
};

// --- 9. PROTECTED ROUTE CHECK FOR MY BOOKS ---
function openMyBooks() {
    const currentUser = localStorage.getItem('libraUser');
    if (!currentUser) {
        alert('Please login or sign up first to access My Books! 🔒');
        localStorage.setItem('redirectAfterLogin', 'mybooks.html');
        opensign();
    } else {
        window.location.href = 'mybooks.html'; 
    }
}