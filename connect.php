<?php

   $connection = mysqli_connect('localhost','root','','book_db');

   if(isset($_POST['send'])){
      $name = $_POST['name'];
      $email = $_POST['email'];
      $subject = $_POST['subject'];
      $message = $_POST['message'];

      $request = "insert into connect(name, email, subject, message) values('$name','$email','$subject','$message')";
      mysqli_query($connection, $request);

      header('location:connect.php');

   }else{
      echo 'something went wrong please try again!';
   }

?>