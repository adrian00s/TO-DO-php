(function(){
 
  let id = 0;
  const form =document.getElementById("taskForm");

  form.addEventListener('submit', addTask);

  function addTask(e){
    let table = document.getElementsByTagName('table')[0];

    if (this.getElementsByTagName("input")[0].value === ""){
      
    }else{
      table.innerHTML += `
      <tr>
        <td style="text-align: center;">${++id}</td>
        <td>${this.getElementsByTagName("input")[0].value}</td>
        <td style="text-align: center;"><button>X</button></td>
      </tr>
      `;
      this.getElementsByTagName("input")[0].value = "";
    }

    // Prevent default
    e.preventDefault();
  }

}());