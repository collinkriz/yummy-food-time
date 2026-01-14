export default async function handler(req, res) {
  // 1. Setup Security Headers (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 2. Use Environment Variable (Security Best Practice)
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!anthropicKey) {
      return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01' // Standard stable version
      },
      body: JSON.stringify(req.body) // Passes the model and messages from index.html
    });

    const data = await response.json();
    return res.status(response.status).json(data);
    
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
