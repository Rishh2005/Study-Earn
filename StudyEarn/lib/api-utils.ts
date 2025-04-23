"use client"

export function checkApiKey(): boolean {
  // In a real app, you would check if the API key is configured on the server
  // For demo purposes, we're just checking localStorage
  const apiKey = localStorage.getItem("openai_api_key")
  return !!apiKey
}

export function getApiKey(): string | null {
  return localStorage.getItem("openai_api_key")
}

