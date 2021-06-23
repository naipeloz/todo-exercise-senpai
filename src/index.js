const storage = new LocalStorage();

const task = new Task(0);

const testContainer = document.getElementById('test');

function init() {
  window.onload = () => {
    testContainer.appendChild(task.renderDomTest());
  }
}

init()
