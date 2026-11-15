const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary memory array for users (Ungaluku MongoDB iruntha antha code-ah inga podalam)
const usersDatabase = [];

// Serve static PDF books folder
app.use('/books', express.static(path.join(__dirname, '../frontend/books')));

// 1. Signup API Endpoint
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required!" });
    }

    // Check if user already exists
    const existingUser = usersDatabase.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ success: false, message: "Username already exists!" });
    }

    // Save user
    usersDatabase.push({ username, password });
    res.json({ success: true, message: "Account created successfully!" });
});

// 2. Login API Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = usersDatabase.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: "Login successful!", username: user.username });
    } else {
        res.status(400).json({ success: false, message: "Invalid username or password!" });
    }
});

// 3. Books API Endpoint
app.get('/api/books', (req, res) => {
    const books = [
        {
            title: "Thirukkural",
            author: "Thiruvalluvar",
            category: "Literature",
            image: "book1.png",
            file: "thirukkural.pdf"
        },
        {
            title: "Ponniyin Selvan",
            author: "Kalki Krishnamurthy",
            category: "Novel",
            image: "book1.png",
            file: "ponniyinselvan.pdf"
        },
        {
            title: "Aathichoodi",
            author: "Avvaiyar",
            category: "Literature",
            image: "book1.png",
            file: "aathichoodi.pdf"
        }
    ];
    res.json(books);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});