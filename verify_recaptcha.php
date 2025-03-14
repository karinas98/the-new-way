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
    echo json_encode(['error' => 'Token is required']);
    exit;
}

require 'vendor/autoload.php';

use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;

function create_assessment(string $recaptchaKey, string $token, string $project, string $action): array {
    try {
        // Create the reCAPTCHA client
        $client = new RecaptchaEnterpriseServiceClient();
        $projectName = $client->projectName($project);

        // Create the event
        $event = (new Event())
            ->setSiteKey($recaptchaKey)
            ->setToken($token);

        // Create the assessment
        $assessment = (new Assessment())
            ->setEvent($event);

        // Send the assessment
        $response = $client->createAssessment($projectName, $assessment);

        // Check token validity
        if (!$response->getTokenProperties()->getValid()) {
            return [
                'success' => false,
                'error' => 'Invalid token: ' . InvalidReason::name($response->getTokenProperties()->getInvalidReason())
            ];
        }

        // Check action match
        if ($response->getTokenProperties()->getAction() !== $action) {
            return [
                'success' => false,
                'error' => 'Action mismatch: expected ' . $action . ' but got ' . $response->getTokenProperties()->getAction()
            ];
        }

        // Get the risk score
        $score = $response->getRiskAnalysis()->getScore();

        // Return success with score
        return [
            'success' => true,
            'score' => $score,
            'action' => $action
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

// Execute assessment
try {
    $result = create_assessment(
        '6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU',
        $data->token,
        'the-new-way-450623',
        'submit'
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
