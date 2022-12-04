<?php $title = "Verification d'identité";
require_once '../cloud/run_secure.php';
require_once '../cloud/head.php' ;
require_once '../class/Database.php';
require_once '../class/Auth.php';
require_once '../class/Retrait.php';
require_once '../class/AdminKey.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);
$UserRetrait = new Retrait($dblink);
$AdminKeyManage = new AdminKey($dblink);
$AdminKeyFecth =  $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();
$Key = $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();




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

        <?php require_once '../cloud/menu.php'?>
        <?php
        if(isset($_GET['myid'])){
            if($_GET['myid'] === $UserID){
                $UserID = $dblink->real_escape_string($_GET['myid']);
                $UserManageInfo =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $data = $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();

            }else{
                $redirect = 1;
            }
        }else{
            $redirect = 1;
        }
        ?>

        <?php
        if(isset($redirect) && $redirect == 1){
            ?>
            <script>
                window.location.replace("<?= APP_LINK ?>/dashboard/");

            </script>
        <?php  }?>




        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <?php require_once '../cloud/hello.php'?>


                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-xl-12">
                <div class="card height-equal">
                    <div class="card-header pb-0">
                        <h5>Sommission de demande de verification <span class="iconify" data-icon="iconoir:security-pass" style="color: blue" data-width="30"></span> </h5>
                    </div>
                    <div class="card-body">

                        <div class="alert alert-danger dark alert-dismissible fade show" role="alert"><i data-feather="thumbs-down"></i>
                            <p> La verifiication de votre compte vous coutera 2 $</p>
                            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5>  <span class="iconify" data-icon="octicon:verified-16" style="color: blue;"></span> Verification de compte</h5> <div>

                                    <div class="card-body">
                                        <form class="needs-validation" method="POST" action="https://perfectmoney.com/api/step1.asp">
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <label class="form-label" >Nom et prénoms</label>
                                                    <input class="form-control" name="FullName"  type="text" value="<?=$UserInfosFecth->UserFullName?>" disabled required="">
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label" >Adresse Email</label>
                                                    <input class="form-control"  name="Email"   type="email"  value="<?=$UserInfosFecth->UserEmail?>" disabled required="">
                                                </div>
                                                <div>
                                                    <label class="form-label" >Montant</label>
                                                    <input class="form-control" type="number" name="solde" aria-label="file example" value="<?=$AdminKeyFecth->verify?>" disabled required="">
                                                </div>

                                            </div>

                                            <div class="mb-3">

                                            </div>
                                            <input type="hidden" name="PAYEE_ACCOUNT" value="<?=$Key->UPerfect?>">
                                            <input type="hidden" name="PAYMENT_AMOUNT" value="<?=$AdminKeyFecth->verify?>">
                                            <input type="hidden" name="PAYEE_NAME" value="<?=APP_NAME?>">
                                            <input type="hidden" name="PAYMENT_ID" value="<?=time()?>">
                                            <input type="hidden" name="PAYMENT_UNITS" value="USD">
                                            <input type="hidden" name="STATUS_URL" value="">
                                            <input type="hidden" name="PAYMENT_URL" value="<?=$App_link?>/dashboard/members">
                                            <input type="hidden" name="PAYMENT_URL_METHOD" value="<?=$App_link?>/dashboard/members">
                                            <input type="hidden" name="NOPAYMENT_URL" value="<?=$App_link?>">
                                            <input type="hidden" name="NOPAYMENT_URL_METHOD" value="<?=$App_link?>">
                                            <input type="hidden" name="SUGGESTED_MEMO" value="">
                                            <input type="hidden" name="BAGGAGE_FIELDS" value="">
                                            <input type="submit" class="btn btn-outline-success-2x" name="PAYMENT_METHOD" value="Soumettre maintenant !">
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
                </div>
                <?php require_once '../cloud/script.php'?>
                <!-- login js-->
                <!-- Plugin used-->
</body>
</html>