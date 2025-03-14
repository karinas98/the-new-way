export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    // Call your PHP verification endpoint
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

    const data = await verifyResponse.json();

    if (!verifyResponse.ok) {
      throw new Error(data.error || "Verification failed");
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ error: "Failed to verify reCAPTCHA" });
  }
}
