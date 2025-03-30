import { Groq } from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function getGroqResponse(prompt: string) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful mental health assistant. Provide supportive, empathetic, and professional responses. Focus on mental well-being, coping strategies, and general mental health guidance. Always maintain appropriate boundaries and encourage seeking professional help when necessary.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1000,
    })

    return completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response at this time."
  } catch (error) {
    console.error("Error calling Groq API:", error)
    return "I apologize, but I encountered an error. Please try again later."
  }
}
