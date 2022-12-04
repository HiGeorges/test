<?php $title = "Tableau de bord";
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

        <?php  require_once '../cloud/verify.php'?>

            <div class="container-fluid general-widget">
                <div class="row">
                    <div class="col-sm-6 col-xl-4 col-lg-6">
                        <div class="card o-hidden border-0">
                            <div class="bg-secondary b-r-4 card-body">
                                <div class="media static-top-widget">
                                    <div class="align-self-center text-center"><span class="iconify-inline" data-width="50" data-height="50" data-icon="healthicons:money-bag-outline" ></span></div>
                                    <div class="media-body"><span class="m-0">Solde PM</span>
                                        <h4 class="mb-0 counter"> <?=$UserBalancePM?>   $ </h4> <span class="iconify-inline icon-bg" data-width="50" data-height="50" data-icon="healthicons:money-bag-outline" ></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-4 col-lg-6">
                        <div class="card o-hidden border-0">
                            <div class="bg-primary b-r-4 card-body">
                                <div class="media static-top-widget">
                                    <div class="align-self-center text-center"><i data-feather="credit-card"></i></div>
                                    <div class="media-body"><span class="m-0">Total de retrait</span>
                                        <h4 class="mb-0 counter"><?=$UserBalanceMoMo?> F XOF</h4><i class="icon-bg" data-feather="credit-card"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-4 col-lg-6">
                        <div class="card o-hidden border-0">
                            <div class="bg-dark  b-r-4 card-body">
                                <div class="media static-top-widget">
                                    <div class="align-self-center text-center"><span class="iconify" data-icon="tabler:affiliate"></span></div>
                                    <div class="media-body"><span class="m-0">Solde en Attente</span>
                                        <h4 class="mb-0 counter"><?=$UserBalanceAffiliate?>  F XOF</h4><span class="iconify icon-bg" data-icon="tabler:affiliate"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Historiques de vos transactions</h5>
                        <span> Consultez l'ensemble de l'historique de vos transactions <code>En cas de problème;</code>.</span><span>nous vous invitons à sommettre le plus vite possible au service clientèle present dans le chat du site.</span>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="display" id="basic-1">
                                <?php  ?>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Methode</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Montant</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>6736228</td>
                                    <td>MoMo</td>
                                    <td>Recharge <span class="badge badge-primary"><span class="iconify" data-icon="fluent:arrow-step-in-24-filled" data-width="50px"></span></span> </td>
                                    <td><span class="badge badge-success">Approuvé</span></td>
                                    <td>35000 F CFA</td>
                                    <td>2011/04/25</td>


                                </tr>


                                <tr>
                                    <td>6736311</td>
                                    <td>PM</td>
                                    <td>Achat PM <span class="badge badge-danger"><span class="iconify" data-icon="fluent:arrow-step-in-24-filled" data-width="50px"></span></span> </td>
                                    <td><span class="badge badge-warning">En attente</span></td>
                                    <td>27 $ </td>
                                    <td>2011/01/25</td>


                                </tr>
                                </tbody>
                            </table>
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