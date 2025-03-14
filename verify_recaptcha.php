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

use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;

/**
* Create an assessment to analyze the risk of a UI action.
* @param string $siteKey The key ID for the reCAPTCHA key (See https://cloud.google.com/recaptcha/docs/create-key)
* @param string $token The user's response token for which you want to receive a reCAPTCHA score. (See https://cloud.google.com/recaptcha/docs/create-assessment#retrieve_token)
* @param string $project Your Google Cloud project ID
*/
function create_assessment(
   string $siteKey,
   string $token,
   string $project
): void {
// TODO: To avoid memory issues, move this client generation outside
// of this example, and cache it (recommended) or call client.close()
// before exiting this method.
$client = new RecaptchaEnterpriseServiceClient();
$projectName = $client->projectName($project);

   $event = (new Event())
       ->setSiteKey($siteKey)
       ->setToken($token);

   $assessment = (new Assessment())
       ->setEvent($event);

   try {
       $response = $client->createAssessment(
           $projectName,
           $assessment
       );

       // You can use the score only if the assessment is valid,
       // In case of failures like re-submitting the same token, getValid() will return false
       if ($response->getTokenProperties()->getValid() == false) {
           printf('The CreateAssessment() call failed because the token was invalid for the following reason: ');
           printf(InvalidReason::name($response->getTokenProperties()->getInvalidReason()));
       } else {
           printf('The score for the protection action is:');
           printf($response->getRiskAnalysis()->getScore());

           // Optional: You can use the following methods to get more data about the token
           // Action name provided at token generation.
           // printf($response->getTokenProperties()->getAction() . PHP_EOL);
           // The timestamp corresponding to the generation of the token.
           // printf($response->getTokenProperties()->getCreateTime()->getSeconds() . PHP_EOL);
           // The hostname of the page on which the token was generated.
           // printf($response->getTokenProperties()->getHostname() . PHP_EOL);
       }
   } catch (exception $e) {
       printf('CreateAssessment() call failed with the following error: ');
       printf($e);
   }
}

// TODO(Developer): Replace the following before running the sample
create_assessment(
   '6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU',
   $token,
   'the-new-way-450623'
);
?>