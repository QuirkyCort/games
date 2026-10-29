<!DOCTYPE html>
<html>
<head>
  <style>
    th, td {
      padding: 0.2em 0.5em;
    }
    th {
      background: lightblue;
    }
    td {
      background: #ddd;
    }
    tr {
      border-top: solid 2px;
    }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Game</th>
        <th>Name</th>
        <th>Score</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    <?php
      date_default_timezone_set('Asia/Singapore');
      $db = new PDO('sqlite:../protected/records.sq3');

      $sql = '
        SELECT *
        FROM Log
        ORDER BY Date DESC';
      $st = $db->prepare($sql);
      $st->execute();
      $lines = $st->fetchAll();

      foreach ($lines as $line) {
        echo '<tr>';
        echo '<td>' . $line['Game'] . '</td>';
        echo '<td>' . $line['Name'] . '</td>';
        echo '<td>' . $line['Score'] . '</td>';
        echo '<td>' . date('g:ia, j M y', $line['Date']) . '</td>';
        echo '</tr>';
      }
    ?>
    </tbody>
  </table>
  <form action="clear.php" method="post">
    <input type="hidden" name="command" value="clear">
    <input type="submit" value="Delete All">
  </form>
</body>
</html>
