<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $secretKey = "6Le0ItgqAAAAALkLk1Pm-zg0-2gf2eOHj9Qo36Uj";  // Replace with your reCAPTCHA Secret Key
    $captchaResponse = $_POST["g-recaptcha-response"];

    // Verify with Google API
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secretKey,
        'response' => $captchaResponse
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $responseKeys = json_decode($result, true);

    if ($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
        echo "reCAPTCHA verification successful!";
        // Proceed with form processing (e.g., store data, send email, etc.)
    } else {
        echo "reCAPTCHA verification failed.";
    }
}
?>

