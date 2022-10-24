<?php
$database = "location";
$dataname = "location";
$datapasswd = "zGkKbADAhsbAnRGS";
$datalocal = "localhost:3306";
//$dataport = "3306";
$con = mysqli_connect($datalocal,$dataname,$datapasswd,$database);
if(!$con){
    echo "数据库连接异常";
}
//设置查询数据库编码
mysqli_query($con,'set names utf8');

?>