import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

export default function Home() {
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await fetch('/api/tag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    setBusiness(data.business);
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
      {business !== null && (
        <p className="mt-4 font-semibold">
          {business ? 'Potential business expense' : 'Not a business expense'}
        </p>
      )}
    </main>
  );
}
