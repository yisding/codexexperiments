import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'Decide if the following email describes a business expense. Respond only with "yes" or "no".' },
        { role: 'user', content: email }
      ]
    });

    const content = completion.choices[0].message.content || '';
    const business = content.toLowerCase().includes('yes');
    res.status(200).json({ business });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to call OpenAI' });
  }
}
