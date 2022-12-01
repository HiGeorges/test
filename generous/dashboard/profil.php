<?php $title = "Mon profil";
require_once '../cloud/run_secure.php';
require_once '../cloud/head.php' ;
require_once '../class/Database.php';
require_once '../class/Auth.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);

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

<?php if(isset($_POST['FullName'], $_POST['Email'])){
    if(!empty($_POST['FullName']) && !empty($_POST['Email'])){
        $UserName = $dblink->real_escape_string($_POST['FullName']);
        $UserNewEmail = $dblink->real_escape_string($_POST['Email']);
        if($UserManage->CheckUserExist($UserNewEmail) && $UserNewEmail === $UserInfosFecth->UserEmail  ){
            if($UserManage->UpdateInfo($UserName, $UserID )){
                $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $success = "Vos informations sont mises à jour avec succès";
            }else{
                $error = "Vous ne pouvez pas effectuer cette action";
            }
        }elseif(!$UserManage->CheckUserExist($UserNewEmail) && $UserNewEmail !== $UserInfosFecth->UserEmail ){
            if($UserManage->UpdateInfoEmail($UserNewEmail, $UserID )){
                $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $success = "Votre adresse Email est mise à jour avec succès";
            }else{

                $error = "Vous ne pouvez pas effectuer cette action";
            }
        }
    }else{
        $error = "Tout les champs doivent être remplis";
    }

}
?>

        <?php
        if(isset($_POST['OldPassword'], $_POST['NewPassword'], $_POST['newPasswordConfirm'])){
            if(!empty($_POST['OldPassword']) && !empty($_POST['NewPassword']) && !empty($_POST['newPasswordConfirm']) ){
                $OldPass = $dblink->real_escape_string($_POST['OldPassword']);
                $newPass = $dblink->real_escape_string($_POST['NewPassword']);
                $newPassConfirm = $dblink->real_escape_string($_POST['newPasswordConfirm']);
                if($UserManage->CheckUserExist($UserEmail)){
                    $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                    if(password_verify($OldPass, $UserInfosFecth->UserPassword)){
                        if($newPass === $newPassConfirm){
                            $newPass = password_hash($newPass, PASSWORD_BCRYPT);
                            if($UserManage->UpdatePass($newPass, $UserID)){
                                $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                                $success = "Mot de passe mis à jour avec succès ";
                            }else{
                                $db->DbError($dblink);
                                $error = "Une erreur produite lors de la mise à jour";
                            }
                        }else{
                            $error = "Les mots de passes ne sont pas identitiques";
                        }
                    }else{
                        $error =  "Le mot de passe ancien est  incorrect";
                    }
                }else{
                    $error = "Votre Email ne correspond à aucun compte";
                }
            }else{
                $error = "Tout les champs doivent êtres remplis";
            }
        }

        ?>

        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <?php require_once '../cloud/hello.php'?>

                        <div class="col-sm-6">
                            <!-- Bookmark Start-->
                            <div class="bookmark">
                                <ul>
                                    <li><button class="btn btn-primary" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Tables">Faire une échange</button></li>
                                </ul>
                            </div>
                            <!-- Bookmark Ends-->
                        </div>
                    </div>
                </div>
            </div>

            <?php require_once '../cloud/verify.php'?>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5> <span class="iconify-inline" data-icon="emojione-v1:circled-information-source"></span> Mettre à jour vos informations</h5> <div>

                                <div class="card-body">
                                    <form class="needs-validation" method="POST">
                                        <div class="row g-3">
                                            <div class="col-md-12">
                                                <label class="form-label" >Nom et prénoms</label>
                                                <input class="form-control" name="FullName"  type="text" value="<?=$UserInfosFecth->UserFullName?>"  required="">
                                            </div>
                                            <div class="col-md-12">
                                                <label class="form-label" >Adresse Email</label>
                                                <input class="form-control"  name="Email"   type="email"  value="<?=$UserInfosFecth->UserEmail?>" required="">
                                            </div>

                                        </div>

                                        <div class="mb-3">

                                        </div>
                                        <button class="btn btn-primary" type="submit" >Mettre à jour</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header pb-0">
                                        <h5><span class="iconify-inline" data-icon="emojione:key"></span> Mettre à jour votre mot de passe</h5> <div>

                                            <div class="card-body">
                                                <form class="needs-validation" method="POST">
                                                    <div class="row g-3">
                                                        <div class="col-md-12">
                                                            <label class="form-label" >Ancien mot de passe</label>
                                                            <input class="form-control" name="OldPassword"  type="password"  required="">
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label class="form-label" >Nouveau mot de passe</label>
                                                            <input class="form-control"  name="NewPassword"   type="password"  required="">
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label class="form-label" >Nouveau mot de passe</label>
                                                            <input class="form-control" name="newPasswordConfirm"  type="password" required="">
                                                        </div>

                                                    </div>

                                                    <div class="mb-3">

                                                    </div>
                                                    <button class="btn btn-primary" type="submit" >Mettre à jour</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        <?php require_once '../cloud/footer.php'?>
    </div>
</div>
<?php require_once '../cloud/script.php'?>
<!-- login js-->
<!-- Plugin used-->
</body>
</html>