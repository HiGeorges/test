<?php $title = "Verification d'identité";
    require_once '../cloud/run_secure.php';
    require_once '../cloud/head.php' ;
    require_once '../class/Database.php';
    require_once '../class/Auth.php';
?>

<?php
$db = new Database();
$dblink = $db->db_connect();
$UserManage = new Auth($dblink);

?>

<?php require_once '../cloud/head.php'?>
<body class="box-layout">

<div class="loader-wrapper">
    <div class="theme-loader">
        <div class="loader-p"></div>
    </div>
</div>

<div class="page-wrapper" id="pageWrapper">

    <?php  require_once '../cloud/vertical_menu.php'?>

    <div class="page-body-wrapper horizontal-menu">

        <?php require_once '../cloud/menu.php'?>
        <?php
        if(isset($_GET['myid'])){
            if($_GET['myid'] === $UserID){
                $UserID = $dblink->real_escape_string($_GET['myid']);
                $UserManageInfo =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $data = $UserManage->GetOneUserInfos($UserID)->fetch_object();
                $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();

            }else{
                $redirect = 1;
            }
        }else{
            $redirect = 1;
        }
        ?>

        <?php
        if(isset($redirect) && $redirect == 1){
            ?>
            <script>
                window.location.replace("<?= APP_LINK ?>/dashboard/");

            </script>
        <?php  }?>

        <?php
            if(isset($_POST['PhoneNumber']) && !empty($_POST['PhoneNumber'])){
                $UserPhoneNumber = $dblink->real_escape_string($_POST['PhoneNumber']);
                $UserPhoneNumber = intval($UserPhoneNumber);
                $Status = 1;
                if(is_int($UserPhoneNumber) && $UserPhoneNumber >8){

                    if (isset($_FILES['cover']) and !empty($_FILES['cover']['name'])) {
                        $tailleMax = 2097152;
                        $extensionsValides = array('jpg', 'jpeg', 'gif', 'png');
                        if ($_FILES['cover']['size'] <= $tailleMax) {
                            $extensionUpload = strtolower(substr(strrchr($_FILES['cover']['name'], '.'), 1));
                            if (in_array($extensionUpload, $extensionsValides)) {
                                $file_name = $_FILES['cover']['name'];

                                $temp_file_location = $_FILES['cover']['tmp_name']; //le fichier
                                //ENVOI DANS AWS S3
                                require_once '../library/aws/vendor/autoload.php';

                                $s3 = new Aws\S3\S3Client([
                                    'region' => 'us-east-2',
                                    'version' => 'latest',
                                    'credentials' => [
                                        'key' => "AKIA36XEYSQMDV3ZUK5Q",
                                        'secret' => "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",
                                    ],
                                ]);
                                $result = $s3->putObject([
                                    'Bucket' => 'axastockage',
                                    'ACL' => 'public-read',
                                    'Key' => 'images/' . $file_name . '',
                                    'SourceFile' => $temp_file_location,
                                ]);
                                //ENVOI TERMINE
                                if ($result) {
                                    $cover = "https://axastockage.s3.us-east-2.amazonaws.com/images/$file_name";

                                    if($UserManage->UpdateIdentityInfos($UserID, $UserPhoneNumber, $cover, $Status )){
                                        $UserInfosFecth =  $UserManage->GetOneUserInfos($UserID)->fetch_object();
                                        $success = "Votre demande de verification est soumis avec succès";
                                    }else{
                                        $db->DbError($dblink);
                                        $error = "Une erreur lors enregistrement de votre fichier";
                                    }
                                } else {
                                    $error = "Erreur durant importation de image.";
                                }
                            } else {
                                $error = "L'image doit être au format jpg, jpeg, gif ou png";
                            }
                        } else {
                            $error = "La photo  ne doit pas dépasser 2Mo";
                        }
                    } else { $error = "La photo  n'est pas définie.";}
                }else{
                    $error = "Votre numéro de téléphone est invalide";
                }
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

            <?php require_once '../cloud/verify.php'?>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header pb-0">
                                <h5>  <span class="iconify" data-icon="octicon:verified-16" style="color: blue;"></span> Verification d'identité</h5> <div>

                                    <div class="card-body">
                                        <form class="needs-validation" method="POST" enctype="multipart/form-data">
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <label class="form-label" >Nom et prénoms</label>
                                                    <input class="form-control" name="FullName"  type="text" value="<?=$UserInfosFecth->UserFullName?>" disabled required="">
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label" >Numéro de téléphone précédé de l'indicatif</label>
                                                    <input class="form-control"  name="PhoneNumber"   type="number"  placeholder="22990909009" required="" >
                                                </div>
                                                <div class="col-md-12">
                                                    <label class="form-label" >Adresse Email</label>
                                                    <input class="form-control"  name="Email"   type="email"  value="<?=$UserInfosFecth->UserEmail?>" disabled required="">
                                                </div>
                                                <div>
                                                    <label class="form-label" >Photo de votre pièce d'identité</label>
                                                    <input class="form-control" type="file" name="cover" aria-label="file example" required="">
                                                </div>

                                            </div>

                                            <div class="mb-3">

                                            </div>
                                            <button class="btn btn-primary" type="submit" >Somettre</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row">

                        </div>
                        <?php require_once '../cloud/footer.php'?>
                    </div>
                </div>
                <?php require_once '../cloud/script.php'?>
                <!-- login js-->
                <!-- Plugin used-->
</body>
</html>