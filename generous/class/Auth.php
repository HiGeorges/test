<?php

class Auth
{
    public $db;

    public function __construct ($db){
        $this->db = $db ;
    }

    public function SaveNewUser($UserID, $UserFullName, $UserEmail, $UserPassword,$codeParrain)
    {
        $query = 'INSERT INTO UserManage(UserID, UserFullName, UserEmail, UserPassword, affiliate) VALUES("'.$UserID.'", "'.$UserFullName.'", "'.$UserEmail.'", "'.$UserPassword.'", "'.$codeParrain.'" )';
        return  $this->db->query($query);
    }

    public function CountUserID()
    {
        $query = 'SELECT * FROM UserManage ';
        $query = $this->db->query($query);
        return mysqli_num_rows($query);
    }

    public function CheckUserExist($UserEmailORUserID)
    {
        $query = 'SELECT * FROM UserManage WHERE ID = "'.$UserEmailORUserID.'" OR UserEmail = "'.$UserEmailORUserID.'" OR UserID = "'.$UserEmailORUserID.'" ';
        return (bool)$this->db->query($query)->num_rows>=1;
    }

    public function GetUserInfos()
    {
        $query = 'SELECT * FROM UserManage';
        return  $this->db->query($query);
    }

    public function GetOneUserInfos($UserEmailORUserID)
    {
        $query = 'SELECT * FROM UserManage WHERE ID = "'.$UserEmailORUserID.'" OR UserEmail = "'.$UserEmailORUserID.'" OR UserID = "'.$UserEmailORUserID.'" ';
        return  $this->db->query($query);
    }

    public function UpdateInfo($FullName, $UserID)
    {
        $query = 'UPDATE UserManage SET UserFullName="'.$FullName.'" WHERE UserID="'.$UserID.'"';
        return  $this->db->query($query);

    }

    public function UpdateInfoEmail($UserEmail, $UserID)
    {
        $query = 'UPDATE UserManage SET UserEmail="'.$UserEmail.'" WHERE UserID="'.$UserID.'"';
        return  $this->db->query($query);
    }

    public function UpdatePass($newPass, $UserID)
    {
        $query = 'UPDATE UserManage SET UserPassword="'.$newPass.'" WHERE UserID="'.$UserID.'" ';
        return  $this->db->query($query);
    }

    public function UpdateIdentityInfos($UserID,$UserPhoneNumber, $Cover, $Status)
    {
        $query = 'UPDATE UserManage SET UserPhoneNumber="'.$UserPhoneNumber.'",  UserDocVerify="'.$Cover.'", UserStatus = "'.$Status.'"  WHERE UserID="'.$UserID.'"';
        return  $this->db->query($query);
    }

    public function CreditUserPMAcount($UserID, string $PAYMENT_AMOUNT): bool
    {
        $query = 'UPDATE UserManage SET BalancePM=BalancePM+'.$PAYMENT_AMOUNT.' WHERE ID="'.$UserID.'"  ';
        return (bool) $this->db->query($query);
    }

    public function CreditUserMoMo($UserID, $amount): bool
    {
        $query = 'UPDATE UserManage SET BalanceMoMo=BalanceMoMo+'.$amount.' WHERE UserID="'.$UserID.'" ';
        return (bool) $this->db->query($query);
    }

    public function DebitBalanceMoMo($UserID, $amount): bool
    {
        $query = 'UPDATE UserManage SET BalanceMoMo=BalanceMoMo-'.$amount.' WHERE UserID="'.$UserID.'" ';
        return (bool) $this->db->query($query);
    }

    public function DebitBalancePM($UserID, $amount): bool
    {
        $query = 'UPDATE UserManage SET BalancePM=BalancePM-'.$amount.' WHERE UserID="'.$UserID.'" ';
        return (bool) $this->db->query($query);
    }

    public function CreditBalanceAffiliate($UserID, $amount): bool
    {
        $query = 'UPDATE UserManage SET BalenceAffiliate=BalenceAffiliate+'.$amount.' WHERE UserID="'.$UserID.'" ';
        return (bool) $this->db->query($query);
    }

    public function DebitBalanceAffiliate($UserID, $amount): bool
    {
        $query = 'UPDATE UserManage SET BalenceAffiliate=BalenceAffiliate-'.$amount.' WHERE UserID="'.$UserID.'" ';
        return (bool) $this->db->query($query);
    }
    public function CountAllUser ()
    {
        $query = 'SELECT * FROM UserManage';
        return $this->db->query($query)->num_rows;
    }

    public function CrediteAllUser ($amount)
    {
        $query = 'UPDATE UserManage SET BalancePM=BalancePM+'.$amount.'';
        return (bool) $this->db->query($query);
    }

}