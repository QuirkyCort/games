<?php
  date_default_timezone_set('Asia/Singapore');
  $db = new PDO('sqlite:../protected/records.sq3');

  if ($_POST['command'] == 'clear') {
    $sql = '
    DELETE FROM Log';
    $st = $db->prepare($sql);
    $st->execute();
  }

  header("Location: display.php");
  exit;
?>