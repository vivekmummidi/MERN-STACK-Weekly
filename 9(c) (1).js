const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());

// Session setup
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true
}));

// Home route
app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Visited ${req.session.views} times <br>
                  <a href="/logout">Logout</a>`);
    } else {
        req.session.views = 1;
        res.send("Welcome! First visit <br><a href='/'>Refresh</a>");
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send("Session Ended");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});