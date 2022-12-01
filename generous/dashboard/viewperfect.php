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

        <?php require_once '../cloud/verify.php'?>






        <div class="container-fluid">
            <div class="row starter-main">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5> <span class="iconify-inline" data-icon="carbon:view"></span> Aperçu de la transaction !</h5>
                        </div>
                        <div class="card-body">
                            <p>Solde à rechargé  : <strong> Solde Perfect Money </strong> <img class=" avatar img-20 rounded-circle" src="../assets/images/perfect.png" alt="#">    </p>
                            <ul>
                                <li>
                                    <p>Montant  : <strong> 12000 $ </strong>  </p>
                                </li>
                                <li>
                                    <p>Adresse de paiement  : <strong> U30432321 </strong> </p>
                                </li>
                            </ul>
                            <div class="card-body btn-showcase">
                                <button class="btn btn-outline-primary-2x" type="button">Retour</button>
                                <button class="btn btn-outline-secondary-2x" type="button">Valider</button>


                            </div>
                    </div>
                </div>



    </div>
    <?php require_once '../cloud/footer.php'?>
</div>

<?php require_once '../cloud/script.php'?>


</body>
</html>