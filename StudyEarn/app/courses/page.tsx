import { ArrowRight, BookOpen, Filter, Search, SortAsc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, and JavaScript to build modern websites",
      image:
        "https://sjc.microlink.io/9c-9fa7HvUGRZhOsx4ukd47KD2XpagSYWPtVuDomQrbB3M3_ssGPJl32pZHGKjxveHMm8GGUXBfsPs8w1vWy3g.jpeg",
      level: "Beginner",
      duration: "3 months",
      modules: 12,
      rating: 4.8,
      students: 12453,
      tags: ["HTML", "CSS", "JavaScript"],
      slug: "web-development",
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master Python programming for data analysis and visualization",
      image:
        "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg",
      level: "Intermediate",
      duration: "4 months",
      modules: 16,
      rating: 4.9,
      students: 8765,
      tags: ["Python", "Data Science", "Analytics"],
      slug: "data-science",
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Introduction to machine learning algorithms and applications",
      image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/07/what-is-machine-learning.jpg",
      level: "Advanced",
      duration: "6 months",
      modules: 24,
      rating: 4.7,
      students: 6234,
      tags: ["ML", "AI", "Python"],
      slug: "machine-learning",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build modern mobile applications with React Native",
      image:
        "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
      level: "Intermediate",
      duration: "3 months",
      modules: 14,
      rating: 4.8,
      students: 9876,
      tags: ["React Native", "JavaScript", "Mobile"],
      slug: "mobile-app-development",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Create beautiful and functional user interfaces",
      image: "https://www.images.cybrosys.com/css/assets/populor/courses-7.jpg",
      level: "Beginner",
      duration: "2 months",
      modules: 10,
      rating: 4.7,
      students: 5432,
      tags: ["UI", "UX", "Design"],
      slug: "ui-ux-design",
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks",
      image: "https://emeritus.org/in/wp-content/uploads/sites/3/2024/04/cyber-security-tech-1024x580.png",
      level: "Advanced",
      duration: "5 months",
      modules: 20,
      rating: 4.9,
      students: 7654,
      tags: ["Security", "Networking", "Ethical Hacking"],
      slug: "cybersecurity",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Course Enrollment</h1>
        <p className="mt-2 text-muted-foreground">Browse and enroll in our extensive catalog of courses</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full border-purple-800/20 bg-black/40 pl-8"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="outline" className="gap-2">
          <SortAsc className="h-4 w-4" />
          Sort
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-black/40">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="popular">Most Popular</TabsTrigger>
          <TabsTrigger value="new">Newly Added</TabsTrigger>
          <TabsTrigger value="free">Free Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-purple-800/20 bg-black/40 backdrop-blur">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-purple-900/20">
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-purple-900/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="font-medium text-purple-400">{course.duration}</div>
                    </div>
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Modules</div>
                      <div className="font-medium text-purple-400">{course.modules}</div>
                    </div>
                    <div className="rounded-md bg-purple-900/20 p-2 text-center">
                      <div className="text-xs text-muted-foreground">Rating</div>
                      <div className="font-medium text-purple-400">{course.rating}/5</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-md bg-purple-900/20 p-2">
                    <div className="text-xs text-muted-foreground">Complete to earn:</div>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <svg
                        width="14"
                        height="14"
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
                      <span>{course.id * 50} Credits</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">{course.students.toLocaleString()} students</div>
                  <Button className="gap-2" asChild>
                    <Link href={`/courses/${course.slug}`}>
                      Enroll Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="popular">
          <div className="rounded-lg border border-purple-800/20 bg-black/40 p-8 text-center backdrop-blur">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-medium">Most Popular Courses</h3>
            <p className="text-muted-foreground">Discover our highest-rated and most enrolled courses.</p>
          </div>
        </TabsContent>
        <TabsContent value="new">
          <div className="rounded-lg border border-purple-800/20 bg-black/40 p-8 text-center backdrop-blur">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-medium">Newly Added Courses</h3>
            <p className="text-muted-foreground">Explore our latest course offerings and stay ahead of the curve.</p>
          </div>
        </TabsContent>
        <TabsContent value="free">
          <div className="rounded-lg border border-purple-800/20 bg-black/40 p-8 text-center backdrop-blur">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-medium">Free Courses</h3>
            <p className="text-muted-foreground">Start learning with our collection of free courses.</p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Not sure where to start?</h2>
            <p className="mb-6 text-muted-foreground">
              Take our skill assessment test and get personalized course recommendations based on your current knowledge
              and career goals.
            </p>
            <Button className="gap-2">
              Take Skill Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 rounded-full border border-purple-800/20 bg-purple-900/10 p-4">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-b-2 border-t-2 border-purple-500"></div>
              <div className="absolute inset-2 rounded-full border border-purple-800/20 bg-black/60 backdrop-blur"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

