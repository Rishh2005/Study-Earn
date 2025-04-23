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
    const { topic, timeframe = "6 months", level = "beginner" } = await req.json()

    // Create a system prompt that instructs the AI to generate a learning roadmap
    const systemPrompt = `
      You are an educational AI assistant that creates personalized learning roadmaps.
      Generate a detailed learning roadmap for ${topic} over a ${timeframe} period.
      The roadmap should be tailored for a ${level} level learner.
      
      Format the roadmap as a JSON object with the following structure:
      {
        "title": "Roadmap title",
        "description": "Brief description of the roadmap",
        "timeframe": "${timeframe}",
        "level": "${level}",
        "milestones": [
          {
            "title": "Milestone title",
            "description": "Description of the milestone",
            "duration": "Estimated time to complete",
            "resources": [
              {
                "title": "Resource title",
                "type": "book/course/video/article",
                "url": "URL if applicable"
              }
            ]
          }
        ]
      }
      
      Return only the JSON object with no additional text.
    `

    // Use the AI SDK to generate the roadmap
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Create a ${level}-level learning roadmap for ${topic} over ${timeframe}.`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in roadmap API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate roadmap" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

