<?php
//Connexion à la base de données

?>

<?php $title = "Inscription reussie";
require_once 'cloud/head.php' ;
require_once 'class/Database.php';
require_once 'class/Auth.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);



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
                                <h4>Inscription reussie  <span class="iconify-inline" data-icon="twemoji:party-popper" style="color: rgba(34, 34, 51, 0.13333333333333333);"></span> </h4>
                                <h6>Bienvenue  ! Créer un compte maintenant.</h6>

                                <div class="">
                                    <div class="card testimonial text-center">
                                        <div class="card-body">
                                            <div>
                                                <div class="item"><i class="fa fa-quote-left"></i>
                                                    <p> Inscription reussi avec succès, Pour commencer par profiter des diverses fonctionnalités qui vous sont offert, commencer par vous connectez maintenant.</p><img class="img-80" src="<?=$App_link?>/assets/images/interdash.png" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <a class="btn btn-primary btn-block" href="index">Se connecter</a>
                                </div>

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