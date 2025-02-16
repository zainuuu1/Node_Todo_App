const express = require('express');
const path = require('path');

// Initialize the app
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// In-memory storage for todos
let todos = [];

// Route to serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// API route to add a new todo
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task };
  todos.push(newTodo);
  
  // Log the added todo task to the Docker logs
  console.log(`✅ New Todo added: ${newTodo.id}. ${newTodo.task}`);

  res.json(newTodo);
});

// Start the server
app.listen(port, () => {
  console.log(`🌐 Server is working at http://localhost:${port}`);
});
