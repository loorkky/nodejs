const fs = require('fs');

let newText = 'Hello, World!';

let previousContent = '';
try {
    previousContent = fs.readFileSync('task02.txt', 'utf-8');
} catch (err) {
}

let newContent = previousContent + '\n' + newText;

fs.writeFileSync('task02.txt', newContent, 'utf-8');

console.log('Створенно новий рядок:', newText);