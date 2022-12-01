<?php
$title = "Valider le paiement MTN MoMO";
require_once '../cloud/run_secure.php';
require_once '../class/Database.php';
require_once '../class/AdminKey.php';
require_once '../class/MoMoManage.php';
require_once '../cloud/run.php';



require_once '../cloud/head.php'?>
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
        <?php

        $db = new Database();
        $dblink = $db->db_connect();
        $MoMoManage = new MoMoManage($dblink);


   ?>

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


            <section>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="">
                                <form class="theme-form login-form" method="post">
                                    <h4>Transaction reussie  <span class="iconify-inline" data-icon="clarity:success-standard-line" style="color: green;"></span> </h4>
                                    <h6>Transaction reussie avec succès.</h6>
                                    <div class="">
                                        <div class="card testimonial text-center">
                                            <div class="card-body">
                                                <div>
                                                    <div class="item"><i class="fa fa-quote-left"></i>
                                                        <p> Vous venez d'effectuer avec succès un transaction <strong> votre solde </strong> sera credité  .</p>
                                                        <img class="img-80" src="<?=$App_link?>/assets/images/success.png" alt="Succes transactions">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <a href="wallet" class=" btn btn-primary btn-block">Porfeuille</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        <?php require_once '../cloud/footer.php'?>
    </div>
</div>
<?php require_once '../cloud/script.php'?>

</body>
</html>



