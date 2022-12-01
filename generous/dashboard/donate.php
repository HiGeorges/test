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

<?php if(isset($_POST['amount'])){
    $PAmount = intval($_POST['amount']);
    $redirectPerfect = 1;
}

?>

<?php require_once '../cloud/head.php'?>
<body class="box-layout">

<div class="loader-wrapper">
    <div class="theme-loader">
        <div class="loader-p"></div>
    </div>
</div>

<div class="page-wrapper" id="pageWrapper">
    <?php  require_once '../cloud/vertical_menu.php'?>

    <div class="page-body-wrapper horizontal-menu">
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-6">

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5> <span class="iconify-inline" data-icon="emojione-v1:circled-information-source"></span> Faire un don</h5> <div>

                                    <div class="card-body">
                                        <form class="needs-validation" method="POST">
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <label class="form-label" >Montant en $ </label>
                                                    <input class="form-control" name="amount"  type="number"  required="" autofocus>
                                                </div>
                                              <button class="btn btn-primary" type="submit">Faire un don</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="PAYEE_ACCOUNT" value="<?=$Key->UPerfect?>">
                                                    <input type="hidden" name="PAYMENT_AMOUNT" value="<?=$PAmount?>">
                                                    <input type="hidden" name="PAYEE_NAME" value="<?=APP_NAME?>">
                                                    <input type="hidden" name="PAYMENT_ID" value="<?=time()?>">
                                                    <input type="hidden" name="PAYMENT_UNITS" value="USD">
                                                    <input type="hidden" name="STATUS_URL" value="">
                                                    <input type="hidden" name="PAYMENT_URL" value="<?=$App_link?>/dashboard/thanks">
                                                    <input type="hidden" name="PAYMENT_URL_METHOD" value="<?=$App_link?>/dashboard/thanks">
                                                    <input type="hidden" name="NOPAYMENT_URL" value="<?=$App_link?>">
                                                    <input type="hidden" name="NOPAYMENT_URL_METHOD" value="<?=$App_link?>">
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



                                <?php require_once '../cloud/script.php'?>
                <!-- login js-->
                <!-- Plugin used-->
</body>
</html>