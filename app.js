const readline = require('readline-sync');

const tasks = [];

function addTask(task) {
  return new Promise((resolve, reject) => {
    // Simular algún proceso
    setTimeout(() => {
      tasks.push(task);
      resolve('Tarea añadida correctamente.');
    }, 1000); // Simulando un segundo de espera
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    // Simular algún proceso
    setTimeout(() => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        resolve('Tarea eliminada correctamente.');
      } else {
        reject('El índice proporcionado no es válido.');
      }
    }, 1000);
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    // Simular algún proceso
    setTimeout(() => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        resolve('Tarea completada correctamente.');
      } else {
        reject('El índice proporcionado no es válido.');
      }
    }, 1000);
  });
}

function showTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
  console.log();
}

async function main() {
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
        const taskIndicator = readline.question('Indicador de la tarea: ');
        const taskDescription = readline.question('Descripción de la tarea: ');
        try {
          const result = await addTask({
            indicator: taskIndicator,
            description: taskDescription,
            completed: false,
          });
          console.log(result);
        } catch (error) {
          console.error(error);
        }
        break;
      case 2:
        const deleteIndex = readline.questionInt('Índice de la tarea a eliminar: ');
        deleteTask(deleteIndex)
          .then(result => console.log(result))
          .catch(error => console.error(error));
        break;
      case 3:
        const completeIndex = readline.questionInt('Índice de la tarea completada: ');
        completeTask(completeIndex)
          .then(result => console.log(result))
          .catch(error => console.error(error));
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
