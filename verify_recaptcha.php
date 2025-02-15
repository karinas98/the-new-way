<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $secretKey = "6LfJBdgqAAAAAMLwQNpHNtGKPPx_BosoyxNbufS_"; // Replace with your reCAPTCHA secret key
    $captchaResponse = $_POST["g-recaptcha-response"];

    // Verify the reCAPTCHA response with Google
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

    if ($responseKeys["success"]) {
        echo "reCAPTCHA verification successful!";
        // Process the form data here (e.g., save to database, send email, etc.)
    } else {
        echo "reCAPTCHA verification failed.";
    }
}
?>
