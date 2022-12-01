<?php
require_once ('../class/Database.php');
require_once ('../class/MoMoManage.php');

$db = new Database();

if(isset($_POST["transref"]) && !empty($_POST["transref"])){

// On recupère le token et on verifie si celà existe dans la bdd
    $transref = $_POST["transref"];

    echo  1;
}
