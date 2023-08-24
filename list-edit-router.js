const express = require('express');
const router = express.Router();

// Ruta POST para crear una nueva tarea
router.post('/create-task', (req, res) => { 
});

// Ruta DELETE para eliminar una tarea
router.delete('/delete-task/:taskId', (req, res) => {
});

// Ruta PUT para actualizar una tarea
router.put('/update-task/:taskId', (req, res) => {
});

module.exports = router;
