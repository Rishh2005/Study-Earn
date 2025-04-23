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
    const { description } = await req.json()

    // Create a system prompt that instructs the AI to generate an ER diagram
    const systemPrompt = `
      You are an educational AI assistant that creates Entity-Relationship diagrams.
      Based on the description provided, generate:
      
      1. A mermaid diagram code for an ER diagram
      2. SQL code to create the database tables
      
      Format your response as a JSON object with the following structure:
      {
        "mermaidCode": "The mermaid code for the ER diagram",
        "sqlCode": "The SQL code to create the database tables",
        "explanation": "A brief explanation of the diagram and tables"
      }
      
      Return only the JSON object with no additional text.
    `

    // Use the AI SDK to generate the ER diagram
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Create an ER diagram based on this description: ${description}`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in ER diagram API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate ER diagram" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

