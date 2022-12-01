<?php
require_once '../cloud/run_secure.php';
require_once '../class/Database.php';
require_once '../class/MoMoManage.php';

$db = new  Database();
$dblink = $db->db_connect();
$MoMoManage = new MoMoManage($dblink);

$Status ="PENDING";
$GetLastTranscation = $MoMoManage->GetLastTransactionStatusPending($UserID, $Status)->fetch_object();

$transref = $GetLastTranscation->Transref;

if(!$transref){
    require_once '../cloud/function.php';
    //sleep for 3 seconds
    sleep(20);

//start again
   var_dump(abc($tokenex,$clientid)) ;

}else{
    echo "Identifiant déjà utilisé";
}



?>


<?php
/*
$tokenex = "001282918ef588e7899f";


$clientid = "YozyB5VN69";

function abc($tokenex,$clientid){

   $curl = curl_init();

   curl_setopt_array($curl, array(
       CURLOPT_URL => 'https://qosic.net:8443/QosicBridge/user/gettransactionstatus',
       CURLOPT_RETURNTRANSFER => true,
       CURLOPT_ENCODING => '',
       CURLOPT_MAXREDIRS => 10,
       CURLOPT_TIMEOUT => 120,
       CURLOPT_FOLLOWLOCATION => true,
       CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
       CURLOPT_CUSTOMREQUEST => 'POST',
       CURLOPT_POSTFIELDS => json_encode([
           "transref" => $tokenex,
           "clientid" => $clientid]),
       CURLOPT_HTTPHEADER => array(
           'Authorization: Basic UVNVU1I1MjU6U0JsZmNpc1g2Tmg0Zm5ZZzBRWHQ=',
           'Content-Type: application/json'
       ),
   ));

   $response = curl_exec($curl);
   echo $response;


}

//sleep for 3 seconds
sleep(20);

//start again
abc($tokenex,$clientid)
*/
?>