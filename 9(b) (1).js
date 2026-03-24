const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(bodyParser.urlencoded({ extended: true }));

// Form page
app.get('/', (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form method="POST" action="/submit">
            Name: <input type="text" name="name" required><br><br>
            Email: <input type="email" name="email" required><br><br>
            Course: <input type="text" name="course" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form data
app.post('/submit', (req, res) => {
    const { name, email, course } = req.body;

    res.send(`
        <h2>Form Submitted Successfully</h2>
        Name: ${name} <br>
        Email: ${email} <br>
        Course: ${course}
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});