export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    // Add full URL and log the response
    const verifyResponse = await fetch(
      "http://new-way.com/verify_recaptcha.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    // Log the raw response for debugging
    const responseText = await verifyResponse.text();
    console.log("Raw PHP response:", responseText);

    // Try to parse as JSON only if it's valid JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Invalid JSON response from PHP:", responseText);
      throw new Error("Invalid response from verification server");
    }

    if (!verifyResponse.ok) {
      throw new Error(data.error || "Verification failed");
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Failed to verify reCAPTCHA" });
  }
}
