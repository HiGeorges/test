<?php $title = "Selectionner un moyen de recharge";
require_once '../cloud/run_secure.php';?>

<?php require_once '../cloud/head.php'?>
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

        <div class="container-fluid general-widget">
            <div class="row">
                <div class="col-sm-6 col-xl-6 col-lg-6">
                    <div class="card o-hidden border-0">
                        <div class=" b-r-4 card-body">
                            <div class="card xl-none">
                                <div class="ecommerce-widget card-body">
                                    <div class="row">
                                        <div class="col-6"><span>Solde PM</span>
                                            <h3 class="total-num counter"> <?=$UserBalancePM?> $ </h3>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-end">
                                                <ul>
                                                    <div class="avatar"><img class="img-30 rounded-circle" src="<?=$App_link?>/assets/images/perfect.png" alt="#"></div>
                                                    <li><span class="badge rounded-pill text-white badge-secondary">   Rechargement PM</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-showcase">
                                            <a href="cashpin" class="btn btn-outline-danger-2x btn-lg"> <span class="iconify-inline"  data-width="20" data-icon="carbon:add-alt"></span> Recharger le solde PM</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-xl-6 col-lg-6">
                    <div class="card o-hidden border-0">
                        <div class=" b-r-4 card-body">
                            <div class="card xl-none">
                                <div class="ecommerce-widget card-body">
                                    <div class="row">
                                        <div class="col-6"><span>Solde MoMo</span>
                                            <h3 class="total-num counter"><?=$UserBalanceMoMo?> XOF</h3>
                                        </div>
                                        <div class="col-6">
                                            <div class="text-end">
                                                <ul>
                                                    <li class="d-inline-block"><img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/MTNMoMo.png" alt=""></li>
                                                    <li class="d-inline-block"><img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/MoovMoney.png" alt=""></li>
                                                    <li><span class="badge rounded-pill text-white badge-success">Rechargement MoMo</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-showcase">
                                        <button class="btn btn-outline-success-2x btn-lg" type="button"> <span class="iconify-inline"  data-width="20" data-icon="carbon:add-alt"></span>  Recharger le solde MoMo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <?php require_once '../cloud/footer.php'?>
</div>

<?php require_once '../cloud/script.php'?>

</body>
</html>