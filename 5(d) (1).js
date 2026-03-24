const fs = require('fs');
const path = require('path');

// Create file in same folder
const filePath = path.join(__dirname, 'src.txt');

const content = "HTML, CSS, JavaScript, TypeScript, MongoDB, Express.js, React.js, Node.js";

// Write file
fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("src.txt file created successfully");
    }
});