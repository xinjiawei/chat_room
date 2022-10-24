<?php
session_start();//开启session
if($_GET['id'] == '1000002'){//验证
  $_SESSION['checked'] = true;
    if($_GET['para'] == 'del'){
        header('location:del.php');
      }
    elseif($_GET['para'] == 'coll'){
        header('location:altdel.php');

      } 
    else 
      {
        echo "unknowpara";
      }
}
else{
    $_SESSION['checked'] = false;
    echo "err";
}
?>