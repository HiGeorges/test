<?php $title = "Faire une echange";
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
        $AdminKeyFecth =  $AdminKeyManage->GetTransactionFeeds(1)->fetch_object();
        $GetFeedMoMoToPM = $AdminKeyFecth->FeedMoMoToPM;

        ?>

        <?php
        if(isset($_POST["have"],$_POST["want"])){
            $have = $_POST["have"];
            $want = $_POST["want"];
            if(!($have === $want)){
               if($have === "PM" && $want === "MoMo"){
                   $PMtoMoMO = 1;
               }elseif ($want === "PM" && $have === "MoMo"){
                   $MoMotoPM = 1;
               }

            }else{
                $error = "Cette action est impossible";

            }

        }
        ?>



        <?php
        if(isset($PMtoMoMO) && $PMtoMoMO === 1){?>
        <div class="container-fluid">
            <div class="select2-drpdwn">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5 class="card-title">Completer les informations</h5>
                            </div>
                            <form method="POST" action="submitmex">
                                <div class="card-body">
                                    <div class="alert alert-primary outline alert-dismissible fade show" role="alert">
                                        <p><b> <i class="icofont icofont-ui-rotation"></i>  Prix d'échange de 1 $ de PM est : <?=$GetFeedMoMoToPM?> CFA  </b> </p>
                                        <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Montant en $ à échanger </label>
                                            <input class="form-control" name="dress" type="text">
                                    </div>
                                     <div class="mb-3">
                                        <label class="form-label">Numéro de téléphone MoMo pour reception </label>
                                            <input class="form-control" name="dressMoMo" type="text">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Réseau MoMo </label>
                                            <select class="form-select"   name="way"  required>
                                                 <option selected="" disabled="" value="">Choisir...</option>
                                                 <option value="MTNBJ">MTN Mobile Money Bénin</option>
                                                 <option value="MOOVBJ">Moov Money Bénin</option>
                                             </select>
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-outline-success" type="submit" > Aperçu de l'échange</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <?php }?>

        <?php
        if(isset($MoMotoPM) && $MoMotoPM === 1){?>

        <div class="container-fluid">
            <div class="select2-drpdwn">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5 class="card-title">Completer les informations</h5>
                            </div>
                            <form method="POST">
                                <div class="card-body">
                                        <div class="alert alert-primary outline alert-dismissible fade show" role="alert">
                                        <p><b> <i class="icofont icofont-ui-rotation"></i>  Prix d'achat de 1 $ de PM <?=$GetFeedMoMoToPM?> CFA  </b> </p>
                                        <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label"> Montant en F CFA </label>
                                        <input class="form-control" name="dress" type="text">
                                    </div>
                                       <div class="mb-3">
                                        <label class="form-label"> U Perfect Money de réception</label>
                                        <input class="form-control" name="dress" type="text">
                                    </div>

                                    <div class="mb-3">
                                        <input hidden="" name="start">
                                        <button class="btn btn-outline-success" type="submit" > Valider </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <?php }?>


        <div class="container-fluid">
            <div class="select2-drpdwn">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                  <div class="alert alert-primary inverse alert-dismissible fade show" role="alert"><i class="icofont icofont-ui-rotation"></i>
                            <p>Faites votre échange en toute sécurité  <b>1 $ => </b>hf</p>
                      <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                            </div>
                            <form method="POST">
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">J'ai </label>
                                    <select class="form-control form-control-danger btn-square" id="have" name="have">
                                        <option disabled selected >Choisir une option</option>
                                        <option id="havePM"class="have" value="PM">J'ai des $ PM</option>
                                        <option  id="haveMoMO" class="have" value="MoMo">J'ai Mobile Money</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Je veux</label>
                                    <select class="form-control form-control-primary btn-square" id="want" name="want">
                                        <option disabled selected>Choisir une option</option>
                                        <option class="want" id="wantPM" value="PM">Je veux des $ PM</option>
                                        <option id="wantMoMo" class="want" value="MoMo">Je veux Mobile Money</option>
                                    </select>
                                </div>

                                <div class="mb-3">
                                   <button class="btn btn-outline-success" type="submit"> Valider</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <?php require_once '../cloud/footer.php'?>
    </div>
</div>
<?php require_once '../cloud/script.php'?>
<!--
<script>


let selected_have = document.getElementById('have');
let selected_want = document.getElementById('want');

selected_have.addEventListener('change',()=>{

if(selected_have.value==="PM")
{
    alert(selected_have.value)
    document.getElementById('wantPM').style.display="none";
}
else if(selected_have.value==="MoMo"){
    document.getElementById('wantMoMo').classList.add('d-none')

}
})


</script>
-->
</body>
</html>