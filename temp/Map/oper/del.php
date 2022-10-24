<?php
session_start();
if($_SESSION['checked'] != true){//检验是bai否通过验证，du没有回到首页
header('location:check.php');
session_destroy();
}

header ( "Content-type:text/html;charset=utf-8" );  
include './inc/config.php';
//00000000000000000多条数据更新0000000000000000000
//mysqli_query($con,"DELETE FROM instantlocation WHERE charact='char'");
$resetsql = "TRUNCATE TABLE instantlocation";

mysqli_select_db( $con, 'location' );
$retval = mysqli_query( $con, $resetsql );
if(! $retval )
{
    //die('无法重置数据库: ' . mysqli_error($con));
    die('无法重置数据库');
}
echo 'resetsucc';

mysqli_close($con);


?>