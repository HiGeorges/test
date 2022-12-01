<?php $title = "Portefeuille";
require_once '../cloud/run_secure.php';
require_once '../class/Database.php';
require_once  '../class/AdminKey.php';
require_once '../class/Auth.php';
require_once '../class/transactionspm.php';
require_once '../class/MoMoManage.php';



?>

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


        <?php
        $db = new Database();
        $dblink = $db->db_connect();
        $AdminKeyManage = new AdminKey($dblink);
        $UserManage = new Auth($dblink);
        $TransactionManage = new transactionspm($dblink);
        $TransactionMoMoManage = new MoMoManage($dblink);
        $Key = $AdminKeyManage->GetAdminUPerfect(1)->fetch_object();


       // $data = $TransactionMoMoManage->GetOneUserInfos($UserID)->fetch_object();
       // $dataA = $TransactionMoMoManage->getLastTransaction($UserID);



        ?>


        <?php
        if(isset($_POST["PAYEE_ACCOUNT"], $_POST["PAYMENT_AMOUNT"], $_POST["PAYMENT_UNITS"], $_POST["PAYMENT_BATCH_NUM"], $_POST["PAYMENT_ID"], $_POST["PAYER_ACCOUNT"]) && !empty($_POST["PAYEE_ACCOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"]) && !empty($_POST["PAYMENT_AMOUNT"])  && !empty($_POST["PAYMENT_UNITS"]) && !empty($_POST["PAYMENT_BATCH_NUM"]) && !empty($_POST["PAYMENT_ID"]) && !empty($_POST["PAYER_ACCOUNT"]))
        {
            if($Key->UPerfect === $_POST["PAYEE_ACCOUNT"] ){
                $PAYEE_ACCOUNT = $dblink->real_escape_string($_POST['PAYEE_ACCOUNT']);
                $PAYMENT_AMOUNT = $dblink->real_escape_string($_POST['PAYMENT_AMOUNT']);
                $PAYMENT_UNITS = $dblink->real_escape_string($_POST['PAYMENT_UNITS']);
                $PAYMENT_ID = $dblink->real_escape_string($_POST['PAYMENT_ID']);
                $PAYER_ACCOUNT = $dblink->real_escape_string($_POST['PAYER_ACCOUNT']);
                $PAYMENT_BATCH_NUM =  $dblink->real_escape_string($_POST['PAYMENT_BATCH_NUM']);
                if(!$TransactionManage->CheckTransactionIDExist($PAYMENT_BATCH_NUM)){
                    $Token = bin2hex(openssl_random_pseudo_bytes(4));
                    $Token .= $TransactionManage->CountTransaction();
                    if($TransactionManage->SaveNewTransaction($UserID, $PAYER_ACCOUNT, $PAYMENT_ID, $PAYMENT_BATCH_NUM, $PAYMENT_AMOUNT, $PAYEE_ACCOUNT, $Token)) {
                        if($UserManage->CreditUserPMAcount($IDPrivate, $PAYMENT_AMOUNT)){
                            $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                            $success = "Compte crédité avec succès";
                        }else{
                            $error = "Une erreur enregistrée lors du crédit";
                        }


                    }else{

                        $error = "Une erreur produite lors du sauvegarde";
                    }

                }else{
                    $error = "Cette transaction est déjà enregistré";
                }

            }else{
                $error = "Quelque chose marche pas";
            }

        }
        ?>

        <div class="container-fluid general-widget">
            <div class="row">
                <div class="col-sm-6 col-xl-4 col-lg-6">

                        <div class="card income-card card-primary">
                            <div class="card-body text-center">
                                <div class="round-box mt-auto" >
                                    <img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/perfect.png" alt="Perfect money"  title="Perfect Money">
                                </div>
                                <h5> <?=$UserBalancePM?>  $ </h5>
                                <p>Solde Perfect Money</p><a class="btn-arrow arrow-primary" href="cashpin"><i class="toprightarrow-primary fa fa-dollar me-2"></i>Recharger </a>

                            </div>

                    </div>
                </div>

                <div class="col-sm-6 col-xl-4 col-lg-6">

                        <div class="card income-card card-primary">
                            <div class="card-body text-center">
                                <div class="customers d-inline-block avatar-group">
                                <ul>
                                    <li class="d-inline-block"><img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/MTNMoMo.png" alt="MTN MoMO"></li>
                                    <li class="d-inline-block"><img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/MoovMoney.png" alt="MOOV Money"></li>
                                    <li class="d-inline-block"><img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/OrangeMoney.png" alt="Orange Money"></li>
                                </ul>
                                </div>
                                <h5> <?=$UserBalanceMoMo?> F XOF </h5>
                                <p>Solde Mobile Money</p><a class="btn-arrow arrow-primary" href="cashmin"><i class="toprightarrow-primary fa fa-money me-2"></i> Recharger </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-xl-4 col-lg-6">
                    <div class="card income-card card-primary">
                        <div class="card-body text-center">
                            <div class="round-box mt-auto" >
                                <img class="img-40 rounded-circle" src="<?=$App_link?>/assets/images/affiliate.jpg" alt="Affiliation"  title="Affiliation">
                            </div>
                            <h5> <?=$UserBalanceMoMo?> Coins </h5>
                            <p>Solde Perfect Money</p><a class="btn-arrow arrow-primary" href="javascript:void(0)"><i class="toprightarrow-primary fa fa-arrow-down me-2"></i> Retirer </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

     <!-- Container-fluid starts-->
                <div class="col-xl-12 recent-order-sec">
                    <div class="card">
                      <div class="card-body">
                        <div class="table-responsive">
                          <h5>Historiques de transactions</h5>
                          <table class="table table-bordernone">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Value</th>
                                <th>Rate</th>
                                <th>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                        <?php  //while($row = $data->fetch_object()){?>
                              <tr>
                                <td>
                                  <div class="media">
                                      <?//=$row->ID?>
                                    <div class="media-body"><a href="#"><span>Rechargement</span></a></div>
                                  </div>
                                </td>
                                <td>
                                  <p>16 August 2022</p>
                                </td>
                                <td>
                                  <p>54146</p>
                                </td>
                                <td><img class="img-fluid" src="../assets/images/dashboard/graph-1.png" alt="" data-original-title="" title=""></td>
                                <td>
                                  <p>$210326</p>
                                </td>
                              </tr>
                             <?php //} ?>
                              <tr>
                                <td>
                                  <div class="media">
                                      ID2
                                    <div class="media-body"><a href="#"><span>Retrait</span></a></div>
                                  </div>
                                </td>
                                <td>
                                  <p>2 August 2012</p>
                                </td>
                                <td>
                                  <p>32015</p>
                                </td>
                                <td><img class="img-fluid" src="../assets/images/dashboard/graph-2.png" alt="" data-original-title="" title=""></td>
                                <td>
                                  <p>$548526</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
          <!-- Container-fluid Ends-->





    <?php require_once '../cloud/footer.php'?>
</div>
</div>
<?php require_once '../cloud/script.php'?>
<!-- login js-->
<!-- Plugin used-->
</body>
</html>