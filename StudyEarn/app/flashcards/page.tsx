"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Loader2, Zap } from "lucide-react"
import { useChat } from "ai/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApiKeyWarning } from "@/components/api-key-warning"

export default function FlashcardsPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [topic, setTopic] = useState("")
  const [apiKeyMissing, setApiKeyMissing] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput, error } = useChat({
    api: "/api/generate-flashcards",
    onError: (error) => {
      console.error("Flashcards error:", error)
      if (error.message.includes("API key")) {
        setApiKeyMissing(true)
      }
    },
  })

  // This would be populated by the AI in a real implementation
  const [flashcards, setFlashcards] = useState([
    { front: "What is the capital of France?", back: "Paris" },
    { front: "What is the largest planet in our solar system?", back: "Jupiter" },
    { front: "Who wrote 'Romeo and Juliet'?", back: "William Shakespeare" },
  ])

  const handleTopicSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInput(topic)
    handleSubmit(e)
  }

  const nextCard = () => {
    if (activeCard < flashcards.length - 1) {
      setActiveCard(activeCard + 1)
      setFlipped(false)
    }
  }

  const prevCard = () => {
    if (activeCard > 0) {
      setActiveCard(activeCard - 1)
      setFlipped(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-3xl font-bold">AI Flashcard Generator</h1>

      {apiKeyMissing && <ApiKeyWarning />}

      <Tabs defaultValue="generate">
        <TabsList className="mb-6">
          <TabsTrigger value="generate">Generate Flashcards</TabsTrigger>
          <TabsTrigger value="study">Study Flashcards</TabsTrigger>
        </TabsList>

        <TabsContent value="generate">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Create New Flashcards</h2>
              <form onSubmit={handleTopicSubmit}>
                <div className="mb-4">
                  <Textarea
                    placeholder="Enter a topic or paste your notes here..."
                    className="min-h-[200px]"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <Button type="submit" disabled={isLoading || !topic} className="gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4" />
                      Generate Flashcards
                    </>
                  )}
                </Button>
                {isLoading ? null : (
                  <div className="mt-2 rounded-md bg-purple-900/10 p-2 text-center text-sm">
                    <span className="text-muted-foreground">Generate flashcards to earn </span>
                    <span className="font-medium text-purple-400">10 Credits</span>
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">How It Works</h2>
              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Enter Your Topic</h3>
                    <p className="text-sm text-muted-foreground">Type a subject or paste your study notes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">AI Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes your content and extracts key concepts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Study Ready</h3>
                    <p className="text-sm text-muted-foreground">Review your generated flashcards and start studying</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="study">
          <div className="flex flex-col items-center">
            <div className="mb-8 flex w-full max-w-md justify-between">
              <Button variant="outline" onClick={prevCard} disabled={activeCard === 0} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <span className="flex items-center text-sm text-muted-foreground">
                {activeCard + 1} of {flashcards.length}
              </span>
              <Button
                variant="outline"
                onClick={nextCard}
                disabled={activeCard === flashcards.length - 1}
                className="gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="perspective-1000 w-full max-w-md cursor-pointer" onClick={() => setFlipped(!flipped)}>
              <div
                className={`relative h-64 w-full transform-style-3d transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}
              >
                <Card className="absolute backface-hidden h-full w-full">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6">
                    <div className="text-center">
                      <div className="mb-2 text-sm text-muted-foreground">Question</div>
                      <div className="text-xl font-medium">{flashcards[activeCard]?.front}</div>
                    </div>
                    <div className="mt-auto text-center text-sm text-muted-foreground">Click to reveal answer</div>
                  </CardContent>
                </Card>

                <Card className="absolute backface-hidden h-full w-full rotate-y-180">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6">
                    <div className="text-center">
                      <div className="mb-2 text-sm text-muted-foreground">Answer</div>
                      <div className="text-xl font-medium">{flashcards[activeCard]?.back}</div>
                    </div>
                    <div className="mt-auto text-center text-sm text-muted-foreground">Click to see question</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

