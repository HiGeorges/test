<?php
require_once '../cloud/run_secure.php';
require_once  '../class/AdminKey.php';
require_once '../class/Auth.php';
require_once '../class/transactionspm.php';

?>



<?php
$db = new Database();
$dblink = $db->db_connect();
$AdminKeyManage = new AdminKey($dblink);
$UserManage = new Auth($dblink);
$Key = $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();

$TransactionManage = new transactionspm($dblink);

?>


<?php
if(isset($_POST["PAYEE_ACCOUNT"], $_POST["PAYMENT_AMOUNT"], $_POST["PAYMENT_UNITS"], $_POST["PAYMENT_BATCH_NUM"], $_POST["PAYMENT_ID"], $_POST["PAYER_ACCOUNT"]) && !empty($_POST["PAYEE_ACCOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"])  && !empty($_POST["PAYMENT_UNITS"]) && !empty($_POST["PAYMENT_BATCH_NUM"]) && !empty($_POST["PAYMENT_ID"]) && !empty($_POST["PAYER_ACCOUNT"]))
{
    if($Key->UPerfect === $_POST["PAYEE_ACCOUNT"] ){
        $PAYEE_ACCOUNT = $dblink->real_escape_string($_POST['PAYEE_ACCOUNT']);
        $PAYMENT_AMOUNT = $dblink->real_escape_string($_POST['PAYMENT_AMOUNT']);
        $PAYMENT_UNITS = $dblink->real_escape_string($_POST['PAYMENT_UNITS']);
        $PAYMENT_ID = $dblink->real_escape_string($_POST['PAYMENT_ID']);
        $PAYER_ACCOUNT = $dblink->real_escape_string($_POST['PAYER_ACCOUNT']);
        $PAYMENT_BATCH_NUM =  $dblink->real_escape_string($_POST['PAYMENT_BATCH_NUM']);
        if(!$TransactionManage->CheckTransactionIDExist($PAYMENT_BATCH_NUM)){
            $Token = bin2hex(openssl_random_pseudo_bytes(4));
            $Token .= $TransactionManage->CountTransaction();
            if($TransactionManage->SaveNewTransaction($UserID, $PAYER_ACCOUNT, $PAYMENT_ID, $PAYMENT_BATCH_NUM, $PAYMENT_AMOUNT, $PAYEE_ACCOUNT, $Token)) {
                    if($UserManage->CreditUserPMAcount($IDPrivate, $PAYMENT_AMOUNT)){

                        $success = "Compte crédité avec succès";
                    }else{
                        $error = "Une erreur enregistrée lors du crédit";
                    }


            }else{

                $error = "Une erreur produite lors du sauvegarde";
            }

        }else{
            $error = "Cette transaction est déjà enregistré";
        }

    }else{
        $error = "Quelque chose marche pas";
    }

}
?>




<?php require_once '../cloud/script.php'?>