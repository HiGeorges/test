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
        $AdminKeyManage = new AdminKey($dblink);
        $AdminKeyFecth =  $AdminKeyManage->GetTransactionFeeds(1)->fetch_object();
        $GetFeeds = $AdminKeyFecth->TransactionFeeds;


        if(isset($_POST['amount'],$_POST['msisdn'], $_POST['tokenin'], $_POST['tokenex'], $_POST['STATUS_URL']) && !empty($_POST['amount']) && !empty($_POST['msisdn']) && !empty($_POST['tokenin']) && !empty($_POST['tokenin']) && !empty($_POST['tokenex']) && !empty($_POST['STATUS_URL']))
        {
           $loadVue = 1;

            $msisdn = 229;
            $amount = $dblink->real_escape_string($_POST['amount']);
            $phone = $dblink->real_escape_string($_POST['msisdn']);
            $tokenin = $dblink->real_escape_string($_POST['tokenin']);
            $tokenex = $dblink->real_escape_string($_POST['tokenex']);
            $clientid = $clientID;
            $msisdn .=$phone;
            $msisdn = intval($msisdn);
            $FeedsPourc = $amount * ($GetFeeds/100);
            $NetCredit = $amount - $FeedsPourc;

            
            if(!$MoMoManage->CheckTokenExist($tokenex)){
                $curl = curl_init();

                curl_setopt_array($curl, array(
                    CURLOPT_URL => 'https://qosic.net:8443/QosicBridge/user/requestpaymentmv',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => json_encode([
                        "msisdn" => $msisdn,
                        "amount" => $amount,
                        "transref" => $tokenex,
                        "clientid" => $clientIDMoov]),
                    CURLOPT_HTTPHEADER => array(
                        'Authorization: Basic UVNVU1I1MjU6U0JsZmNpc1g2Tmg0Zm5ZZzBRWHQ=',
                        'Content-Type: application/json'
                    ),
                ));

                $response = curl_exec($curl);
                curl_close($curl);
                $data = json_decode($response);
                $responsemsg = ($data->responsemsg);

                var_dump($data);
                if($responsemsg =="SUCCESS"){
                if($MoMoManage->SaveTransactionMoMo($UserID,$msisdn,$amount, $tokenex, $responsemsg, $tokenin)){
                    if($UserManage->CreditUserMoMo($UserID, $NetCredit)){
                    $loadVue = 2;
                    }else{
                        $error = "Contactez le service client";
                    }

                        }else{
                            $error = "Une erreur produite, réessayer";
                        }


                }else{
                         $responsemsg ="FAILED";
                     if($MoMoManage->SaveTransactionMoMo($UserID,$msisdn,$amount, $tokenex, $responsemsg, $tokenin)){
                          $loadVue = 3;
                     }
                }


            }else{
                $error = "Une erreur produite, veuillez ressayer";
            }


        }else{
            $errorView = 1;

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
        </div>



        <?php require_once '../cloud/verify.php'?>

        <?php

        if(isset($loadVue) && $loadVue === 1){?>
            <section>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="">
                                <form class="theme-form login-form" method="post">
                                    <h4>Transaction en cours <span class="iconify-inline" data-icon="eos-icons:bubble-loading"></span> </h4>
                                    <h6>Veuillez valider la transaction sur votre téléphone mobile.</h6>
                                    <div class="">
                                        <div class="card testimonial text-center">
                                            <div class="card-body">
                                                <div>
                                                    <div class="item"><i class="fa fa-quote-left"></i>
                                                        <p> Confirmer la transaction en attente sur votre téléphone mobile  .</p>
                                                        <span class="iconify" data-icon="eos-icons:bubble-loading"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <a href="wallet" class=" btn btn-primary btn-block">Verifier le paiement</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php } ?>


             <?php

        if(isset($loadVue) && $loadVue === 2){?>
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
        <?php } ?>

  <?php

        if(isset($loadVue) && $loadVue === 3){?>
             <section>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="">
                                <form class="theme-form login-form">
                                    <h4>Transaction échoué <iconify-icon icon="icon-park-outline:link-cloud-faild" style="color: red;"></iconify-icon> </h4>
                                    <h6>Votre transaction est echoué.</h6>
                                    <div class="">
                                        <div class="card testimonial text-center">
                                            <div class="card-body">
                                                <div>
                                                    <div class="item"><i class="fa fa-quote-left"></i>
                                                        <p> Vous venez d'effectuer qui n'a pas aboutit <strong> Ressayer</strong> maintenant .</p>
                                                        <img class="img-80" src="<?=$App_link?>/assets/images/details_close.png" alt="Failed Transactions">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <a href="wallet" class=" btn btn-primary btn-block"> Aller vers Porfeuille</a>
                                        </div>
                                    </form>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <?php } ?>

        <?php

        if(isset($errorView) && $errorView === 1){?>
            <section>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="">
                                <form class="theme-form login-form">
                                    <h4>Mauvaise manipiulation  <iconify-icon icon="emojione-v1:name-badge"></iconify-icon> </h4>
                                    <h6>Vous avez fait une mauvaise manipulation.</h6>
                                    <div class="">
                                        <div class="card testimonial text-center">
                                            <div class="card-body">
                                                <div>
                                                    <div class="item"><i class="fa fa-quote-left"></i>
                                                        <p> Si voulez effectué une echange, c'est maintenant le moment.</p>
                                                        <span class="iconify" data-icon="eos-icons:bubble-loading"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <a href="index" class=" btn btn-primary btn-block">Retour sur tableau de bord</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php } ?>







        <?php require_once '../cloud/footer.php'?>
    </div>
</div>
<?php require_once '../cloud/script.php'?>

</body>
</html>



