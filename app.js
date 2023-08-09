const readline = require('readline-sync');

const tasks = [];

function addTask() {
  const taskIndicator = readline.question('Indicador de la tarea: ');
  const taskDescription = readline.question('Descripción de la tarea: ');

  const task = {
    indicator: taskIndicator,
    description: taskDescription,
    completed: false,
  };

  tasks.push(task);
  console.log('Tarea añadida correctamente.');
}

function deleteTask() {
  const taskIndex = readline.questionInt('Índice de la tarea a eliminar: ');

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    console.log('Tarea eliminada correctamente.');
  } else {
    console.log('El índice proporcionado no es válido.');
  }
}

function completeTask() {
  const taskIndex = readline.questionInt('Índice de la tarea completada: ');

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
    console.log('Tarea completada correctamente.');
  } else {
    console.log('El índice proporcionado no es válido.');
  }
}

function showTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
  console.log();
}

function main() {
  let running = true;
  while (running) {
    console.log('Opciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Marcar tarea como completada');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const option = readline.questionInt('Elige una opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        deleteTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        showTasks();
        break;
      case 5:
        running = false;
        break;
      default:
        console.log('Opción no válida.');
        break;
    }
  }
}

main();
