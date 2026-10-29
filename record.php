<?php
  date_default_timezone_set('Asia/Singapore');
  $db = new PDO('sqlite:../protected/records.sq3');

  // Takes raw data from the request
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  $sql = '
    INSERT INTO Log (Game, Name, Score, Date)
    VALUES (?,?,?,?)';
  $st = $db->prepare($sql);
  $st->execute([$data['game'], $data['name'], $data['score'], time()]);
?>