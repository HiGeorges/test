<?php $title = "Se connecter";
require_once 'cloud/head.php' ;
require_once 'class/Database.php';
require_once 'class/Auth.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);



?>

<?php require_once 'cloud/head.php'?>
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

<?php
        // Traitements des information envoyes


if(isset($_POST['email'], $_POST['password'])){
    if(!empty($_POST['email']) && !empty($_POST['password'])){
        $UserEmail = $dblink->real_escape_string($_POST['email']);
        $UserPassword = $dblink->real_escape_string($_POST['password']);
        $UserInfos =  $UserManage->GetUserInfos();
        $UserInfosFecth =  $UserManage->GetOneUserInfos($UserEmail)->fetch_object();
        if($UserManage->CheckUserExist($UserEmail) && password_verify($UserPassword, $UserInfosFecth->UserPassword)){
            //On enregistre les informations dans la sessions en tenant compte des variables definies plus haut

            session_start();
            $_SESSION['email'] = $UserEmail;
            //On recherche l'utilisateurs ayant ce mail et on initialise ces informations de connexion
            $UserManage->GetOneUserInfos($_SESSION['email']);
            $UserInfosFecth =  $UserManage->GetOneUserInfos($UserEmail)->fetch_object();
            $UserID = $UserInfosFecth->UserID;
            $UserEmail = $UserInfosFecth->UserEmail;
            header('location : dashboard/');


        }else{
            $error = "Vous avez entré une mauvaise combinaison";
        }
    }else{
        $error  = "Tout les champs doivent être remplis";

    }
}



?>




          <section>
              <div class="container-fluid p-0">
                  <div class="row">
                      <div class="col-12">
                          <div class="login-card">
                              <form class="theme-form login-form" method="post">
                                  <h4>Se connecter <span class="iconify-inline" data-icon="fluent:plug-connected-24-regular"></span> </h4>
                                  <h6>Bienvenue  ! Connectez-vous à votre compte.</h6>
                                  <div class="form-group">
                                      <label>Adresse e-mail</label>
                                      <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                                          <input class="form-control" name="email" type="email" required="" placeholder="exemple@gmail.com">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label>Mot de passe</label>
                                      <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                                          <input class="form-control" type="password" name="password" required="" placeholder="*********">
                                          <div class="show-hide"><span class="show"> </span></div>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <div class="checkbox">
                                          <input id="checkbox1" type="checkbox">
                                          <label for="checkbox1">Se souvenir du mot de passe</label>
                                      </div><a class="link" href="forget-password">Mot de passe oublié?</a>
                                  </div>
                                  <div class="form-group">
                                      <button class="btn btn-primary btn-block" type="submit">Se connnecter</button>
                                  </div>
                                  <p>Vous n'avez pas de compte ?<a class="ms-2" href="register">Créer un compte</a></p>
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