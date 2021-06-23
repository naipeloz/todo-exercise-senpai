class LocalStorage {
  STORAGE_NAME = 'todoList';

  saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_NAME));
    tasks.push(task);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(task));
  }

  saveTasks (list) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
  }

  getAllTasks() {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_NAME));
    return tasks.map((item) => new Task(item.index, item.date, item.tittle, item.value, item.priority));
  }

  getTaskByPriority(priority) {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_NAME));
    const objectTasks = tasks.map((item) => new Task(item.index, item.date, item.tittle, item.value, item.priority));
    return objectTasks.filter((item) => item.priority === priority);
  }

  removeAllTasks() {
    localStorage.clear();
  }

  removeTaskById(id) {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_NAME));
    const idItem = tasks.findIndex((item) => item.index === id);
    tasks.splice(idItem, 1);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks));  
  }

  getLastIndex () {
    const listTasks = JSON.parse(localStorage.getItem(STORAGE_NAME));
    return listTasks[listTasks.length - 1].index;
  }
};

