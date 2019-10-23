(function($){
 
  let id = 0;
  const form =document.getElementById("taskForm");

  form.addEventListener('submit', addTask);

  function addTask(e){
    let table = document.getElementsByTagName('table')[0];

    if (this.getElementsByTagName("input")[0].value === ""){
      
    }else{
      table.innerHTML += `
      <tr class="task">
        <td class="id" style="text-align: center;">${++id}</td>
        <td class="taskName">${this.getElementsByTagName("input")[0].value}</td>
        <td class="removeTd" style="text-align: center;"><button class="remove">X</button></td>
      </tr>
      `;
      this.getElementsByTagName("input")[0].value = "";
      removeTask();
    }

    // Prevent default
    e.preventDefault();
  }

  function removeTask(){
    let getButtons = document.getElementsByClassName("remove");

    for (let i = 0; i < getButtons.length; i++){

      (function(i){

        getButtons[i].onclick = function(){

          let prevId = $(this).closest("tr").parent();
          $(prevId).nextAll().each(function(i, tbody){
            let tr = tbody.children[0];
            tr.children[0].firstChild.nodeValue = Number(tr.children[0].firstChild.nodeValue)-1;
            id--;
          }); 

          $(prevId).remove();

        }
      }(i));
    }

  }

  function removeNextTd(button){
    let getTableTr = document.getElementsByTagName("tr");

    console.log(button)
      console.log($(button).next("button.remove"));
  }

  

}(jQuery));