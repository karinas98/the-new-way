<?php
require 'vendor/autoload.php';

// Include Google Cloud dependencies using Composer
use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;

/**
  * Create an assessment to analyse the risk of a UI action.
  * @param string $recaptchaKey The reCAPTCHA key associated with the site/app
  * @param string $token The generated token obtained from the client.
  * @param string $project Your Google Cloud project ID.
  * @param string $action Action name corresponding to the token.
  */
function create_assessment(
  string $recaptchaKey,
  string $token,
  string $project,
  string $action
): void {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  $client = new RecaptchaEnterpriseServiceClient();
  $projectName = $client->projectName($project);

  // Set the properties of the event to be tracked.
  $event = (new Event())
    ->setSiteKey($recaptchaKey)
    ->setToken($token);

  // Build the assessment request.
  $assessment = (new Assessment())
    ->setEvent($event);

  try {
    $response = $client->createAssessment(
      $projectName,
      $assessment
    );

    // Check if the token is valid.
    if ($response->getTokenProperties()->getValid() == false) {
      printf('The CreateAssessment() call failed because the token was invalid for the following reason: ');
      printf(InvalidReason::name($response->getTokenProperties()->getInvalidReason()));
      return;
    }

    // Check if the expected action was executed.
    if ($response->getTokenProperties()->getAction() == $action) {
      // Get the risk score and the reason(s).
      // For more information on interpreting the assessment, see:
      // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
      printf('The score for the protection action is:');
      printf($response->getRiskAnalysis()->getScore());
    } else {
      printf('The action attribute in your reCAPTCHA tag does not match the action you are expecting to score');
    }
  } catch (exception $e) {
    printf('CreateAssessment() call failed with the following error: ');
    printf($e);
  }
}

// TO-DO: Replace the token and reCAPTCHA action variables before running the sample.
create_assessment(
   '6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU',
   $token,
   'the-new-way-450623',
   'submit'
);
?>


<?php

// Include Google Cloud dependencies using Composer
// composer require google/cloud-recaptcha-enterprise
require 'vendor/autoload.php';


<?php
// Set proper headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get the POST data
$json = file_get_contents('php://input');
$data = json_decode($json);

if (!$data || !isset($data->token)) {
    echo json_encode(['success' => false, 'error' => 'Token is required']);
    exit;
}

require 'vendor/autoload.php';

use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;

function create_assessment(string $siteKey, string $token, string $project): array {
    try {
        $client = new RecaptchaEnterpriseServiceClient();
        $projectName = $client->projectName($project);

        $event = (new Event())
            ->setSiteKey($siteKey)
            ->setToken($token);

        $assessment = (new Assessment())
            ->setEvent($event);

        $response = $client->createAssessment(
            $projectName,
            $assessment
        );

        if ($response->getTokenProperties()->getValid() == false) {
            return [
                'success' => false,
                'error' => 'Invalid token: ' . InvalidReason::name($response->getTokenProperties()->getInvalidReason())
            ];
        }

        // Get the score and return it
        return [
            'success' => true,
            'score' => $response->getRiskAnalysis()->getScore(),
            'hostname' => $response->getTokenProperties()->getHostname(),
            'action' => $response->getTokenProperties()->getAction()
        ];

    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    } finally {
        if (isset($client)) {
            $client->close();
        }
    }
}

// Execute the assessment
try {
    $result = create_assessment(
        '6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU',
        $data->token,
        'the-new-way-450623'
    );

    if (!$result['success']) {
        http_response_code(400);
    }

    echo json_encode($result);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>