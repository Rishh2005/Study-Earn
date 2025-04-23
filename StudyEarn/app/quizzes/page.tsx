"use client"

import { useState } from "react"
import { Check, ChevronRight, Loader2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function QuizzesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  // Sample quiz data - in a real app, this would come from the AI
  const quiz = {
    title: "World Geography Quiz",
    description: "Test your knowledge of world geography with this AI-generated quiz.",
    questions: [
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        correctAnswer: "Japan",
      },
      {
        question: "The Great Barrier Reef is located off the coast of which country?",
        options: ["Brazil", "Mexico", "Australia", "Indonesia"],
        correctAnswer: "Australia",
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Antarctic Desert"],
        correctAnswer: "Antarctic Desert",
      },
      {
        question: "Which mountain range separates Europe from Asia?",
        options: ["Alps", "Andes", "Himalayas", "Ural Mountains"],
        correctAnswer: "Ural Mountains",
      },
      {
        question: "Which of these cities is NOT a capital?",
        options: ["Sydney", "Ottawa", "Vienna", "Bangkok"],
        correctAnswer: "Sydney",
      },
    ],
  }

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer)
    }
  }

  const checkAnswer = () => {
    setIsAnswered(true)

    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setIsLoading(true)

      // Simulate loading the next question (in a real app, this might involve AI)
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
        setIsLoading(false)
      }, 500)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setQuizComplete(false)
  }

  const currentProgress = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-3xl font-bold">AI-Powered Adaptive Quizzes</h1>

      {quizComplete ? (
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle>Quiz Complete!</CardTitle>
            <CardDescription>
              You scored {score} out of {quiz.questions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 text-center">
              <div className="mb-2 text-5xl font-bold">{Math.round((score / quiz.questions.length) * 100)}%</div>
              <Progress value={(score / quiz.questions.length) * 100} className="h-2" />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-medium">Performance Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Based on your results, our AI recommends focusing on physical geography topics. Would you like to
                generate a new quiz focused on these areas?
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-purple-900/20 p-4 text-center">
              <div className="mb-1 text-sm font-medium">Quiz Completed!</div>
              <div className="flex items-center justify-center gap-1">
                <svg
                  width="16"
                  height="16"
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
                <span className="text-lg font-bold text-purple-400">+25 Credits</span>
              </div>
              <p className="text-xs text-muted-foreground">Credits have been added to your account</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={restartQuiz}>
              Restart Quiz
            </Button>
            <Button>Generate Recommended Quiz</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">
                  Question {currentQuestion + 1}/{quiz.questions.length}
                </div>
                <div className="text-sm text-muted-foreground">Score: {score}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={currentProgress} className="mb-6 h-2" />

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-medium">{quiz.questions[currentQuestion].question}</h2>

              <RadioGroup value={selectedAnswer || ""} className="space-y-3">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center rounded-lg border p-4 transition-colors ${
                      isAnswered
                        ? option === quiz.questions[currentQuestion].correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                          : selectedAnswer === option
                            ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                            : ""
                        : "cursor-pointer hover:bg-muted"
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} className="sr-only" />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex w-full cursor-pointer items-center justify-between"
                    >
                      <span>{option}</span>
                      {isAnswered && option === quiz.questions[currentQuestion].correctAnswer && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                      {isAnswered &&
                        selectedAnswer === option &&
                        option !== quiz.questions[currentQuestion].correctAnswer && (
                          <X className="h-5 w-5 text-red-500" />
                        )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!isAnswered ? (
              <Button onClick={checkAnswer} disabled={!selectedAnswer} className="w-full">
                Check Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion} className="w-full gap-2" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "See Results"}
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

