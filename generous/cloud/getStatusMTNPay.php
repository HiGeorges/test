
<?php

require_once 'run.php';
$str = $_POST['transref'];
 $replaced = str_replace(' ', '', $str);
if(isset($_POST['transref']) && !empty($_POST['transref'])){
    $transID =    $_POST['transref'];
    $clientID = "YozyB5VN69";

    $curl = curl_init();
    curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://qosic.net:8443/QosicBridge/user/gettransactionstatus',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
   CURLOPT_POSTFIELDS => json_encode([
            "transref" => $replaced,
            "clientid" => "YozyB5VN69"]),
  CURLOPT_HTTPHEADER => array(
    'Authorization: Basic UVNVU1I1MjU6U0JsZmNpc1g2Tmg0Zm5ZZzBRWHQ=',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);

    echo   ($response);
}










