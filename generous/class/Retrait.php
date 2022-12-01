<?php

class Retrait
{

    public $db;

    public function __construct ($db){
        $this->db = $db ;
    }
    public function SaveNewRetrait($UserID, $Solde, $PhoneNumber, $RetraitID)
    {
        $query = 'INSERT INTO Retrait(UserID, Solde, PhoneNumber, RetraitID	) VALUES("'.$UserID.'", "'.$Solde.'", "'.$PhoneNumber.'", "'.$RetraitID.'" )';
        return  $this->db->query($query);
    }
}