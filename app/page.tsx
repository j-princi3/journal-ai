'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Entry {
  id: number;
  content: string;
  summary: string;
  mood: string;
  createdAt: string;
}

export default function Home() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/entries')
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  const handleSubmit = async () => {
    if (!entry.trim()) return;
    setLoading(true);
    const res = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: entry }),
    });
    const data = await res.json();
    setEntries([data, ...entries]);
    setEntry('');
    setLoading(false);
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">📝 Journal AI</h1>
      <Textarea
        rows={5}
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Analyzing...' : 'Save Entry'}
      </Button>
      <div className="space-y-4">
        {entries.map((e) => (
          <div key={e.id} className="p-4 border rounded-xl">
            <p className="text-sm text-gray-500">{new Date(e.createdAt).toLocaleString()}</p>
            <p className="mt-2 whitespace-pre-wrap">{e.content}</p>
            <p className="mt-2 text-blue-700">Summary: {e.summary}</p>
            <p className="text-pink-700">Mood: {e.mood}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
