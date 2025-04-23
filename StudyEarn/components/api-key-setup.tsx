"use client"

import { useState } from "react"
import { AlertCircle, Check, Copy, Key } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ApiKeySetup() {
  const [apiKey, setApiKey] = useState("")
  const [isSaved, setIsSaved] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSaveKey = async () => {
    if (!apiKey.trim()) {
      setError("Please enter a valid API key")
      return
    }

    try {
      // In a real app, you would securely store this key
      // For demo purposes, we're just setting it in localStorage
      localStorage.setItem("openai_api_key", apiKey)
      setIsSaved(true)
      setError(null)

      // Reset the saved state after 3 seconds
      setTimeout(() => {
        setIsSaved(false)
      }, 3000)
    } catch (err) {
      setError("Failed to save API key")
    }
  }

  const handleCopyInstructions = () => {
    navigator.clipboard.writeText(
      "To use the AI features, you need to add your OpenAI API key. Get your API key from https://platform.openai.com/api-keys and add it to the .env.local file: OPENAI_API_KEY=your_api_key_here",
    )
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5 text-purple-400" />
          API Key Setup
        </CardTitle>
        <CardDescription>Configure your OpenAI API key to use AI features</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="api-key" className="text-sm font-medium">
              OpenAI API Key
            </label>
            <Input
              id="api-key"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>

          <div className="rounded-md bg-muted p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Need an API key? Get one from OpenAI</span>
              <Button variant="ghost" size="sm" className="h-7 gap-1" onClick={handleCopyInstructions}>
                {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span className="text-xs">{isCopied ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSaveKey} disabled={isSaved}>
          {isSaved ? "API Key Saved" : "Save API Key"}
        </Button>
      </CardFooter>
    </Card>
  )
}

