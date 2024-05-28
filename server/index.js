const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let tasks = [ { 'id' : 1 }];

app.get('/api', (req, res) => {
    res.send('Hello from Vercel!');
});

app.get('/api/tasks', (req, res) => {
    console.log('GET /api/tasks');
    res.json(tasks);
  });
  
  app.post('/api/tasks', (req, res) => {
    console.log('POST /api/tasks');
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
  });
  
  app.delete('/api/tasks/:id', (req, res) => {
    console.log('DELETE /api/tasks/:id');
    const id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).end();
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
