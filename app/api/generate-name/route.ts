import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `Generate a startup brand name and a short tagline for this idea: ${idea}.
Return the answer strictly in this format:

Brand Name: <name>
Tagline: <tagline>`
        }
      ]
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 }
    );
  }
}