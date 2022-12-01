<?php

class AdminKey
{
    public $db;

    public function __construct ($db){
        $this->db = $db ;
    }

    public function GetAdminUPerfect($ID)
    {
        $query = 'SELECT * FROM AdminKeyManage WHERE ID = "'.$ID.'" ';
        return  $this->db->query($query);
    }


    public function GetTransactionFeeds($ID)
    {
        $query = 'SELECT * FROM AdminKeyManage WHERE ID = "'.$ID.'" ';
        return  $this->db->query($query);
    }



}