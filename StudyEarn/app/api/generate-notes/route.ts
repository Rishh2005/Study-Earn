import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  // Check if API key is available
  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "OpenAI API key is not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const { topic, format = "markdown" } = await req.json()

    // Create a system prompt that instructs the AI to generate study notes
    const systemPrompt = `
      You are an educational AI assistant that creates comprehensive study notes.
      Generate detailed study notes about ${topic}.
      The notes should be well-structured, informative, and educational.
      Format the notes in ${format} format.
      Include key concepts, definitions, examples, and important points to remember.
    `

    // Use the AI SDK to generate the notes
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Create comprehensive study notes about ${topic}.`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in notes API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate notes" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

