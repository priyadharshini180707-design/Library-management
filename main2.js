// Popups logic
function openLogin() {
    let popup = document.getElementById("loginPopup");
    let signupBox = document.getElementById("signupBox");
    let loginBox = document.getElementById("loginBox");
    
    if(popup) popup.style.display = "flex";
    if(signupBox) signupBox.style.display = "none";
    if(loginBox) loginBox.style.display = "block";
}

function opensign() {
    let popup = document.getElementById("loginPopup");
    let signupBox = document.getElementById("signupBox");
    let loginBox = document.getElementById("loginBox");
    
    if(popup) popup.style.display = "flex";
    if(signupBox) signupBox.style.display = "block";
    if(loginBox) loginBox.style.display = "none";
}

function closeLogin() {
    let popup = document.getElementById("loginPopup");
    if(popup) {
        popup.style.display = "none";
    }
}

// Signup function (Fixed & Safe)
function signupUser() {
    let usernameInput = document.getElementById("signupUsername");
    let passwordInput = document.getElementById("signuppassword");
    
    if (!usernameInput || !passwordInput) {
        alert("Signup form elements not found!");
        return;
    }

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    
    if (username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Signup Successful! 🥳 Please login now.");
    
    // Clear inputs
    usernameInput.value = "";
    passwordInput.value = "";

    // Switch to login box
    let signupBox = document.getElementById("signupBox");
    let loginBox = document.getElementById("loginBox");
    if(signupBox) signupBox.style.display = "none";
    if(loginBox) loginBox.style.display = "block";
}

// Login function (Fixed & Safe)
function loginUser() {
    let userinput = document.getElementById("loginUsername");
    let passinput = document.getElementById("loginPassword");
    
    if (!userinput || !passinput) return;

    let user = userinput.value.trim();
    let pass = passinput.value.trim();
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");
    
    if (user === savedUser && pass === savedPass) {
        alert("✅ Login Successful! 🥳");
        localStorage.setItem("isLoggedIn", "true");
        closeLogin();
        window.location.href = "index.html";
    } else {
        alert("❌ Invalid Username or Password! 😖");
    }
}

function openMyBooks() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("⚠ Please Login First!");
        opensign();
        return;
    }
    window.location.href = "mybooks.html";
}

// Password eye toggles
const eye = document.getElementById("eye");
if(eye) {
    eye.onclick = function() {
        const password = document.getElementById("signuppassword");
        if (password) {
            if (password.type === "password") {
                password.type = "text";
                eye.classList.remove("fa-eye");
                eye.classList.add("fa-eye-slash");
            } else {
                password.type = "password";
                eye.classList.remove("fa-eye-slash");
                eye.classList.add("fa-eye");
            }
        }
    }
}

const loginEye = document.getElementById("loginEye");
if(loginEye) {
    loginEye.onclick = function() {
        const loginPassword = document.getElementById("loginPassword");
        if (loginPassword) {
            if (loginPassword.type === "password") {
                loginPassword.type = "text";
                loginEye.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                loginPassword.type = "password";
                loginEye.classList.replace("fa-eye-slash", "fa-eye");
            }
        }
    }
}

// ==========================================
// 📚 BOOK MANAGEMENT & CATEGORY FILTER LOGIC
// ==========================================

const booksData = [
    { title: "Atomic Habits", category: "selfdevelopment", author: "James Clear", image: "book1.png", pdf: "books/atomic-habits.pdf" },
    { title: "Harry Potter", category: "fiction", author: "J.K. Rowling", image: "book2.jpg", pdf: "books/harry-potter.pdf" },
    { title: "Clean Code", category: "technology", author: "Robert C. Martin", image: "book3.jpg", pdf: "books/clean-code.pdf" },
    { title: "Thirukkural", category: "tamil", author: "Thiruvalluvar", image: "book1.png", pdf: "books/thirukkural.pdf" }
];

function filterBooks(category) {
    const container = document.querySelector('.book-container');
    if (!container) return;
    
    container.innerHTML = "";

    const filtered = (category === 'all') 
        ? booksData 
        : booksData.filter(b => b.category === category);

    filtered.forEach(book => {
        const card = `
            <div class="book-card all ${book.category}">
                <div class="book-top">
                    <h1 class="t2">${book.category.toUpperCase()}</h1>
                    <i class="fa-solid fa-heart heart-icon" data-title="${book.title}" onclick="saveBook('${book.title}','${book.image}','${book.pdf}')" style="cursor: pointer;"></i>
                </div>
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <a href="read.html?file=${book.pdf}&title=${encodeURIComponent(book.title)}" class="auth-btn" style="display: block; text-align: center; text-decoration: none; margin-top: 10px;">Read Now</a>
            </div>
        `;
        container.innerHTML += card;
    });
}

function saveBook(title, image, pdf) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("⚠ Please Login First to save your favorite books!");
        opensign();
        return;
    }

    let savedBooks = JSON.parse(localStorage.getItem("myFavoriteBooks")) || [];
    
    let exists = savedBooks.some(b => b.title === title);
    if (exists) {
        alert(title + " is already in your My Books! 📚");
        return;
    }

    savedBooks.push({ title, image, pdf });
    localStorage.setItem("myFavoriteBooks", JSON.stringify(savedBooks));
    alert(title + " added to your favorite books! ❤️️");
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.book-container')) {
        filterBooks('all');
    }
});