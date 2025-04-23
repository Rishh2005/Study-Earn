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
    const { topic, difficulty = "medium", questionCount = 5 } = await req.json()

    // Create a system prompt that instructs the AI to generate a quiz
    const systemPrompt = `
      You are an educational AI assistant that creates high-quality quizzes.
      Generate a quiz with ${questionCount} multiple-choice questions about ${topic}.
      The difficulty level should be ${difficulty}.
      
      Format the quiz as a JSON object with the following structure:
      {
        "title": "Quiz title",
        "description": "Brief description of the quiz",
        "questions": [
          {
            "question": "Question text",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswer": "The correct option"
          }
        ]
      }
      
      Return only the JSON object with no additional text.
    `

    // Use the AI SDK to generate the quiz
    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Generate a ${difficulty} difficulty quiz about ${topic} with ${questionCount} questions.`,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in quiz API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate quiz" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

