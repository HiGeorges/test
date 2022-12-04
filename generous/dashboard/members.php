<?php $title = "Faire un don ";
require_once '../cloud/run_secure.php';
require_once '../cloud/head.php' ;
require_once '../class/Database.php';
require_once '../class/Auth.php';
require_once '../class/transactionspm.php';
require_once '../class/AdminKey.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);
$TransactionManage = new transactionspm($dblink);
$AdminKeyManage = new AdminKey($dblink);
$Key = $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();
?>

<?php

if (isset($_POST["PAYEE_ACCOUNT"], $_POST["PAYMENT_AMOUNT"], $_POST["PAYMENT_UNITS"], $_POST["PAYMENT_BATCH_NUM"], $_POST["PAYMENT_ID"], $_POST["PAYER_ACCOUNT"]) && !empty($_POST["PAYEE_ACCOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"]) && !empty($_POST["PAYMENT_UNITS"]) && !empty($_POST["PAYMENT_BATCH_NUM"]) && !empty($_POST["PAYMENT_ID"]) && !empty($_POST["PAYER_ACCOUNT"])) {
    if ($Key->UPerfect === $_POST["PAYEE_ACCOUNT"]) {
        $PAYEE_ACCOUNT = $dblink->real_escape_string($_POST['PAYEE_ACCOUNT']);
        $PAYMENT_AMOUNT = $dblink->real_escape_string($_POST['PAYMENT_AMOUNT']);
        $PAYMENT_UNITS = $dblink->real_escape_string($_POST['PAYMENT_UNITS']);
        $PAYMENT_ID = $dblink->real_escape_string($_POST['PAYMENT_ID']);
        $PAYER_ACCOUNT = $dblink->real_escape_string($_POST['PAYER_ACCOUNT']);
        $PAYMENT_BATCH_NUM = $dblink->real_escape_string($_POST['PAYMENT_BATCH_NUM']);


        if (!$TransactionManage->CheckTransactionIDExist($PAYMENT_BATCH_NUM)) {
            $Token = bin2hex(openssl_random_pseudo_bytes(4));
            $Token .= $TransactionManage->CountTransaction();
            if($UserManage->UpdateUserStatus($UserID)){
            $success = "Votre compte est verifié avec succès";
            }else{
            $error = "Une erreur est survenue";
            }
        }

    } else {
        $error = "Quelque chose marche pas";
    }

}
?>

<body>
<!-- Loader starts-->
<div class="loader-wrapper">
    <div class="theme-loader">
        <div class="loader-p"></div>
    </div>
</div>
<!-- Loader ends-->
<!-- page-wrapper Start-->
<div class="page-wrapper" id="pageWrapper">

    <?php // require_once 'cloud/vertical_menu.php'?>

    <div class="page-body-wrapper horizontal-menu">

        <?php // require_once 'cloud/menu.php'?>
        <section>
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-12">
                        <div class="login-card">
                            <form class="theme-form login-form" method="post">
                                <h4>Merci beaucoup  <span class="iconify-inline" data-icon="twemoji:party-popper" style="color: rgba(34, 34, 51, 0.13333333333333333);"></span> </h4>
                                <h6>Nous sommes heureux .</h6>

                                <div class="">
                                    <div class="card testimonial text-center">
                                        <div class="card-body">
                                            <div>
                                                <div class="item"><i class="fa fa-quote-left"></i>
                                                    <p> Vous pouvez partager la nouvelle autour de vous</p><img class="img-80" src="<?=$App_link?>/assets/images/interdash.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <a class="btn btn-primary btn-block" href="index">Revenir au tableau e bord</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php //require_once 'cloud/footer.php'?>
    </div>
</div>
<?php  require_once '../cloud/script.php'?>
<!-- login js-->
<!-- Plugin used-->
</body>
</html>

