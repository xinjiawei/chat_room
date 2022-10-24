<?php
//header('Content-Type:application/json; charset=utf-8');
include './inc/config.php';


$query = "SELECT * FROM instantlocation ORDER BY id DESC LIMIT 10000;";
$result1 = mysqli_query($con,$query);
$row = mysqli_fetch_all($result1,MYSQLI_ASSOC);
mysqli_close($con);
exit(json_encode($row));
