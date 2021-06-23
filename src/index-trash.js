

function cargoListado (){    
    
    const localStorage = new LocalStorage();
    const tasks = localStorage.getAllTasks();
    const contentHigh = document.getElementById('content-high');
    const contentMedium = document.getElementById('content-medium');
    const contentLow = document.getElementById('content-low'); 
    
    contentHigh.innerHTML = "";
    contentMedium.innerHTML = "";
    contentLow.innerHTML = "";

    //PREGUNTAMOS PRIMERO SIEL ARRAY ESTA VACIO    
    if(tasks.length){
        tasks.forEach(myTask => {
            switch(myTask.priority.toLowerCase()){
                case PRIORITIES[0]:
                    contentHigh.appendChild(myTask.renderDOMTask());
                break;
                case PRIORITIES[1]:
                    contentMedium.appendChild(myTask.renderDOMTask());
                break;
                case PRIORITIES[2]:
                    contentLow.appendChild(myTask.renderDOMTask());
                break;
            }            
        });
    }
             
}


function init () {
    window.onload = () => {
      cargoListado();
    }
  }
  
  init();