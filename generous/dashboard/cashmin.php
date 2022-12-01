<?php
$title = "Information de paiement Mobile Money";
require_once '../cloud/run_secure.php';
require_once '../class/Database.php';
require_once '../class/AdminKey.php';
?>

<?php require_once '../cloud/head.php'?>

<?php

$db = new Database();
$dblink = $db->db_connect();
$AdminKeyManage = new AdminKey($dblink);
$UserManage = new Auth($dblink);
$AdminKeyFecth =  $AdminKeyManage->GetTransactionFeeds(1)->fetch_object();
$GetFeeds = $AdminKeyFecth->TransactionFeeds;
$info = 1;
$tokenin = "XDZ";
$tokenin .= bin2hex(openssl_random_pseudo_bytes(8));
$tokenex = time();
$tokenex .= bin2hex(openssl_random_pseudo_bytes(4));


?>
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



        <?php

        if(isset($_POST['way'], $_POST['amount'], $_POST['paynit']) && !empty($_POST['way']) && !empty($_POST['amount']) && !empty($_POST['paynit'])){
            $Way = $dblink->real_escape_string($_POST['way']);
            $Amount = $dblink->real_escape_string($_POST['amount']);
            $Paynit = $dblink->real_escape_string($_POST['paynit']);
            $Ammont = intval($Amount);
           if(is_int($Ammont) && $Way === "MTNBJ"){
               if($Ammont >= 10){
                   $FeedsPourc =  $Ammont * ($GetFeeds/100);
                   $NetPayeer = $FeedsPourc + $Ammont;
                   $redirectMoMo = 1;
               }else{
                   $error = "Le minimum de rechargement est de 500 F XOF";
               }

           }elseif(is_int($Ammont) && $Way === "MOOVBJ"){
            if($Ammont >= 10){
                   $FeedsPourc =  $Ammont * ($GetFeeds/100);
                   $NetPayeer = $FeedsPourc + $Ammont;
                   $redirectMoMo = 2;
               }else{
                   $error = "Le minimum de rechargement est de 500 F XOF";
               }

           }

        }

        ?>


        <?php if(isset($redirectMoMo) && $redirectMoMo === 1){?>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>   <span class="iconify" data-width="15" data-icon="arcticons:google-tasks" style="color: blue;"></span> Aperçu des information de la transaction</h5> <div>
                                <div class="card-body">
                                    <form action="resquestpaymtn" method="POST">

                                        <div class="form-group ">
                                            <label class="form-control-label">Payer par perfect Money</label>

                                            <div class="card-block row">
                                                <div class="col-sm-12 col-lg-12 col-xl-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <tbody>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-danger">Montant à recharger</span></td>
                                                                <td><span class="text-dark"><?=$Amount?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-primary">Frais de transaction (<?=$GetFeeds?>%)</span></td>
                                                                <td><span class="text-dark"><?=$FeedsPourc?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-dark">Net à Payer</span></td>
                                                                <td><span class="text-dark"> <?=$NetPayeer?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-secondary">Adresse de paiement</span></td>
                                                                <td><span>  <code><?=$Paynit?></code></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-warning">Moyen de paiement</span></td>
                                                                <td><span class="text-dark"> MTN BENIN  </span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="amount" value="<?=$NetPayeer?>">
                                        <input type="hidden" name="msisdn" value="<?=$Paynit?>">
                                        <input type="hidden" name="tokenin" value="<?=$tokenin?>">
                                        <input type="hidden" name="tokenex" value="<?=$tokenex?>">
                                        <input type="hidden" name="STATUS_URL" value="<?=time()?>">
                                        <input type="submit" class="btn btn-outline-success-2x" name="abc" value="Payer maintenant !">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">

                    </div>
                    <?php  }?>

                     <?php if(isset($redirectMoMo) && $redirectMoMo === 2){?>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>   <span class="iconify" data-width="15" data-icon="arcticons:google-tasks" style="color: blue;"></span> Aperçu des information de la transaction</h5> <div>
                                <div class="card-body">
                                    <form action="resquestpaymoov" method="POST">

                                        <div class="form-group ">
                                            <label class="form-control-label">Payer par perfect Money</label>

                                            <div class="card-block row">
                                                <div class="col-sm-12 col-lg-12 col-xl-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <tbody>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-danger">Montant à recharger</span></td>
                                                                <td><span class="text-dark"><?=$Amount?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-primary">Frais de transaction (<?=$GetFeeds?>%)</span></td>
                                                                <td><span class="text-dark"><?=$FeedsPourc?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-dark">Net à Payer</span></td>
                                                                <td><span class="text-dark"> <?=$NetPayeer?> F XOF </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-secondary">Adresse de paiement</span></td>
                                                                <td><span>  <code><?=$Paynit?></code></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="w-50"> <span class="badge rounded-pill badge-warning">Moyen de paiement</span></td>
                                                                <td><span class="text-dark"> Moov Money BENIN  </span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="amount" value="<?=$NetPayeer?>">
                                        <input type="hidden" name="msisdn" value="<?=$Paynit?>">
                                        <input type="hidden" name="tokenin" value="<?=$tokenin?>">
                                        <input type="hidden" name="tokenex" value="<?=$tokenex?>">
                                        <input type="hidden" name="STATUS_URL" value="<?=time()?>">
                                        <input type="submit" class="btn btn-outline-success-2x" name="abc" value="Payer maintenant !">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">

                    </div>
                    <?php  }?>

                    <?php if(isset($info) && $info ===1){?>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header pb-0">
                                        <h5>   <span class="iconify" data-width="15" data-icon="arcticons:google-tasks" style="color: blue;"></span> Informations de paiement </h5> <div>

                                            <div class="card-body">
                                                <form class="needs-validation" method="POST">
                                                    <div class="row g-3">
                                                    <div class="col-md-12">
                                                        <label class="form-label" for="validationCustom04">Moyen de paiement</label>
                                                        <select class="form-select"   name="way"  required>
                                                            <option selected="" disabled="" value="">Choisir...</option>
                                                            <option value="MTNBJ">MTN Mobile Money Bénin</option>
                                                            <option value="MOOVBJ">Moov Money Bénin</option>
                                                            <option value="TCTG">TMoney Togo</option>
                                                            <option value="MOOVTG">Moov Money Togo</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                    <div class="row g-3">
                                                        <div class="col-md-12">
                                                            <label class="form-label" >Montant en FCA </label>
                                                            <input class="form-control" name="amount"  type="number"  required>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label class="form-label" >Numéro de téléphone</label>
                                                            <input class="form-control"  name="paynit" type="tel" placeholder="90101010" required>
                                                        </div>


                                                    </div>

                                                    <div class="mb-3">

                                                    </div>
                                                    <button class="btn btn-outline-danger-2x btn-lg" type="submit"  > <span class="iconify-inline" data-icon="emojione-monotone:eyes"></span> Aperçu de la transaction</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid">
                                <div class="row">

                                </div>

                                <?php } unset($info);?>

                                <?php require_once '../cloud/footer.php'?>
                            </div>

                            <?php require_once '../cloud/script.php'?>

</body>
</html>