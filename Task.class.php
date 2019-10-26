<?php
  namespace Task;

  class Task{
    private $ids;
    private $tasks;

    public function __construct($ids, $task){
      $this->ids = $ids;
      $this->task = $task;

      # Write the task to the file
      $this->writeTaskToFile($this->ids, $this->task);
    }

    private function writeTaskToFile($ids, $tasks){
      # Open the file
      $openFile = fopen("./log/tasks.txt", "w+");

      # Array conversion
      $idsArray = explode("]", $ids);
      $tasksArray = explode("]", $tasks);

      $combinedIdTasks = array_combine($idsArray, $tasksArray);
      
      # Format writing in the file
      foreach ($combinedIdTasks as $id => $task){
        fwrite($openFile, $id.",".$task."\n");
      }

      # Close writing to file;
      fclose($openFile);
    }
  }
?>