class LocalStorage {
  STORAGE_NAME = 'todoList';

  getList() {
    return localStorage.getItem(this.STORAGE_NAME) ? JSON.parse(localStorage.getItem(this.STORAGE_NAME)) : [];
  }

  saveTask(task) {
    const tasks = this.getList();
    tasks.push(task);
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(tasks));
  }

  saveTasks (list) {
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(list));
  }

  getAllTasks() {
    const tasks = this.getList();
    const objectTasks = tasks.map((item) => new Task(item.index, item.date, item.tittle, item.value, item.priority, item.isRemoved));
    return objectTasks.filter((item) => !item.isRemoved);
     
  }

  getTaskByPriority(priority) {
    const tasks = this.getList();
    const objectTasks = tasks.map((item) => new Task(item.index, item.date, item.tittle, item.value, item.priority));
    return objectTasks.filter((item) => item.priority === priority && !item.isRemoved);
  }

  removeAllTasks() {
    const tasks = this.getList();
    tasks.forEach(element => {
      element.isRemoved = true;
    });
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(tasks));  
  }

  removeTaskById(id) {
    const tasks = this.getList();
    const idItem = tasks.findIndex((item) => item.index === id);
    tasks[idItem].isRemoved = true;
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(tasks));  
  }

  removeAllTaskFisic(){
     localStorage.clear(); 
  }

  removeTaskByIdFisic(id) {
    const tasks = this.getList();
    const idItem = tasks.findIndex((item) => item.index === id);
    tasks.splice(idItem,true); 
    localStorage.setItem(this.STORAGE_NAME, JSON.stringify(tasks));  
  }

  getLastIndex () {
    const listTasks = this.getList();
    return listTasks[listTasks.length - 1].index;
  }
};
