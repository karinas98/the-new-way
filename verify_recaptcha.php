<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $secretKey = "6Le0ItgqAAAAAKpUrmAweoPpkn8PBHV_2fjaviSD";  // Replace with your reCAPTCHA Secret Key
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);

    if (!isset($data["g-recaptcha-response"])) {
        echo "reCAPTCHA token is missing.";
        exit;
    }

    $captchaResponse = $data["g-recaptcha-response"];

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $postData = [
        "secret" => $secretKey,
        "response" => $captchaResponse
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $responseKeys = json_decode($response, true);

    if ($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
        echo "reCAPTCHA verification successful!";
    } else {
        echo "reCAPTCHA verification failed.";
    }
}
?>


