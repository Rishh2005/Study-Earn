"use client"

import { useState } from "react"
import { CalendarIcon, CheckCircle2, Clock, Plus, Sparkles, Trash2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Task {
  id: string
  title: string
  completed: boolean
  dueDate: Date | null
  priority: "low" | "medium" | "high"
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete math assignment",
      completed: false,
      dueDate: new Date(2025, 2, 5),
      priority: "high",
    },
    {
      id: "2",
      title: "Read chapter 7 of biology textbook",
      completed: false,
      dueDate: new Date(2025, 2, 10),
      priority: "medium",
    },
    {
      id: "3",
      title: "Prepare notes for history presentation",
      completed: true,
      dueDate: new Date(2025, 2, 1),
      priority: "medium",
    },
  ])

  const [newTask, setNewTask] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium")

  const addTask = () => {
    if (!newTask.trim()) return

    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      dueDate: selectedDate,
      priority,
    }

    setTasks([...tasks, task])
    setNewTask("")
    setSelectedDate(null)
    setPriority("medium")
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Daily Tasks & To-Do List</h1>
        <p className="mt-2 text-muted-foreground">Manage your daily tasks and assignments</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>My Tasks</CardTitle>
              <CardDescription>Manage your daily tasks and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="bg-black/40">
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between rounded-lg border border-purple-800/20 bg-black/20 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => toggleTask(task.id)}
                            className="border-purple-800/40 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                          />
                          <div>
                            <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                              {task.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              {task.dueDate && (
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {format(task.dueDate, "MMM d, yyyy")}
                                </span>
                              )}
                              <span className={`flex h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
                              <span className="capitalize">{task.priority} priority</span>
                            </div>
                            <div className="ml-2 flex items-center gap-1 text-xs">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-purple-400"
                              >
                                <path
                                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span>
                                {task.priority === "high" ? "15" : task.priority === "medium" ? "10" : "5"} Credits
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteTask(task.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    {tasks.length === 0 && (
                      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-purple-800/20">
                        <p className="text-sm text-muted-foreground">No tasks yet. Add one below!</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="pending" className="mt-4">
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => !task.completed)
                      .map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between rounded-lg border border-purple-800/20 bg-black/20 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={task.completed}
                              onCheckedChange={() => toggleTask(task.id)}
                              className="border-purple-800/40 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                            />
                            <div>
                              <p className="font-medium">{task.title}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                {task.dueDate && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {format(task.dueDate, "MMM d, yyyy")}
                                  </span>
                                )}
                                <span className={`flex h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
                                <span className="capitalize">{task.priority} priority</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteTask(task.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                    {tasks.filter((task) => !task.completed).length === 0 && (
                      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-purple-800/20">
                        <p className="text-sm text-muted-foreground">No pending tasks. Great job!</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="mt-4">
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => task.completed)
                      .map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between rounded-lg border border-purple-800/20 bg-black/20 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={task.completed}
                              onCheckedChange={() => toggleTask(task.id)}
                              className="border-purple-800/40 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                            />
                            <div>
                              <p className="font-medium line-through text-muted-foreground">{task.title}</p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                {task.dueDate && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {format(task.dueDate, "MMM d, yyyy")}
                                  </span>
                                )}
                                <span className={`flex h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
                                <span className="capitalize">{task.priority} priority</span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteTask(task.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}

                    {tasks.filter((task) => task.completed).length === 0 && (
                      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-purple-800/20">
                        <p className="text-sm text-muted-foreground">No completed tasks yet.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col gap-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border-purple-800/20 bg-black/20"
                  />
                  <Button onClick={addTask} disabled={!newTask.trim()} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div>
                    <Label htmlFor="due-date" className="text-xs">
                      Due Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-[180px] justify-start border-purple-800/20 bg-black/20 text-left font-normal"
                          id="due-date"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="border-purple-800/20 bg-black/95 p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="bg-transparent"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="priority" className="text-xs">
                      Priority
                    </Label>
                    <Select value={priority} onValueChange={(value) => setPriority(value as "low" | "medium" | "high")}>
                      <SelectTrigger className="w-[180px] border-purple-800/20 bg-black/20" id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="border-purple-800/20 bg-black/95">
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>Task Summary</CardTitle>
              <CardDescription>Overview of your tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Tasks</span>
                  <span className="font-bold">{tasks.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Completed</span>
                  <span className="font-bold">{tasks.filter((task) => task.completed).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pending</span>
                  <span className="font-bold">{tasks.filter((task) => !task.completed).length}</span>
                </div>

                <div className="mt-6 border-t border-purple-800/20 pt-4">
                  <h4 className="mb-2 text-sm font-medium">Completion Rate</h4>
                  <div className="h-2 w-full rounded-full bg-purple-900/20">
                    <div
                      className="h-2 rounded-full bg-purple-600"
                      style={{
                        width:
                          tasks.length > 0
                            ? `${(tasks.filter((task) => task.completed).length / tasks.length) * 100}%`
                            : "0%",
                      }}
                    />
                  </div>
                  <div className="mt-1 text-right text-xs text-muted-foreground">
                    {tasks.length > 0
                      ? Math.round((tasks.filter((task) => task.completed).length / tasks.length) * 100)
                      : 0}
                    % complete
                  </div>
                </div>

                <div className="mt-6 border-t border-purple-800/20 pt-4">
                  <h4 className="mb-2 text-sm font-medium">Priority Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="text-sm">High</span>
                      </div>
                      <span className="text-sm font-medium">
                        {tasks.filter((task) => task.priority === "high").length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="text-sm">Medium</span>
                      </div>
                      <span className="text-sm font-medium">
                        {tasks.filter((task) => task.priority === "medium").length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                        <span className="text-sm">Low</span>
                      </div>
                      <span className="text-sm font-medium">
                        {tasks.filter((task) => task.priority === "low").length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                AI Task Suggestions
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6 border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>Productivity Tips</CardTitle>
              <CardDescription>AI-powered suggestions to boost your productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-purple-900/20 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="font-medium">Time Blocking</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Allocate specific time blocks for your high-priority tasks to improve focus.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-900/20 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="font-medium">Pomodoro Technique</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Work in 25-minute intervals with short breaks to maintain high productivity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

