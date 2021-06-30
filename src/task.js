class Task {

  constructor (index, title = '', value = '', priority= 'low') {
    this.index = index;
    this.id = `task-${index}`;
    this.priority = priority;
    this.title = title;
    this.value = value;
  }

  renderDOMTask () {
    // Crear elementos del producto
    const task = document.createElement('div');
    const taskInfo = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskValue = document.createElement('div');
    // Agregar data de cada elemento
    task.classList.add('task');
    task.id = this.id;
    task.classList.add(this.priority);
    taskInfo.classList.add('desc');
    taskTitle.classList.add('title');
    taskTitle.innerHTML = this.title;
    taskValue.innerHTML = this.value;
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskValue);
    task.appendChild(taskInfo);
    // task.appendChild(taskInfo);
    // task.classList.add();
    // task.id = this.id
    // inputValue.classList.add('value');
    // saveBtn.classList.add('save-btn');
    // saveBtn.setAttribute('data-parent', this.id);
    // saveBtn.textContent = 'Actualizar';
    // removeBtn.classList.add('remove-btn');
    // removeBtn.setAttribute('data-parent', this.id);
    // removeBtn.textContent = 'Eliminar';
    // //Agregar elementos al contenedor
    // task.appendChild(inputValue);
    // task.appendChild(saveBtn);
    // task.appendChild(removeBtn);
    return task;
  }
}