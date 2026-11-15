// ==========================================
// 1. BOOKS DATA & CATALOG LOGIC (for books.html)
// ==========================================
const booksData = [
    // --- TAMIL BOOKS (20 Books) ---
    { title: "Thirukkural", category: "tamil", image: "book4.jpg", file: "thirukkural.pdf" },
    { title: "Ponniyin Selvan", category: "tamil", image: "book12.jpg", file: "ponniyin-selvan.pdf" },
    { title: "Sivagamiyin Sabatham", category: "tamil", image: "book13.jpg", file: "sivagamiyin-sabatham.pdf" },
    { title: "Parthiban Kanavu", category: "tamil", image: "book14.jpg", file: "parthiban-kanavu.pdf" },
    { title: "Kural Amutham", category: "tamil", image: "book15.jpg", file: "kural-amutham.pdf" },
    { title: "Agal Vilakku", category: "tamil", image: "book16.jpg", file: "agal-vilakku.pdf" },
    { title: "Alai Osai", category: "tamil", image: "book17.jpg", file: "Alai Osai.pdf" },
    { title: "Karuvachi Kaviyam", category: "tamil", image: "book18.jpg", file: "karuvachi-kaviyam.pdf" },
    { title: "Thanneer Desam", category: "tamil", image: "book19.jpg", file: "thanneer-desam.pdf" },
    { title: "Oru Manithanin Kathai", category: "tamil", image: "book20.jpg", file: "oru-manithanin-kathai.pdf" },
    { title: "Sila Nerangalil", category: "tamil", image: "book21.jpg", file: "sila-nerangalil.pdf" },
    { title: "Kutrala Kuravanji", category: "tamil", image: "book22.jpg", file: "Kutrala Kuravanji.pdf" },
    { title: "Kadal Pura", category: "tamil", image: "book23.jpg", file: "Kadal Pura.pdf" },
    { title: "Chithirappavai", category: "tamil", image: "book24.jpg", file: "chithirappavai.pdf" },
    { title: "Vengaiyin Mainthan", category: "tamil", image: "book25.jpg", file: "vengaiyin-mainthan.pdf" },
    { title: "Thiruvasagam", category: "tamil", image: "book26.jpg", file: "Thiruvasagam.pdf" },
    { title: "Kambaramayanam", category: "tamil", image: "book27.jpg", file: "Kambaramayanam.pdf" },
    { title: "Silappathikaram", category: "tamil", image: "book28.jpg", file: "Silappathikaram.pdf" },
    { title: "Periya Puranam", category: "tamil", image: "book29.jpg", file: "Periya Puranam.pdf" },
    { title: "Jeevanamsam", category: "tamil", image: "book30.jpg", file: "Jeevanamsam.pdf" },

    // --- FICTION ---
    { title: "Harry Potter", category: "fiction", image: "book2.jpg", file: "harry-potter.pdf" },
    { title: "The Alchemist", category: "fiction", image: "book32.jpg", file: "the-alchemist.pdf" },
    { title: "The Lord of the Rings", category: "fiction", image: "book33.jpg", file: "lord-of-the-rings.pdf" },
    { title: "The Hobbit", category: "fiction", image: "book34.jpg", file: "the-hobbit.pdf" },
    { title: "To Kill a Mockingbird", category: "fiction", image: "book35.jpg", file: "to-kill-a-mockingbird.pdf" },
    { title: "The Great Gatsby", category: "fiction", image: "book36.jpg", file: "the-great-gatsby.pdf" },
    { title: "1984", category: "fiction", image: "book37.jpg", file: "1984.pdf" },
    { title: "Pride and Prejudice", category: "fiction", image: "book38.jpg", file: "pride-and-prejudice.pdf" },
    { title: "The Catcher in the Rye", category: "fiction", image: "book39.jpg", file: "catcher-in-the-rye.pdf" },
    { title: "The Chronicles of Narnia", category: "fiction", image: "book40.jpg", file: "chronicles-of-narnia.pdf" },

    // --- TECHNOLOGY ---
    { title: "Cyber Security", category: "technology", image: "book5.jpg", file: "cyber-security.pdf" },
    { title: "Python Programming", category: "technology", image: "book42.jpg", file: "python-programming.pdf" },
    { title: "Clean Code", category: "technology", image: "book3.jpg", file: "clean-code.pdf" },
    { title: "JavaScript Guide", category: "technology", image: "book44.jpg", file: "javascript-guide.pdf" },
    { title: "Artificial Intelligence", category: "technology", image: "book45.jpg", file: "ai.pdf" },

    // --- SCIENCE ---
    { title: "Chemistry Basics", category: "science", image: "book6.jpg", file: "chemistry.pdf" },
    { title: "A Brief History of Time", category: "science", image: "book52.jpg", file: "brief-history-of-time.pdf" },
    { title: "Cosmos", category: "science", image: "book53.jpg", file: "cosmos.pdf" },

    // --- HISTORY ---
    { title: "World History", category: "history", image: "book7.jpg", file: "history.pdf" },
    { title: "Sapiens", category: "history", image: "book62.jpg", file: "sapiens.pdf" },

    // --- SELF DEVELOPMENT ---
    { title: "Atomic Habits", category: "selfdevelopment", image: "book1.png", file: "atomic-habits.pdf" },
    { title: "The Power of Now", category: "selfdevelopment", image: "book72.jpg", file: "power-of-now.pdf" },

    // --- BUSINESS ---
    { title: "Business Strategy", category: "business", image: "book8.jpg", file: "business.pdf" },
    { title: "Rich Dad Poor Dad", category: "business", image: "book82.jpg", file: "rich-dad-poor-dad.pdf" },

    // --- ROMANCE ---
    { title: "Romeo and Juliet", category: "romance", image: "book9.jpg", file: "romeo-and-juliet.pdf" },
    { title: "Pride and Prejudice", category: "romance", image: "book38.jpg", file: "pride-and-prejudice.pdf" },

    // --- SCIENCE FICTION ---
    { title: "Frankenstein", category: "sciencefiction", image: "book10.jpg", file: "Frankenstein.pdf" },
    { title: "Dune", category: "sciencefiction", image: "book102.jpg", file: "dune.pdf" }
];

// Page load aanathum books-ah display panrathuku & login check panrathuku
document.addEventListener("DOMContentLoaded", () => {
    displayBooks(booksData);
    checkUserLogin();
    checkThemeOnLoad();
});

// Books-ah screen-la render panra function
function displayBooks(books) {
    const container = document.getElementById("bookListContainer");
    if (!container) return; 
    
    container.innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: white; font-size: 1.2rem;">No books found!</p>`;
        return;
    }

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = `book-card all ${book.category.toLowerCase().trim()}`;
        card.innerHTML = `
            <div class="book-top">
                <h1 class="t2">${capitalizeFirstLetter(book.category)}</h1>
                <i class="fa-solid fa-heart heart-icon" data-title="${book.title}" onclick="saveBook('${book.title}', '${book.image}', '${book.file}')" style="cursor: pointer;"></i>
            </div>
            <img src="${book.image}" alt="${book.title}" style="width: 100%; height: 220px; object-fit: contain; background: #f9f9f9; padding: 10px;">
            <h3>${book.title}</h3>
            <div style="display: flex; gap: 8px; margin-top: 10px;">
                <a href="books/${book.file}" target="_blank" class="auth-btn" style="flex: 1; text-align: center; text-decoration: none;">Read</a>
                <a href="books/${book.file}" download="${book.title}.pdf" class="auth-btn" style="flex: 1; text-align: center; background-color: #28a745; text-decoration: none;">Download</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Category filter function
function filterBooks(category) {
    const sectionTitle = document.getElementById("sectionTitle");
    
    if (category === 'all') {
        if (sectionTitle) sectionTitle.innerText = "All Books Collection";
        displayBooks(booksData);
    } else {
        if (sectionTitle) sectionTitle.innerText = `${capitalizeFirstLetter(category)} Books Collection`;
        const filtered = booksData.filter(book => book.category.toLowerCase() === category.toLowerCase());
        displayBooks(filtered);
    }
}

// Search bar function
function searchBook() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    const filtered = booksData.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filtered);
}

// Helper function for capitalize
function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ==========================================
// 2. POPUP CONTROL FUNCTIONS
// ==========================================
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

// ==========================================
// 3. PASSWORD SHOW/HIDE (EYE ICON FEATURE)
// ==========================================
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

// ==========================================
// 4. SIGNUP USER (BACKEND & MONGODB INTEGRATED)
// ==========================================
async function signupUser() {
    const usernameInput = document.getElementById('signupUsername');
    const passwordInput = document.getElementById('signuppassword');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!username || !password) {
        alert('Please fill in both username and password! 🥹');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            alert('Account created successfully! 🥳');
            
            localStorage.setItem('libraUser', username);
            localStorage.setItem('isLoggedIn', 'true');

            usernameInput.value = '';
            passwordInput.value = '';

            closeLogin();
            checkUserLogin();
        } else {
            alert(result.message || 'Signup failed! Please try again.');
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert('Cannot connect to server. Make sure Node.js is running!');
    }
}

// ==========================================
// 5. LOGIN USER (BACKEND & MONGODB INTEGRATED)
// ==========================================
async function loginUser() {
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (!username || !password) {
        alert('Please fill in both username and password!');
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            alert('Login successful! Welcome back.');
            
            localStorage.setItem('libraUser', result.username);
            localStorage.setItem('isLoggedIn', 'true');

            usernameInput.value = '';
            passwordInput.value = '';

            closeLogin();
            checkUserLogin();
        } else {
            alert(result.message || 'Invalid username or password!');
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert('Cannot connect to server. Make sure Node.js is running!');
    }
}

// ==========================================
// 6. NAVBAR STATUS CHECK
// ==========================================
function checkUserLogin() {
    const currentUser = localStorage.getItem('libraUser');
    const authButtons = document.getElementById('authButtons');

    if (currentUser && authButtons) {
        authButtons.innerHTML = `
            <span style="color: inherit; margin-right: 15px; font-weight: 500;">
                <i class="fa-solid fa-user"></i> ${currentUser}
            </span>
            <button class="b2" onclick="logoutUser()" style="background-color: #d9534f; border: none; cursor: pointer; padding: 6px 14px; border-radius: 4px; color: white;">Logout</button>
        `;
    }
}

// ==========================================
// 7. LOGOUT FUNCTION
// ==========================================
function logoutUser() {
    localStorage.removeItem('libraUser');
    localStorage.removeItem('isLoggedIn');
    location.reload();
}

// ==========================================
// 8. DARK / LIGHT MODE TOGGLE FEATURE
// ==========================================
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

function checkThemeOnLoad() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = document.getElementById('themeIcon');
        if(icon) icon.classList.replace('fa-moon', 'fa-sun');
    }
}

// ==========================================
// 9. PROTECTED ROUTE CHECK FOR MY BOOKS
// ==========================================
function openMyBooks() {
    const currentUser = localStorage.getItem('libraUser') || "Priyadharshini P";
    localStorage.setItem('libraUser', currentUser);
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'mybooks.html';
}

// ==========================================
// 10. SAVE BOOK TO MY BOOKS (LOCALSTORAGE)
// ==========================================
function saveBook(title, image, pdfUrl) {
    let currentUser = localStorage.getItem('libraUser');
    if (!currentUser) {
        currentUser = "Priyadharshini P";
        localStorage.setItem('libraUser', currentUser);
        localStorage.setItem('isLoggedIn', 'true');
    }

    let favKey = 'mySavedBooks_' + currentUser;
    let myBooks = JSON.parse(localStorage.getItem(favKey)) || [];
    
    const exists = myBooks.some(book => book.title === title);
    if (!exists) {
        myBooks.push({ title, image, pdfUrl });
        localStorage.setItem(favKey, JSON.stringify(myBooks));
        alert(`"${title}" added to your My Books collection! 📚✨`);
    } else {
        alert(`"${title}" is already in your My Books collection!`);
    }
}