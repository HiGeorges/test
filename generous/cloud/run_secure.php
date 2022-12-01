<?php
require_once 'config.php';
require_once '../class/Database.php';
require_once '../class/Auth.php';

$db = new Database();
$dblink = $db->db_connect();

$UserManage = new auth($dblink);

session_start();
if(isset($_SESSION['email']) ){
    $UserEmail = $_SESSION['email'];
    if($UserManage->CheckUserExist($_SESSION['email'])){
        $UserEmail = $_SESSION['email'];

        //On recherche l'utilisateurs ayant ce mail et on initialise ces informations de connexion
        $UserManage->GetOneUserInfos($_SESSION['email']);
        $UserInfosFecth =  $UserManage->GetOneUserInfos($UserEmail)->fetch_object();
        $IDPrivate = $UserInfosFecth->ID;
        $UserID = $UserInfosFecth->UserID;
        $UserName = $UserInfosFecth->UserFullName;
        $UserEmail = $UserInfosFecth->UserEmail;
        $UserStatus =$UserInfosFecth->UserStatus;
        $UserBalanceMoMo =$UserInfosFecth->BalanceMoMo;
        $UserBalancePM =$UserInfosFecth->BalancePM;
        $UserBalanceAffiliate =$UserInfosFecth->BalenceAffiliate;

    }else{
        header('Location: ../index');
    }
}else{
    header('Location: ../index');
}