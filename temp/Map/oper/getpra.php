<?php
header ( "Content-type:text/html;charset=utf-8" );  

include './inc/config.php';

$la = $_GET["latitude"];
$lo = $_GET["longitude"];
//$la = 1.23;
//$lo = 2.34;
//echo($lo);
//00000000000000000多条数据更新0000000000000000000
$sql = "insert into instantlocation(charact, latitude, longitude) values('char', $la, $lo)";
mysqli_select_db( $con, 'location' );
$retval = mysqli_query( $con, $sql );
if(! $retval )
{
    die('无法更新数据: ' . mysqli_error($con));
}
echo '数据库更新成功';

//00000000000000000单条数据更新0000000000000000000
// 设置编码，防止中文乱码
//$sql = "UPDATE instantlocation
//        SET latitude=$la,longitude=$lo
//        WHERE charact='char'";
 
//mysqli_select_db( $con, 'location' );
//$retval = mysqli_query( $con, $sql );
//if(! $retval )
//{
//    die('无法更新数据: ' . mysqli_error($con));
//}
//echo '数据库更新成功！';
//000000000000000000000000000000000000000000000000000000000

$query = "SELECT * FROM instantlocation ORDER BY id DESC LIMIT 1;";
$result1 = mysqli_query($con,$query);
$row = mysqli_fetch_array($result1);
mysqli_close($con);
//echo($row);
// 返回响应
echo "【";
echo '采集端经度:' . htmlspecialchars($_GET["latitude"]);
echo "】【";
echo('数据库经度:' . $row['latitude']);
echo "】【";
echo '采集端纬度:' . htmlspecialchars($_GET["longitude"]);
echo "】【";
echo('数据库纬度:' . $row['longitude']);
echo "】【";
echo('数据库最新位置id:' . $row['id']);
echo "】";
//exit(json_encode($row));

?>