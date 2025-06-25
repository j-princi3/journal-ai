import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cohere } from '@/lib/cohere';

export async function POST(req: NextRequest) {
  const { content } = await req.json();

  let summary = 'Entry too short to summarize.';

  if (content.length > 250) {
    const coRes = await cohere.summarize({
      text: content,
      length: 'short',
      format: 'paragraph',
      model: 'summarize-xlarge',
    });

    summary = coRes.summary || summary;
  }

  // Simple mood detector (can improve later)
  let mood = 'Neutral';
  const lc = content.toLowerCase();
  if (lc.includes('happy') || lc.includes('grateful') || lc.includes('excited')) {
    mood = 'Positive';
  } else if (lc.includes('sad') || lc.includes('tired') || lc.includes('angry')) {
    mood = 'Negative';
  }

  const entry = await prisma.entry.create({
    data: { content, summary, mood },
  });

  return NextResponse.json(entry);
}
