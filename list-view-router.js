const express = require('express');
const router = express.Router();

// Middleware para validar parámetros
router.param('taskId', (req, res, next, taskId) => {
  if (isNaN(taskId) || parseInt(taskId) <= 0) {
    return res.status(400).json({ error: 'Parámetro taskId inválido.' });
  }
  next();
});

// Ruta GET para listar tareas completas
router.get('/completed-tasks', (req, res) => {
  const completedTasks = tasks.filter(task => task.completed);
  res.json(completedTasks);
});

// Ruta GET para listar tareas incompletas
router.get('/incomplete-tasks', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  res.json(incompleteTasks);
});

module.exports = router;

