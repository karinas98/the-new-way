import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

/**
 * Create an assessment to analyze the risk of a UI action.
 *
 * projectID: Your Google Cloud Project ID.
 * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
 * token: The generated token obtained from the client.
 * recaptchaAction: Action name corresponding to the token.
 */
async function createAssessment(_token) {
  try {
    // Execute reCAPTCHA Enterprise assessment
    const response = await recaptcha.enterprise.execute(
      "6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU",
      { action: "submit" }
    );

    if (!response) {
      console.error("Failed to get reCAPTCHA response");
      return null;
    }

    // Send token to your backend for verification
    const verifyResponse = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: response }),
    });

    const result = await verifyResponse.json();

    if (!result.success) {
      console.error("reCAPTCHA verification failed:", result.error);
      return null;
    }

    // Log assessment details
    if (result.score !== undefined) {
      console.log("Risk Analysis Score:", result.score);
      if (result.reasons) {
        for (const reason of result.reasons) {
          console.log("Risk Reason:", reason);
        }
      }
      return result.score;
    }

    console.error("No score received from assessment");
    return null;
  } catch (error) {
    console.error("reCAPTCHA assessment failed:", error);
    return null;
  }
}

// Export the function if using modules
export { createAssessment };
