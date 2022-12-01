<?php $title = "Verification d'identité";
    require_once '../cloud/run_secure.php';
    require_once '../cloud/head.php' ;
    require_once '../class/Database.php';
    require_once '../class/Auth.php';
    require_once '../class/Retrait.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);
$UserRetrait = new Retrait($dblink);


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

        <?php
            if(isset($_POST['PhoneNumber']) && !empty($_POST['PhoneNumber'])){
                $UserPhoneNumber = $dblink->real_escape_string($_POST['PhoneNumber']);
                $UserPhoneNumber = intval($UserPhoneNumber);
                $Status = 1;
                if(is_int($UserPhoneNumber) && $UserPhoneNumber >8){

                    if (isset($_POST['solde']) and !empty($_POST['solde'])) {
                        $solde = $dblink->real_escape_string($_POST['solde']);
                        $solde = intval($solde);
                        if($solde > 5){
                            if(intval($UserInfosFecth->BalancePM) >= $solde){
                                $RetraitID = bin2hex(openssl_random_pseudo_bytes(4));
                                $RetraitID .=time();
                                if($UserRetrait->SaveNewRetrait($UserInfosFecth->UserID, $solde,$UserPhoneNumber, $RetraitID )){
                                    if($UserManage->DebitBalancePM($UserInfosFecth->UserID, $solde)){
                                        if($UserManage->CreditBalanceAffiliate($UserInfosFecth->UserID, $solde)){
                                            $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                                            $success = "Demande de retrait envoyé";
                                        }else{
                                            $db->DbError($dblink);
                                            $error = "Une erreur  non attendu est survenue";
                                        }
                                    }else{
                                        $error = "Une erreur inattendue est survenue";
                                    }

                                }else{

                                    $error = "Une erreur est survenue";
                                }

                            }else{
                                $error = "Votre solde est insuffisant";
                            }
                        }else{
                            $error = "Le montant minimum est de 5$";
                        }

                    } else { $error = "La photo  n'est pas définie.";}
                }else{
                    $error = "Votre numéro de téléphone est invalide";
                }
            }

        ?>



        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <?php require_once '../cloud/hello.php'?>


                    </div>
                </div>
            </div>

            <?php // require_once '../cloud/verify.php'?>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5>  <span class="iconify" data-icon="octicon:verified-16" style="color: blue;"></span> Demande de retrait</h5> <div>

                                    <div class="card-body">
                                        <form class="needs-validation" method="POST" enctype="multipart/form-data">
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <label class="form-label" >Nom et prénoms</label>
                                                    <input class="form-control" name="FullName"  type="text" value="<?=$UserInfosFecth->UserFullName?>" disabled required="">
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label" > Numéro de téléphone</label>
                                                    <input class="form-control"  name="PhoneNumber"   type="number"  placeholder="22990909009" required="" >
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label" >Adresse Email</label>
                                                    <input class="form-control"  name="Email"   type="email"  value="<?=$UserInfosFecth->UserEmail?>" disabled required="">
                                                </div>
                                                <div>
                                                    <label class="form-label" >Montant</label>
                                                    <input class="form-control" type="number" name="solde" aria-label="file example" required="">
                                                </div>

                                            </div>

                                            <div class="mb-3">

                                            </div>
                                            <button class="btn btn-primary" type="submit" >Somettre</button>
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