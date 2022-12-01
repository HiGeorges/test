<?php

class transactionspm{


    public $db;

    public function __construct ($db){
        $this->db = $db ;
    }

    public function SaveNewTransaction($UserID, $PAYER_ACCOUNT, $PAYMENT_ID, $PAYMENT_BATCH_NUM, $PAYMENT_AMOUNT, $PAYEE_ACCOUNT, $Token){
        $query = 'INSERT INTO TransactionManage(UserID, PAYER_ACCOUNT, T_ID, BATCH_NUM, AMOUNT, PAYEE_ACCOUNT, Token) VALUES("'.$UserID.'", "'.$PAYER_ACCOUNT.'", "'.$PAYMENT_ID.'", "'.$PAYMENT_BATCH_NUM.'", "'.$PAYMENT_AMOUNT.'","'.$PAYEE_ACCOUNT.'", "'.$Token.'")';
        return  $this->db->query($query);
    }

    public function CheckTransactionIDExist(string $PAYMENT_BATCH_NUM)
    {
        $query = 'SELECT * FROM TransactionManage WHERE BATCH_NUM = "'.$PAYMENT_BATCH_NUM.'" OR Token = "'.$PAYMENT_BATCH_NUM.'" ';
        return (bool)$this->db->query($query)->num_rows>=1;
    }

    public function CountTransaction()
    {
        $query = 'SELECT * FROM TransactionManage ';
        $query = $this->db->query($query);
        return mysqli_num_rows($query);
    }

    public function GetTotalLoadPMOneUser($UserID)
    {
        $query = 'SELECT * FROM TransactionManage ';
        $query = $this->db->query($query);
        return mysqli_num_rows($query);
    }


}