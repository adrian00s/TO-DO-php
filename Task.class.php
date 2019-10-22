<?php
  namespace Task;

  class Task{
    private static $id = 0;
    private $task;
    
    public function __construct($task){
      self::$id++;
      $this->task = $task;

      # Write the task to the file
      $this->writeTaskToFile($this->task);
    }

    private function writeTaskToFile($task){
      # Open the file
      $openFile = fopen("./log/tasks.txt", "a+");

      # Write to file
      $writeToFile = fwrite($openFile, self::$id++.", $task\n");

      # Close writing to file;
      fclose($openFile);
    }

  }
  new Task($_POST["addTask"]);

?>