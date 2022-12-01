<?php

function ResquestPaymentMTN(){
    $curl = curl_init();


    $msisdn =22991111173;
    $amount=500;
    $transref =time();
    $clientid ="YozyB5VN69";

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://qosic.net:8443/QosicBridge/user/requestpayment',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode(["msisdn" => $msisdn, "amount" => $amount, "transref" => $transref, "clientid" => $clientid]),

        CURLOPT_HTTPHEADER => array(
            'Authorization: Basic UVNVU1I1MjU6U0JsZmNpc1g2Tmg0Zm5ZZzBRWHQ=',
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    echo $response;
}