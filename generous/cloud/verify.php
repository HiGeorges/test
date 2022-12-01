<?php
if($UserStatus == 0){?>
    <div class="col-sm-12 col-xl-12">
        <div class="card height-equal">
            <div class="card-header pb-0">
                <h5>Verification d'identité <span class="iconify" data-icon="iconoir:security-pass" style="color: blue" data-width="30"></span> </h5><span>Complétez la vérification d'identité pour accéder à tous les services de <strong> <?=APP_NAME?> </strong> .</span>
            </div>
            <div class="card-body">

                <div class="alert alert-danger dark alert-dismissible fade show" role="alert"><i data-feather="thumbs-down"></i>
                    <p> Sans la verification d'identité vous êtes limité dans les echanges,  Faire la verification maintenant en cliquant ici.</p>
                    <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

            </div>
        </div>
    </div>
<?php  }elseif($UserStatus == 1){?>
<div class="col-sm-12 col-xl-12">
    <div class="card height-equal">
        <div class="card-header pb-0">
            <h5>Verification d'identité <span class="iconify" data-icon="iconoir:security-pass" style="color: blue" data-width="30"></span> </h5><span>Complétez la vérification d'identité pour accéder à tous les services de <strong> <?=APP_NAME?> </strong> .</span>
        </div>
        <div class="card-body">

            <div class="alert alert-warning dark alert-dismissible fade show" role="alert"><span class="iconify" data-icon="eos-icons:loading"></span>
                <p> Votre demande de verification est en attente.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    </div>
</div>
<?php  } elseif($UserStatus == 2){?>
<div class="col-sm-12 col-xl-12">
    <div class="card height-equal">
        <div class="card-header pb-0">
            <h5> <span class="iconify-inline" data-width="20" data-icon="ic:sharp-verified-user" style="color: blue;"></span> Compte Vérifié </h5></span>
        </div>
        <div class="card-body">

        </div>
    </div>
</div>
<?php } else{?>
<div class="col-sm-12 col-xl-12">
    <div class="card height-equal">
        <div class="card-header pb-0">
            <h5>Verification d'identité <span class="iconify" data-icon="iconoir:security-pass" style="color: blue" data-width="30"></span> </h5><span>Complétez la vérification d'identité pour accéder à tous les services de <strong> <?=APP_NAME?> </strong> .</span>
        </div>
        <div class="card-body">

            <div class="alert alert-danger dark alert-dismissible fade show" role="alert"><i data-feather="thumbs-down"></i>
                <p> Sans la verification d'identité vous êtes limité dans les echanges,  Faire la verification maintenant en cliquant ici.</p>
                <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    </div>
</div>
<?php }?>
