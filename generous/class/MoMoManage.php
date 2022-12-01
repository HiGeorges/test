<?php

class MoMoManage
{
    public $db;

    public function __construct ($db){
        $this->db = $db ;
    }

    public function SaveTransactionMoMo($UserID,$msisdn,$amount, $tokenex, $Status, $tokenin)
    {
        $query = 'INSERT INTO TransactionMoMoManage(UserID,PhoneNumber, amount, Transref, Status, Token) VALUES("'.$UserID.'", "'.$msisdn.'", "'.$amount.'", "'.$tokenex.'", "'.$Status.'", "'.$tokenin.'")';
        return  $this->db->query($query);
    }

    public function GetLastTransactionStatusPending($UserID, $Status)
    {
        $query = 'SELECT * FROM TransactionMoMoManage WHERE UserID = "'.$UserID.'" AND Status = "'.$Status.'"  ';
        return  $this->db->query($query);

    }

    public function UpdateTransactionsStatuts($UserID, $Status)
    {
        $query = 'SELECT * FROM TransactionMoMoManage WHERE UserID = "'.$UserID.'" OR Status = "'.$Status.'"  ';
        return  $this->db->query($query);
    }

    public function CheckTokenExist($Transref)
    {
        $query = 'SELECT * FROM TransactionMoMoManage WHERE Transref = "'.$Transref.'" OR Token = "'.$Transref.'" ';
        return (bool)$this->db->query($query)->num_rows>=1;
    }

    public function GetTransrefInfos($Transref)
    {
        $query = 'SELECT * FROM TransactionMoMoManage WHERE Transref = "'.$Transref.'"  ';
        return  $this->db->query($query);

    }
       public function UpdateTransrefSuccess($Status,$amount, $Transref)
    {
        $query = 'UPDATE TransactionMoMoManage SET Status="'.$Status.'",amount="'.$amount.'"   WHERE Transref="'.$Transref.'"';
        return  $this->db->query($query);
    }
    public function getLastTransaction($UserID){
        $query = 'SELECT * FROM TransactionMoMoManage WHERE UserID = "'.$UserID.'" ORDER BY DESC LIMIT 5  ';
        return  $this->db->query($query);
    }
    public function GetOneUserInfos($UserID)
    {
        $query = 'SELECT * FROM TransactionMoMoManage WHERE UserID = "'.$UserID.'" OR UserEmail = "'.$UserID.'" OR UserID = "'.$UserID.'" ';
        return  $this->db->query($query);
    }

}