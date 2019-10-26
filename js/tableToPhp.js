export function formatTable(){
  let idArray = [];
  let taskArray = [];

  let task =  $("tr.task");

  for (let i = 0; i < task.length; i++){
    idArray.push(task[i].children[0].firstChild.nodeValue);
    taskArray.push(task[i].children[1].firstChild.nodeValue);
  }

  return [idArray, taskArray];
}

function retrieveTask(){

  let task =  $("tr.task");

  let idInput = document.getElementById("idArray");
  let taskInput = document.getElementById("taskArray");

  let data = new FormData();

  idInput.value = formatTable()[0].join("]");
  taskInput.value = formatTable()[1].join("]");

  data.append("idArray", idInput.value);
  data.append("taskInput", taskInput.value);
  
  fetch("../Retrieve.php", {method: "POST", body: data});

  // Prevent default if no tr.task found
  if (task.length <= 0){
    return false;
  }

}

$('.retrieveTask').on('click', retrieveTask);