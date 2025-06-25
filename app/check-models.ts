// check-models.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

async function listModels() {
  const models = await openai.models.list();
  models.data.forEach((model) => console.log(model.id));
}

listModels();
