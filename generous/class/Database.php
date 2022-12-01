<?php

class Database
{
    private $host;
    private $user;
    private $pass;
    private $db;
    public $mysqli;

    public function __construct() {
        $this->host = DATABASE_HOST;
        $this->user = DATABASE_USER;
        $this->pass = DATABASE_PASSWORD;
        $this->db = DATABASE_NAME;
}
    public function db_connect(){
        $this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db);
        return $this->mysqli;

    }

    public function db_num($sql){
        $result = $this->mysqli->query($sql);
        return $result->num_rows;
    }


    public function DbError($conn)
    {
        printf("Error message: %s\n", $conn->error);
    }

}