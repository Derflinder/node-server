const express = require('express');
const router = express.Router();

// Ruta GET para listar tareas completas
router.get('/completed-tasks', (req, res) => {
  // Aquí implementa la lógica para listar tareas completas
});

// Ruta GET para listar tareas incompletas
router.get('/incomplete-tasks', (req, res) => {
  // Aquí implementa la lógica para listar tareas incompletas
});

module.exports = router;
