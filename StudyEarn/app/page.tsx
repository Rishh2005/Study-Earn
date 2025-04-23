import Link from "next/link"
import { ArrowRight, BrainCircuit, FileText, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="container relative mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 inline-block rounded-full bg-purple-900/20 px-4 py-1.5 text-sm font-medium text-purple-400">
              AI-Powered Learning Platform
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Learn Smarter, <span className="text-purple-400">Earn Faster</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Personalized learning experiences powered by artificial intelligence to help you master any subject and
              advance your career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Zap className="h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="h-5 w-5" />
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-purple-950/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Popular Learning Paths</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our most popular courses and learning paths to kickstart your journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                description: "Master modern web technologies and frameworks",
                image:
                  "https://sjc.microlink.io/9c-9fa7HvUGRZhOsx4ukd47KD2XpagSYWPtVuDomQrbB3M3_ssGPJl32pZHGKjxveHMm8GGUXBfsPs8w1vWy3g.jpeg",
                level: "Beginner to Advanced",
                duration: "6 months",
                modules: 24,
                slug: "web-development",
              },
              {
                title: "Data Science",
                description: "Learn to analyze and visualize complex data",
                image:
                  "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg",
                level: "Intermediate",
                duration: "4 months",
                modules: 18,
                slug: "data-science",
              },
              {
                title: "Mobile App Development",
                description: "Build cross-platform mobile applications",
                image:
                  "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
                level: "Intermediate",
                duration: "5 months",
                modules: 20,
                slug: "mobile-app-development",
              },
              {
                title: "Machine Learning",
                description: "Implement AI algorithms and neural networks",
                image:
                  "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/07/what-is-machine-learning.jpg",
                level: "Advanced",
                duration: "8 months",
                modules: 32,
                slug: "machine-learning",
              },
              {
                title: "UI/UX Design",
                description: "Create beautiful and functional user interfaces",
                image: "https://www.images.cybrosys.com/css/assets/populor/courses-7.jpg",
                level: "Beginner to Intermediate",
                duration: "3 months",
                modules: 15,
                slug: "ui-ux-design",
              },
              {
                title: "Cybersecurity",
                description: "Protect systems and networks from digital attacks",
                image: "https://emeritus.org/in/wp-content/uploads/sites/3/2024/04/cyber-security-tech-1024x580.png",
                level: "Intermediate to Advanced",
                duration: "7 months",
                modules: 28,
                slug: "cybersecurity",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden border-purple-800/20 bg-black/40 backdrop-blur">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Level</div>
                      <div className="font-medium text-purple-400">{course.level}</div>
                    </div>
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="font-medium text-purple-400">{course.duration}</div>
                    </div>
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Modules</div>
                      <div className="font-medium text-purple-400">{course.modules}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between" asChild>
                    <Link href={`/courses/${course.slug}`}>
                      View Course Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Learning Journey?</h2>
              <p className="mb-6 text-muted-foreground">
                Join thousands of students who are already advancing their careers with StudyEarn. Get started today
                with a free account.
              </p>
              <Button size="lg" className="gap-2">
                <Zap className="h-5 w-5" />
                Create Free Account
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-64 w-64 rounded-lg border border-purple-800/20 bg-purple-900/10 backdrop-blur" />
                <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-lg border border-purple-800/20 bg-purple-900/10 backdrop-blur" />
                <div className="relative h-64 w-64 rounded-lg border border-purple-800/20 bg-black/60 p-6 backdrop-blur">
                  <div className="flex h-full flex-col items-center justify-center">
                    <BrainCircuit className="mb-4 h-12 w-12 text-purple-400" />
                    <div className="text-center text-xl font-bold">StudyEarn</div>
                    <div className="text-center text-sm text-muted-foreground">Learn Smarter, Earn Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

