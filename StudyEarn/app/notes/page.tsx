"use client"

import { useState } from "react"
import {
  Bold,
  Calendar,
  ChevronDown,
  FileText,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  Save,
  Share,
  Sparkles,
  Trash,
  Undo,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function NotesPage() {
  const [title, setTitle] = useState("Untitled Note")
  const [content, setContent] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Notes Maker</h1>
          <p className="mt-2 text-muted-foreground">
            Create, organize, and enhance your study notes with AI assistance
          </p>
        </div>
        <Button className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI Enhance
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>My Notes</CardTitle>
              <CardDescription>Your saved notes and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input placeholder="Search notes..." className="border-purple-800/20 bg-black/40" />
              </div>
              <div className="space-y-2">
                <div className="rounded-md bg-purple-900/20 p-3">
                  <div className="font-medium">Biology - Chapter 5</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />2 days ago
                    </div>
                    <div className="text-xs text-purple-400">Active</div>
                  </div>
                </div>
                <div className="rounded-md p-3 transition-colors hover:bg-purple-900/10">
                  <div className="font-medium">Physics - Quantum Mechanics</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />1 week ago
                    </div>
                  </div>
                </div>
                <div className="rounded-md p-3 transition-colors hover:bg-purple-900/10">
                  <div className="font-medium">History - World War II</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />2 weeks ago
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <FileText className="h-4 w-4" />
                Create New Note
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>AI Tools</CardTitle>
              <CardDescription>Enhance your notes with AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                Summarize Content
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                Generate Flashcards
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                Explain Concept
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                Find Related Resources
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-auto border-0 bg-transparent p-0 text-xl font-bold focus-visible:ring-0"
                />
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-1">
                        Share
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border-purple-800/20 bg-black/95">
                      <DropdownMenuItem className="focus:bg-purple-900/20">
                        <Share className="mr-2 h-4 w-4" />
                        Share Link
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-purple-900/20">
                        <FileText className="mr-2 h-4 w-4" />
                        Export as PDF
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="edit">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-black/40">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Undo className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <TabsContent value="edit" className="mt-4">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start typing your notes here... or use AI to generate content based on a topic."
                    className="min-h-[500px] w-full resize-none rounded-md border border-purple-800/20 bg-black/20 p-3 text-sm focus-visible:outline-none"
                  />
                </TabsContent>

                <TabsContent value="preview" className="mt-4">
                  <div className="min-h-[500px] rounded-md border border-purple-800/20 bg-black/20 p-3">
                    {content ? (
                      <div className="prose prose-invert max-w-none">
                        {content.split("\n").map((line, i) => (
                          <p key={i}>{line || <br />}</p>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        Preview will appear here
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="gap-2">
                <Trash className="h-4 w-4" />
                Delete
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI Enhance
                </Button>
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Flashcards
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

