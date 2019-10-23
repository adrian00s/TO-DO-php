<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TO-DO List</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/index.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"> 
</head>
<body>

  <h1 class="title">TO-DO List PHP</h1>

  <form action="./Task.class.php" method="POST" id="taskForm">
    <div class="container">
      <input type="text" name="addTask">
      <button type="submit" name="addButton">ADD</button>
    </div><!--end of container-->
  </form> 

  <a href="" style="text-align: center; display:block; margin-top: 15px;">Retrieve task -></a>

  <table>
    <tr>
      <td style="text-align: center;">ID</td>
      <td style="text-align: center;">TASK</td>
      <td>ACTIONS</td>
    </tr>
  </table>

  <script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
  </script>   
  <script src="js/writeTask.js"></script>
  
</body>
</html>