"use client"

import { useState, useRef, useEffect } from "react"
import { AlertCircle, Send, X } from "lucide-react"
import { useChat } from "ai/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [apiKeyError, setApiKeyError] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Chat error:", error)
      if (error.message.includes("API key")) {
        setApiKeyError(true)
      }
    },
  })

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-[350px] border-purple-800/20 bg-black/95 backdrop-blur">
          <CardHeader className="border-b border-purple-800/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">AI Study Assistant</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            {apiKeyError && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  OpenAI API key is missing or invalid. Please set up your API key to use the chatbot.
                </AlertDescription>
              </Alert>
            )}

            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-purple-900/20 px-4 py-2 text-sm">
                      Hi! I'm your AI study assistant. How can I help you today?
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`rounded-lg px-4 py-2 text-sm ${
                          message.role === "user" ? "bg-purple-600 text-white" : "bg-purple-900/20"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="border-purple-800/20 bg-black/40"
                disabled={isLoading || apiKeyError}
              />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-purple-500 to-blue-600"
                disabled={isLoading || apiKeyError || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "linear-gradient(135deg, #B829E1 0%, #4318FF 100%)",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          <path
            d="M24.6 13.9998C24.6 19.8 19.8002 24.5998 14 24.5998C12.1555 24.5998 10.4178 24.1562 8.87283 23.3686C8.44586 23.1659 7.95609 23.0923 7.48539 23.2124L4.83919 23.8984C3.70202 24.1973 2.6665 23.1618 2.96528 22.0246L3.65134 19.3784C3.77144 18.9077 3.69774 18.418 3.49508 17.991C2.70753 16.446 2.26404 14.7083 2.26404 12.8638C2.26404 7.06362 7.06382 2.26385 12.864 2.26385L13.7351 2.26385C19.0279 2.61981 23.2638 6.85573 23.6198 12.1486L23.6198 13.0196L23.6198 13.9998H24.6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M11.5 14H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 11.5L14 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M19.5 8.5L21 7L22.5 8.5L21 10L19.5 8.5Z" fill="currentColor" />
        </svg>
      </Button>
    </div>
  )
}

