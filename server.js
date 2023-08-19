const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

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

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
