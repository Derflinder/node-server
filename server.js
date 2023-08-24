const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Agrega soporte para JSON en las solicitudes

// Lista de tareas (inicialmente vacía)
const tasks = [
  {
    id: 1,
    description: 'Hacer la compra',
    completed: false,
  },
  {
    id: 2,
    description: 'Lavar el auto',
    completed: true,
  },
  {
    id: 3,
    description: 'Estudiar para el examen',
    completed: false,
  },
];

// Ruta GET para listar tareas completas
app.get('/list-view/completed-tasks', (req, res) => {
  const completedTasks = tasks.filter(task => task.completed);
  res.json(completedTasks);
});

// Ruta GET para listar tareas incompletas
app.get('/list-view/incomplete-tasks', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  res.json(incompleteTasks);
});

// Ruta POST para crear una nueva tarea
app.post('/list-edit/create-task', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.json(newTask);
});

// Ruta DELETE para eliminar una tarea por ID
app.delete('/list-edit/delete-task/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Tarea eliminada correctamente.' });
  } else {
    res.status(404).json({ error: 'Tarea no encontrada.' });
  }
});

// Ruta PUT para actualizar una tarea por ID
app.put('/list-edit/update-task/:taskId', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const updatedTask = req.body;
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    res.json({ message: 'Tarea actualizada correctamente.' });
  } else {
    res.status(404).json({ error: 'Tarea no encontrada.' });
  }
});

// Ruta GET para listar todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
