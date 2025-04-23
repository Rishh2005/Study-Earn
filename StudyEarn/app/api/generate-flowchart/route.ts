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

    // Create a system prompt that instructs the AI to generate a flowchart
    const systemPrompt = `
      You are an educational AI assistant that creates flowcharts.
      Based on the description provided, generate a mermaid diagram code for a flowchart.
      
      Format your response as a JSON object with the following structure:
      {
        "mermaidCode": "The mermaid code for the flowchart",
        "explanation": "A brief explanation of the flowchart"
      }
      
      Return only the JSON object with no additional text.
    `

    // Use the AI SDK to generate the flowchart
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Create a flowchart based on this description: ${description}`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in flowchart API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate flowchart" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

