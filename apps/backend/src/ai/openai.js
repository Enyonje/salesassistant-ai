import OpenAI from 'openai';
let client;
export function getOpenAIClient(){const key=process.env.OPENAI_API_KEY;if(!key)return null;if(!client)client=new OpenAI({apiKey:key});return client;}
