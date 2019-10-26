import { formatTable } from "./tableToPhp.js";

(function(){
  let id = 1;
  const form =document.getElementById("taskForm");

  form.addEventListener('submit', addTask);

  function addTask(e){
    let table = document.getElementsByTagName('table')[0];

    if (this.getElementsByTagName("input")[0].value === "" 
    || this.getElementsByTagName("input")[0].value.match(/^\d+$/) 
    || !isNaN(this.getElementsByTagName("input")[0].value.charAt(0))){
      
    }else{
      table.innerHTML += `
      <tr class="task">
        <td class="id" style="text-align: center;">${id++}</td>
        <td class="taskName">${this.getElementsByTagName("input")[0].value}</td>
        <td class="removeTd" style="text-align: center;"><button class="remove">X</button></td>
      </tr>
      `;
      this.getElementsByTagName("input")[0].value = "";
      removeTask();
      formatTable();
    }

    // Prevent default
    e.preventDefault();
  }

  function removeTask(){
    let getButtons = document.getElementsByClassName("remove");

    for (let i = 0; i < getButtons.length; i++){

      // Make a new scope with the index as the argument. Index will represent each button
      (function(i){

        getButtons[i].onclick = function(){
          /*
          * Get closest tr (near button) and get all next tr after that tr 
          * I'm working with tbody in order to get tr.
          * Get tr and change td node value to the value it had before -1.
          * To avoid messing up with the id. Outside of the foreach we need to reduce it by 1
          * Remove the previous tr as its marked as "finished task"
          * Each task gets assigned a correct id number
          */
          let prevId = $(this).closest("tr").parent();
          $(prevId).nextAll().each(function(i, tbody){
            let tr = tbody.children[0];
            tr.children[0].firstChild.nodeValue =  Number(tr.children[0].firstChild.nodeValue)-1;
          }); 

          id--;

          $(prevId).remove();
          formatTable();
        }
      }(i));
    }
  }
}());
  