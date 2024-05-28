const express = require('express');
const app = express();
app.use(express.json());

let tasks = [{ id: 1 }];

app.get('/api', (req, res) => {
    res.send('Hello from Vercel!');
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).end();
});

module.exports = app;
