const express = require('express');
const router = express.Router();

// Middleware para manejar errores en solicitudes POST y PUT
router.use((req, res, next) => {
  if ((req.method === 'POST' || req.method === 'PUT') && !req.body) {
    return res.status(400).json({ error: 'Solicitud con cuerpo vacío.' });
  }

  // Puedes agregar aquí más lógica para validar los datos en la solicitud POST y PUT

  next(); // Pasa al siguiente middleware/ruta
});

// Ruta POST para crear una nueva tarea
router.post('/create-task', (req, res) => {
  // ...
});

// Ruta DELETE para eliminar una tarea
router.delete('/delete-task/:taskId', (req, res) => {
  // ...
});

// Ruta PUT para actualizar una tarea
router.put('/update-task/:taskId', (req, res) => {
  // ...
});

module.exports = router;
