<?php
//Connexion à la base de données

?>

<?php $title = "Inscription";
require_once 'cloud/head.php' ;
require_once 'class/Database.php';
require_once 'class/Auth.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);

?>
<?php
if(isset($_GET['p']) && !empty($_GET['p'])){
    $p = $dblink->real_escape_string($_GET['p']);
    $codeParrain = ($UserManage->CheckUserExist($p))?$p:'Admin';

}

?>

<?php
// Traitement des informations

if(isset($_POST['FullName'], $_POST['Email'],  $_POST['Password'], $_POST['PasswordConfirm'])){
    if(!empty($_POST['FullName']) && !empty($_POST['Email']) && !empty($_POST['Password']) && !empty($_POST['PasswordConfirm'])){
        $UserName = $dblink->real_escape_string($_POST['FullName']);
        $UserEmail = $dblink->real_escape_string($_POST['Email']);
        $UserPassword = $dblink->real_escape_string($_POST['Password']);
        $PasswordConfirm = $dblink->real_escape_string($_POST['PasswordConfirm']);
        $UserID = date("s");
        $UserID .= $UserManage->CountUserID();
        $UserID .= bin2hex(openssl_random_pseudo_bytes(4));
        $codeParrain = $codeParrain ?? 'Admin';
        if($UserPassword === $PasswordConfirm){
            $UserPassword = password_hash($UserPassword, PASSWORD_BCRYPT);
            if(!$UserManage->CheckUserExist($UserEmail)){
                if($UserManage->SaveNewUser($UserID, $UserName, $UserEmail, $UserPassword,$codeParrain)){
                    header('Location: interdash');

                }else{
                    $db->DbError($dblink);

                    $error = "Vous ne pouvez pas vous inscrire de cette manière";
                }
            }else{

                $error = "Cette adresse Email existe déjà";
            }

        }else{
            $error = "Les mots de passes doivent être identiques";
        }
    }else{
        $error = "Tout les champs doivent etre remplis";
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
                                <h4>Inscription</h4>
                                <h6>Bienvenue  ! Créer un compte maintenant.</h6>
                                <div class="form-group">
                                    <label>Nom et prénoms</label>
                                    <div class="input-group"><span class="input-group-text"><i data-feather="user-plus"></i></span>
                                        <input class="form-control" name="FullName" type="text" required="" placeholder="John Doe">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Adresse e-mail</label>
                                    <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                                        <input class="form-control" name="Email" type="email" required="" placeholder="exemple@gmail.com">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Mot de passe</label>
                                    <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                                        <input class="form-control"  type="password" name="Password" required="" placeholder="*********">
                                        <div class="show-hide"><span class="show"> </span></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Confirmer le mot de passe</label>
                                    <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                                        <input class="form-control" type="password" name="PasswordConfirm" required="" placeholder="*********">
                                        <div class="show-hide"><span class="show"> </span></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" type="submit">S'inscrire</button>
                                </div>

                                <p>Vous avez déjà un compte ?<a class="ms-2" href="index">Connectez vous</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php //require_once 'cloud/footer.php'?>
    </div>
</div>
<?php  require_once 'cloud/script.php'?>
<!-- login js-->
<!-- Plugin used-->
</body>
</html>