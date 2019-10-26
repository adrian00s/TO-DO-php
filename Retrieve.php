<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Retrieve your tasks</title>
  <link rel="stylesheet" href="css/index.css">
</head>
<body>

  <h1 class="title">Retrieve your tasks</h1>

  <?php
    
    require_once("./Task.class.php");

    use Task as Task;

     if (isset($_POST["idArray"]) && isset($_POST["taskArray"])){
      $task = new Task\Task($_POST["idArray"], $_POST["taskArray"]);
      retrieveTasks();
    }

    function retrieveTasks(){
      $idArray = [];
      $taskArray = [];

      $fileArr = implode(",",file("./log/tasks.txt"));
      
      $arrayExploded = explode(",", $fileArr);
      
      foreach ($arrayExploded as $ID => $task){
        if ((int) $task){
          array_push($idArray, $task);
        }else{
          array_push($taskArray, $task);
        }
      }

      $combinedArray = array_combine($idArray, $taskArray);

      $table = "<table>
                  <tr>
                    <td>ID</td>
                    <td>Task</td>
                  </tr>
                ";
        
      
      foreach ($combinedArray as $id => $task){
          $table .= "<tr>
                      <td>$id</td>
                      <td>$task</td>
                    </tr>"; 
      }

      echo $table."</table>";
    }
  ?>
</body>
</html>