<?php $title = "Information de paiement Perfect Money";
require_once '../cloud/run_secure.php';
require_once '../class/Database.php';
require_once '../class/AdminKey.php';
?>

<?php require_once '../cloud/head.php'?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$AdminKeyManage = new AdminKey($dblink);
$UserManage = new Auth($dblink);
$AdminKeyFecth =  $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();



?>
<body class="box-layout">

<div class="loader-wrapper">
    <div class="theme-loader">
        <div class="loader-p"></div>
    </div>
</div>

<div class="page-wrapper" id="pageWrapper">

    <?php require_once '../cloud/vertical_menu.php'?>

    <div class="page-body-wrapper horizontal-menu">

        <?php require_once '../cloud/menu.php'?>

        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <?php require_once '../cloud/hello.php'?>

                    </div>
                </div>
            </div>
        </div>

        <?php require_once '../cloud/verify.php'?>



        <?php



        if(isset($_POST['amount'], $_POST['paynit'])){

            if(!empty($_POST['amount']) && $_POST['paynit']){
                $PPay = $_POST['paynit'];
                $PAmount = intval($_POST['amount']);
                if(is_int($PAmount)){
                    if (str_starts_with($PPay, 'U')) {
                        $PAmount = $dblink->real_escape_string($PAmount);
                        $PIntPay = $dblink->real_escape_string($PPay);
                        $redirectPerfect = 1;

                    }else{
                        $error = "Votre (U) adresse de paiement perfect Money est incorrect";
                    }

                }else{
                    $error = "Le montant entré est invalide";
                }


            }else{
                $error = "Tout les champs doivent êtres remplis";
            }

        }

        ?>


        <?php
        if(isset($redirectPerfect) && $redirectPerfect === 1){?>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>   <span class="iconify" data-width="15" data-icon="arcticons:google-tasks" style="color: blue;"></span> Aperçu des information de la transaction</h5> <div>
                                <div class="card-body">
                                    <form action="https://perfectmoney.com/api/step1.asp" method="POST">

                                        <div class="form-group ">
                                            <label class="form-control-label">Payer par perfect Money</label>

                                            <div class="card-block row">
                                                <div class="col-sm-12 col-lg-12 col-xl-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <tbody>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-danger">Montant à recharger</span></td>
                                                                <td><span class="text-dark"><?=$PAmount?> <span class="iconify-inline" data-icon="noto-v1:heavy-dollar-sign"></span> </span></td>
                                                            </tr>
                                                            <tr>

                                                            <td class="w-50"> <span class="badge rounded-pill badge-secondary">Adresse de paiement</span></td>
                                                                <td><span>  <code><?=$PIntPay?></code></span></td>
                                                            </tr>
                                                            <tr>

                                                                <td class="w-50"> <span class="badge rounded-pill badge-warning">Solde PM actuel</span></td>
                                                                <td><span class="text-dark"><?=$UserBalancePM?> <span class="iconify-inline" data-icon="noto-v1:heavy-dollar-sign"></span> </span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="PAYEE_ACCOUNT" value="<?=$AdminKeyFecth->UPerfect?>">
                                        <input type="hidden" name="PAYMENT_AMOUNT" value="<?=$PAmount?>">
                                        <input type="hidden" name="PAYEE_NAME" value="<?=APP_NAME?>">
                                        <input type="hidden" name="PAYMENT_ID" value="<?=time()?>">
                                        <input type="hidden" name="PAYMENT_UNITS" value="USD">
                                        <input type="hidden" name="STATUS_URL" value="">
                                        <input type="hidden" name="PAYMENT_URL" value="<?=$App_link?>/dashboard/wallet">
                                        <input type="hidden" name="PAYMENT_URL_METHOD" value="<?=$App_link?>/dashboard/wallet">
                                        <input type="hidden" name="NOPAYMENT_URL" value="<?=$App_link?>/dashboard/wallet">
                                        <input type="hidden" name="NOPAYMENT_URL_METHOD" value="<?=$App_link?>/dashboard/wallet">
                                        <input type="hidden" name="SUGGESTED_MEMO" value="">
                                        <input type="hidden" name="BAGGAGE_FIELDS" value="">
                                        <input type="submit" class="btn btn-outline-success-2x" name="PAYMENT_METHOD" value="Payer maintenant !">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">

                    </div>
                    <?php  }?>


        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>   <span class="iconify" data-width="15" data-icon="arcticons:google-tasks" style="color: blue;"></span> Informations de paiement </h5> <div>

                                <div class="card-body">
                                    <form class="needs-validation" method="POST">
                                        <div class="row g-3">
                                            <div class="col-md-12">
                                                <label class="form-label" >Montant en $ </label>
                                                <input class="form-control" name="amount"  type="number"  required="" autofocus>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label" >Adresse Perfect (U)</label>
                                                <input class="form-control"  name="paynit"   type="text"  required="">
                                            </div>


                                        </div>

                                        <div class="mb-3">

                                        </div>
                                        <button class="btn btn-outline-danger-2x btn-lg" type="submit"  > <span class="iconify-inline" data-icon="emojione-monotone:eyes"></span> Aperçu de la transaction</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">

                    </div>

    <?php require_once '../cloud/footer.php'?>
</div>

<?php require_once '../cloud/script.php'?>

</body>
</html>