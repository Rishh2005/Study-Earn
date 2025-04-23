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
    const { messages } = await req.json()

    // Extract the user's input from the messages
    const userInput = messages[messages.length - 1].content

    // Create a system prompt that instructs the AI to generate flashcards
    const systemPrompt = `
      You are an educational AI assistant that creates high-quality flashcards.
      Generate 5 flashcards based on the topic or notes provided.
      Format each flashcard as a JSON object with "front" and "back" properties.
      Return the flashcards as a JSON array.
    `

    // Create a user prompt that includes the user's input
    const userPrompt = `Create flashcards about: ${userInput}`

    // Use the AI SDK to generate the flashcards
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: userPrompt,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in flashcards API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate flashcards" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

