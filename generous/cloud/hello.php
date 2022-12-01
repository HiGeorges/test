<div class="col-sm-6">
    <h3>Hello <?=$UserName?> <?php if($UserStatus == 2){ ?>
            <span class="iconify-inline" data-icon="uil:comment-verify" style="color: blue;" ></span> <?php } else{?> <span class="iconify-inline" data-icon="tabler:badges-off"></span> <?php  }?>   <span class="iconify-inline" data-icon="noto:vulcan-salute-medium-dark-skin-tone"></span></h3>
</div>
<div class="col-sm-6">
    <!-- Bookmark Start-->


    <?php



    if(isset($_POST['account']) && $_POST['account'] == "1" ){

        if(isset($_POST['amount'], $_POST['intPay'])){
            if(!empty($_POST['amount']) && $_POST['intPay']){
                $PPay = $_POST['intPay'];
                $PAmount = intval($_POST['amount']);
                if(is_int($PAmount)){
                    if (str_starts_with($PPay, 'U')) {
                        $PAccount = $dblink->real_escape_string($_POST['account']);
                        $PAmount = $dblink->real_escape_string($PAmount);
                        $PIntPay = $dblink->real_escape_string($PPay);
                        $redirectPerfect = 1;
                        ob_start();
                        header('location : dashboard/');
                        ob_end_flush();
                    }else{
                        $error = "Votre (U) adresse de paiement perfect Money est incorrect";
                    }

                }else{
                    $error = "Le montant entré est invalide";
                }


            }else{
                $error = "Tout les champs doivent êtres remplis";
            }

        }
    }else{
        // Si c'est pas perfect qui est choisi $redirect = 1; on fait.
    }

    ?>



    <div class="modal fade" id="tooltipmodal" tabindex="-1" role="dialog" aria-labelledby="tooltipmodal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><span class="iconify-inline" data-width="20" data-icon="flat-color-icons:money-transfer"></span> Recharger votre compte</h5>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form method="POST">
                <div class="modal-body">

                        <div class="mb-3">
                            <label class="form-label" >Compte à recharger</label>
                            <select class="form-select" name="account"  required="">
                                <option selected="" disabled="" value="" >Choisir...</option>
                                <option value="1">Solde PM</option>
                                <option value="2">Solde MoMo</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label">Montant</label>
                            <input class="form-control" type="text" placeholder="$ ou FCFA" name="amount" required="">
                        </div>
                        <div class="col-12">
                            <label class="form-label">Adresse de paiement</label>
                            <input class="form-control" type="text" placeholder="U Perfect ou Numéro MoMo" name="intPay" required="">
                        </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Fermé</button>
                    <button class="btn btn-primary" type="submit">Aperçu de la transaction</button>
                </div>
                </form>
            </div>
        </div>
    </div>