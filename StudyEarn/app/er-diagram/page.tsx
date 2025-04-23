"use client"

import { useState } from "react"
import { Download, FileText, Loader2, Redo, Save, Undo, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ERDiagramPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [diagram, setDiagram] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!prompt) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setDiagram("/placeholder.svg?height=600&width=800")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">AI ER Diagram Maker</h1>
        <p className="mt-2 text-muted-foreground">
          Generate entity-relationship diagrams from text descriptions using AI
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>Generate ER Diagram</CardTitle>
              <CardDescription>Describe your database schema and let AI create an ER diagram</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Describe your database entities and relationships. For example: 'Create an ER diagram for a university database with students, courses, professors, and departments.'"
                className="min-h-[200px] border-purple-800/20 bg-black/20"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} disabled={isGenerating || !prompt} className="w-full gap-2">
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    Generate Diagram
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>Saved Diagrams</CardTitle>
              <CardDescription>Your previously created diagrams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="rounded-md bg-purple-900/20 p-3">
                  <div className="font-medium">E-commerce Database</div>
                  <div className="text-xs text-muted-foreground">Created 3 days ago</div>
                </div>
                <div className="rounded-md p-3 transition-colors hover:bg-purple-900/10">
                  <div className="font-medium">Blog Platform Schema</div>
                  <div className="text-xs text-muted-foreground">Created 1 week ago</div>
                </div>
                <div className="rounded-md p-3 transition-colors hover:bg-purple-900/10">
                  <div className="font-medium">Hospital Management System</div>
                  <div className="text-xs text-muted-foreground">Created 2 weeks ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Diagram Preview</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Undo className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Redo className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="diagram">
                <TabsList className="bg-black/40">
                  <TabsTrigger value="diagram">Diagram</TabsTrigger>
                  <TabsTrigger value="code">SQL Code</TabsTrigger>
                </TabsList>

                <TabsContent value="diagram" className="mt-4">
                  <div className="flex min-h-[500px] items-center justify-center rounded-md border border-purple-800/20 bg-black/20">
                    {diagram ? (
                      <img src={diagram || "/placeholder.svg"} alt="ER Diagram" className="max-h-[500px] w-auto" />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        {isGenerating ? (
                          <div className="flex flex-col items-center gap-2">
                            <Loader2 className="h-8 w-8 animate-spin" />
                            <p>Generating your ER diagram...</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="h-12 w-12 text-muted-foreground opacity-20" />
                            <p>Your ER diagram will appear here</p>
                            <p className="text-sm">Describe your database schema in the left panel</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-4">
                  <div className="min-h-[500px] rounded-md border border-purple-800/20 bg-black/20 p-4 font-mono text-sm">
                    {diagram ? (
                      <pre className="text-purple-300">{`CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  date_of_birth DATE,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Professors (
  professor_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);

CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  credits INT,
  professor_id INT,
  FOREIGN KEY (professor_id) REFERENCES Professors(professor_id)
);

CREATE TABLE Departments (
  department_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100)
);

CREATE TABLE Enrollments (
  student_id INT,
  course_id INT,
  enrollment_date DATE,
  grade VARCHAR(2),
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);`}</pre>
                    ) : (
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <div className="flex flex-col items-center gap-2">
                          <FileText className="h-12 w-12 text-muted-foreground opacity-20" />
                          <p>SQL code will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled={!diagram} className="gap-2">
                <Save className="h-4 w-4" />
                Save Diagram
              </Button>
              <Button variant="outline" disabled={!diagram} className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

