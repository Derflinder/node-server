const express = require('express');
const router = express.Router();

// Ruta POST para crear una nueva tarea
router.post('/create-task', (req, res) => {
  // Aquí implementa la lógica para crear una nueva tarea
});

// Ruta DELETE para eliminar una tarea
router.delete('/delete-task/:taskId', (req, res) => {
  // Aquí implementa la lógica para eliminar una tarea
});

// Ruta PUT para actualizar una tarea
router.put('/update-task/:taskId', (req, res) => {
  // Aquí implementa la lógica para actualizar una tarea
});

module.exports = router;
