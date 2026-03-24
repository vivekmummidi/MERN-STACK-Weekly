const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to read JSON data

let items = [];  // temporary storage

// POST → Add data
app.post('/items', (req, res) => {
    const item = req.body;

    if (!item || Object.keys(item).length === 0) {
        return res.status(400).send('Invalid data');
    }

    items.push(item);
    res.send('Item added successfully');
});

// GET → Retrieve all data
app.get('/items', (req, res) => {
    res.json(items);
});

// DELETE → Delete specific item by index
app.delete('/items/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= items.length) {
        return res.status(400).send('Invalid index');
    }

    items.splice(index, 1);
    res.send('Item deleted successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});