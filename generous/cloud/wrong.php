<?php
require_once('config.php');
require_once ('../class/Database.php');
require_once ('../class/MoMoManage.php');
require_once ('../class/AdminKey.php');
require_once ('../class/Auth.php');

$db = new Database();
$dblink = $db->db_connect();
$MoMoManage = new MoMoManage($dblink);
$AdminKeyManage = new AdminKey($dblink);
$UserManage = new Auth($dblink);


if(isset($_POST['transref'])&& !empty($_POST['transref'])){
$str = $_POST['transref'];
$replaced = str_replace(' ', '', $str);
$GetInfoTransRef =   $MoMoManage->GetTransrefInfos($replaced)->fetch_object();
$AdminKeyFecth =  $AdminKeyManage->GetTransactionFeeds(1)->fetch_object();
$GetFeeds = $AdminKeyFecth->TransactionFeeds;
$amount = $GetInfoTransRef->amount;
$Status = "FAILED";
$UserID = $GetInfoTransRef->UserID;
$abc = -1;

$FeedsPourc = $amount * ($GetFeeds/100);
$NetCredit = $amount - $FeedsPourc;


if($MoMoManage->UpdateTransrefSuccess($Status,$amount, $replaced)){
    echo $abc;

}

}




?>