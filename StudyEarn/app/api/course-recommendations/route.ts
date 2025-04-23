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
    const { interests, level = "all", duration = "any" } = await req.json()

    // Create a system prompt that instructs the AI to generate course recommendations
    const systemPrompt = `
      You are an educational AI assistant that recommends courses.
      Based on the user's interests, level, and preferred duration, recommend suitable courses.
      
      Format your response as a JSON array of course objects with the following structure:
      [
        {
          "title": "Course title",
          "description": "Brief description of the course",
          "provider": "Course provider (e.g., Coursera, edX, etc.)",
          "level": "Beginner/Intermediate/Advanced",
          "duration": "Estimated time to complete",
          "url": "URL to the course",
          "tags": ["tag1", "tag2", "tag3"]
        }
      ]
      
      Return only the JSON array with no additional text.
    `

    // Use the AI SDK to generate course recommendations
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Recommend courses related to ${interests} for ${level} level learners with ${duration} duration preference.`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in course recommendations API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate course recommendations" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

