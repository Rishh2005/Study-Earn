import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Course {
  title: string
  provider: string
  duration: string
  level: string
  tags: string[]
  url: string
  description: string
}

const recommendedCourses: Course[] = [
  {
    title: "Web Development Fundamentals",
    provider: "freeCodeCamp",
    duration: "300 hours",
    level: "Beginner",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://www.freecodecamp.org/learn/responsive-web-design/",
    description:
      "Learn web development from scratch with this comprehensive curriculum covering HTML5, CSS3, and responsive design principles.",
  },
  {
    title: "Python for Data Science",
    provider: "Coursera",
    duration: "6 weeks",
    level: "Intermediate",
    tags: ["Python", "Data Science", "Analytics"],
    url: "https://www.coursera.org/learn/python-for-data-science",
    description: "Master Python programming for data analysis, visualization, and basic machine learning concepts.",
  },
  {
    title: "Machine Learning Basics",
    provider: "edX",
    duration: "8 weeks",
    level: "Intermediate",
    tags: ["AI", "ML", "Statistics"],
    url: "https://www.edx.org/learn/machine-learning",
    description: "Introduction to machine learning algorithms, statistical modeling, and practical applications.",
  },
  {
    title: "Mobile App Development",
    provider: "MIT OpenCourseWare",
    duration: "12 weeks",
    level: "Advanced",
    tags: ["Mobile", "React Native", "iOS", "Android"],
    url: "https://ocw.mit.edu",
    description: "Learn to build cross-platform mobile applications using modern frameworks and best practices.",
  },
]

export function CourseRecommendations() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recommendedCourses.map((course) => (
        <Card key={course.title}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.provider}</CardDescription>
              </div>
              <Badge variant="secondary">{course.level}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{course.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Duration:</span>
              <span className="font-medium">{course.duration}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full gap-2">
              <Link href={course.url} target="_blank" rel="noopener noreferrer">
                Start Learning
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

