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
    const { topic, duration = "1 week", goal = "mastery" } = await req.json()

    // Create a system prompt that instructs the AI to generate a study plan
    const systemPrompt = `
      You are an educational AI assistant that creates personalized study plans.
      Generate a detailed study plan for ${topic} over a ${duration} period.
      The goal of the study plan is ${goal}.
      
      Format the study plan as a JSON object with the following structure:
      {
        "title": "Study plan title",
        "description": "Brief description of the study plan",
        "duration": "${duration}",
        "goal": "${goal}",
        "days": [
          {
            "day": "Day number",
            "focus": "Focus area for the day",
            "activities": [
              {
                "title": "Activity title",
                "description": "Description of the activity",
                "duration": "Estimated time to complete",
                "resources": "Resources needed"
              }
            ]
          }
        ]
      }
      
      Return only the JSON object with no additional text.
    `

    // Use the AI SDK to generate the study plan
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Create a ${duration} study plan for ${topic} with the goal of ${goal}.`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in study plan API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate study plan" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

