import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { fileBase64 } = req.body;

    if (!fileBase64) {
      return res.status(400).json({ error: "Missing file" });
    }

    const cloudName = "drgawnb5b";
    const apiKey = process.env.a725914484846697;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const timestamp = Math.floor(Date.now() / 1000);
    const signatureString = `timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash("sha1").update(signatureString).digest("hex");

    const formData = new URLSearchParams();
    formData.append("file", fileBase64);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    const data = await uploadRes.json();

    if (!uploadRes.ok) {
      return res.status(500).json({ error: "Cloudinary upload failed", details: data });
    }

    return res.status(200).json({ url: data.secure_url });
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
