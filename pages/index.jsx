import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const submit = async () => {
    if (!email.trim()) return;
    setLoading(true);
    const res = await fetch('/api/tag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    setItems(prev => [...prev, { text: email, business: data.business }]);
    setEmail('');
    setLoading(false);
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <Textarea
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Paste email text here"
        rows={10}
      />
      <div className="mt-2">
        <Button onClick={submit} disabled={loading}>
          {loading ? 'Checking...' : 'Check'}
        </Button>
      </div>
      {items.length > 0 && (
        <ul className="mt-4 space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="border p-2 rounded">
              <p className="whitespace-pre-wrap">{item.text}</p>
              <p className="font-semibold mt-1">
                {item.business
                  ? 'Potential business expense'
                  : 'Not a business expense'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
