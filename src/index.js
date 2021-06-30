const api = new apiTODO();

const renderTask = (task) => {
  if (task.priority === "low") {
    const container = document.getElementById('low_container');
    container.appendChild(task.renderDOMTask());
  }
  if (task.priority === "medium") {
    const container = document.getElementById('medium_container');
    container.appendChild(task.renderDOMTask());
  }
  if (task.priority === "high") {
    const container = document.getElementById('high_container');
    container.appendChild(task.renderDOMTask());
  }
}

const renderTaskOptimized = (task) => {
  const container = document.getElementById(`${task.priority}_container`);
  container.appendChild(task.renderDOMTask());
}

const init = async () => {
  const tasks = await api.getAll();
  tasks.forEach((task) => {
    const taskObject = new Task(task._id, task.title, task.value, task.priority);
    renderTaskOptimized(taskObject);
  });

  // RESOLVER PROMESA CON THEN Y CATCH
  // api.getAll()
  //   .then((response) => {
  //     console.log('response:', response)
  //     response.forEach((task) => {
  //       const taskObject = new Task(task._id, task.title, task.value, task.priority);
  //       renderTaskOptimized(taskObject);
  //     });
  //   })
  //   .catch((error) => {
  //     alert(error);
  //   })
  // CREACION DE OBJETOS MANUALMENTE
  // const task = new Task(1,"Primer low task", "a dask daskd askdja sdjk asdjasd ajdad", "low");
  // renderTaskOptimized(task);
  // const task1 = new Task(2,"Primer high task", "a dask daskd askdja sdjk asdjasd ajdad", "high");
  // renderTaskOptimized(task1);
  // const task2 = new Task(3,"Primer medium task", "a dask daskd askdja sdjk asdjasd ajdad", "low");
  // renderTaskOptimized(task2);
}

 function renderTest () {
   window.onload = () => {
    init();
   }
 }

 renderTest();

// api.getAll()
//   .then((response) => {
//     console.log('response:', response)
//   })
//   .catch((error) => {
//     console.log('error:', error)
//   });