import { ArrowLeft, BookOpen, Calendar, Clock, FileText, GraduationCap, Star, Users } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Course data - in a real app, this would come from a database or API
const courses = {
  "web-development": {
    title: "Web Development",
    description: "Master modern web technologies and frameworks",
    image: "https://sjc.microlink.io/9c-9fa7HvUGRZhOsx4ukd47KD2XpagSYWPtVuDomQrbB3M3_ssGPJl32pZHGKjxveHMm8GGUXBfsPs8w1vWy3g.jpeg",
    level: "Beginner to Advanced",
    duration: "6 months",
    modules: 24,
    rating: 4.8,
    students: 12453,
    instructor: "Sarah Johnson",
    price: 499,
    credits: 200,
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    overview:
      "This comprehensive course covers everything you need to become a full-stack web developer. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks and databases, you'll learn to build complete, responsive web applications from scratch.",
    curriculum: [
      {
        title: "Module 1: HTML & CSS Fundamentals",
        lessons: ["Introduction to HTML", "CSS Styling", "Responsive Design", "CSS Frameworks"],
      },
      {
        title: "Module 2: JavaScript Essentials",
        lessons: ["JavaScript Syntax", "DOM Manipulation", "Event Handling", "Asynchronous JavaScript"],
      },
      {
        title: "Module 3: Front-End Frameworks",
        lessons: ["Introduction to React", "State Management", "Routing", "Building a React App"],
      },
      {
        title: "Module 4: Back-End Development",
        lessons: ["Node.js Basics", "Express Framework", "RESTful APIs", "Database Integration"],
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    description: "Learn to analyze and visualize complex data",
    image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/DATA%20SCIENCE%20MODEL.jpg",
    level: "Intermediate",
    duration: "4 months",
    modules: 18,
    rating: 4.9,
    students: 8765,
    instructor: "Michael Chen",
    price: 599,
    credits: 250,
    tags: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
    overview:
      "This course provides a comprehensive introduction to data science, covering statistical analysis, data visualization, and machine learning. You'll learn to extract insights from complex datasets and build predictive models using Python and popular data science libraries.",
    curriculum: [
      {
        title: "Module 1: Python for Data Science",
        lessons: ["Python Basics", "NumPy & Pandas", "Data Manipulation", "Data Cleaning"],
      },
      {
        title: "Module 2: Data Visualization",
        lessons: ["Matplotlib", "Seaborn", "Interactive Visualizations", "Dashboard Creation"],
      },
      {
        title: "Module 3: Statistical Analysis",
        lessons: ["Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing", "Regression Analysis"],
      },
      {
        title: "Module 4: Machine Learning Fundamentals",
        lessons: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
      },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications",
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    level: "Intermediate",
    duration: "5 months",
    modules: 20,
    rating: 4.7,
    students: 7432,
    instructor: "Jessica Lee",
    price: 549,
    credits: 220,
    tags: ["React Native", "Flutter", "iOS", "Android"],
    overview:
      "Learn to build native and cross-platform mobile applications for iOS and Android. This course covers modern frameworks like React Native and Flutter, allowing you to create beautiful, responsive mobile apps with a single codebase.",
    curriculum: [
      {
        title: "Module 1: Mobile Development Fundamentals",
        lessons: ["Mobile UI/UX Principles", "App Architecture", "Navigation Patterns", "Responsive Design"],
      },
      {
        title: "Module 2: React Native",
        lessons: ["Setting Up React Native", "Components & Props", "State Management", "Native Modules"],
      },
      {
        title: "Module 3: Flutter Development",
        lessons: ["Dart Programming", "Flutter Widgets", "State Management", "Building UI"],
      },
      {
        title: "Module 4: App Deployment",
        lessons: ["App Store Submission", "Google Play Store", "CI/CD for Mobile", "App Monetization"],
      },
    ],
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Implement AI algorithms and neural networks",
    image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/07/what-is-machine-learning.jpg",
    level: "Advanced",
    duration: "8 months",
    modules: 32,
    rating: 4.9,
    students: 6234,
    instructor: "Dr. Robert Kim",
    price: 799,
    credits: 320,
    tags: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    overview:
      "Dive deep into machine learning algorithms and neural networks. This advanced course covers everything from traditional ML algorithms to deep learning with TensorFlow and PyTorch. You'll build real-world AI applications and learn to deploy models to production.",
    curriculum: [
      {
        title: "Module 1: Machine Learning Foundations",
        lessons: ["Supervised vs Unsupervised Learning", "Model Evaluation", "Feature Engineering", "Ensemble Methods"],
      },
      {
        title: "Module 2: Neural Networks",
        lessons: ["Perceptrons", "Backpropagation", "Activation Functions", "Optimization Algorithms"],
      },
      {
        title: "Module 3: Deep Learning",
        lessons: [
          "TensorFlow Basics",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks",
          "Transfer Learning",
        ],
      },
      {
        title: "Module 4: Advanced Topics",
        lessons: ["Generative Models", "Reinforcement Learning", "Natural Language Processing", "Computer Vision"],
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Create beautiful and functional user interfaces",
    image: "https://www.images.cybrosys.com/css/assets/populor/courses-7.jpg",
    level: "Beginner to Intermediate",
    duration: "3 months",
    modules: 15,
    rating: 4.8,
    students: 5432,
    instructor: "Emma Rodriguez",
    price: 399,
    credits: 160,
    tags: ["Figma", "User Research", "Wireframing", "Prototyping"],
    overview:
      "Learn the principles of user interface and user experience design. This course covers the entire design process from user research and wireframing to creating high-fidelity prototypes and design systems. You'll master industry-standard tools like Figma and learn to create intuitive, accessible designs.",
    curriculum: [
      {
        title: "Module 1: Design Fundamentals",
        lessons: ["Design Principles", "Color Theory", "Typography", "Layout & Composition"],
      },
      {
        title: "Module 2: User Research",
        lessons: ["User Personas", "User Journeys", "Usability Testing", "Competitive Analysis"],
      },
      {
        title: "Module 3: Wireframing & Prototyping",
        lessons: ["Sketching", "Low-Fidelity Wireframes", "Interactive Prototypes", "User Testing"],
      },
      {
        title: "Module 4: UI Design with Figma",
        lessons: ["Figma Basics", "Component Design", "Design Systems", "Responsive Design"],
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protect systems and networks from digital attacks",
    image: "https://emeritus.org/in/wp-content/uploads/sites/3/2024/04/cyber-security-tech-1024x580.png",
    level: "Intermediate to Advanced",
    duration: "7 months",
    modules: 28,
    rating: 4.7,
    students: 4321,
    instructor: "David Wilson",
    price: 699,
    credits: 280,
    tags: ["Network Security", "Ethical Hacking", "Cryptography", "Security Auditing"],
    overview:
      "Develop the skills to protect organizations from cyber threats. This comprehensive cybersecurity course covers network security, ethical hacking, cryptography, and security auditing. You'll learn to identify vulnerabilities, implement security measures, and respond to security incidents.",
    curriculum: [
      {
        title: "Module 1: Security Fundamentals",
        lessons: ["Security Principles", "Threat Landscape", "Security Controls", "Risk Management"],
      },
      {
        title: "Module 2: Network Security",
        lessons: ["Network Protocols", "Firewalls & IDS", "VPNs", "Wireless Security"],
      },
      {
        title: "Module 3: Ethical Hacking",
        lessons: ["Reconnaissance", "Vulnerability Assessment", "Exploitation", "Post-Exploitation"],
      },
      {
        title: "Module 4: Security Operations",
        lessons: ["Incident Response", "Digital Forensics", "Security Monitoring", "Threat Intelligence"],
      },
    ],
  },
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const course = courses[slug as keyof typeof courses]

  if (!course) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
        <p className="mt-4 text-muted-foreground">The course you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-8">
          <Link href="/courses">Browse All Courses</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-400">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-6 overflow-hidden rounded-xl">
            <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-auto w-full object-cover" />
          </div>

          <h1 className="mb-2 text-3xl font-bold">{course.title}</h1>
          <p className="mb-6 text-lg text-muted-foreground">{course.description}</p>

          <div className="mb-8 flex flex-wrap gap-4">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-purple-900/10">
                {tag}
              </Badge>
            ))}
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="bg-black/40">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.overview}</p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-purple-900/10 p-4">
                      <h3 className="mb-2 font-medium">What You'll Learn</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Build professional {course.title.toLowerCase()} projects from scratch</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Master industry-standard tools and frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Implement best practices and modern techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Prepare for real-world career opportunities</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-purple-900/10 p-4">
                      <h3 className="mb-2 font-medium">Requirements</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Basic computer skills and internet access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>
                            {course.level.includes("Beginner")
                              ? "No prior experience needed"
                              : "Some prior knowledge recommended"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Dedication to complete all course modules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 text-purple-400">•</span>
                          <span>Willingness to practice and apply concepts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>
                    {course.modules} modules • {course.duration} • {course.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="rounded-lg border border-purple-800/20 p-4">
                        <h3 className="mb-3 font-medium">{module.title}</h3>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center gap-3 rounded-md p-2 hover:bg-purple-900/10"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
                                <FileText className="h-4 w-4 text-purple-400" />
                              </div>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="instructor" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meet Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-6 md:flex-row">
                    <div className="h-32 w-32 overflow-hidden rounded-full">
                      <img
                        src="/placeholder.svg?height=128&width=128"
                        alt={course.instructor}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium">{course.instructor}</h3>
                      <p className="mb-4 text-muted-foreground">
                        Expert in {course.title} with over 10 years of industry experience. Passionate about teaching
                        and helping students master complex concepts through practical, hands-on learning.
                      </p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4 text-purple-400" />
                          <span className="text-sm">{Math.floor(Math.random() * 50) + 10} Courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-purple-400" />
                          <span className="text-sm">{Math.floor(Math.random() * 100000) + 50000} Students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-purple-400" />
                          <span className="text-sm">{(Math.random() * 0.5 + 4.5).toFixed(1)} Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews</CardTitle>
                  <CardDescription>Based on {course.students.toLocaleString()} students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold">{course.rating}</div>
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">Course Rating</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage =
                          rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 1.5 : 0.5
                        return (
                          <div key={rating} className="mb-1 flex items-center gap-2">
                            <div className="flex w-20 items-center justify-end gap-1">
                              <span className="text-sm">{rating}</span>
                              <Star className="h-3 w-3 fill-current text-yellow-400" />
                            </div>
                            <Progress value={percentage} className="h-2 flex-1" />
                            <span className="w-12 text-right text-xs text-muted-foreground">{percentage}%</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: "Alex Johnson",
                        rating: 5,
                        date: "2 months ago",
                        comment:
                          "This course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand, and the projects are practical and relevant to real-world scenarios.",
                      },
                      {
                        name: "Sarah Miller",
                        rating: 5,
                        date: "3 months ago",
                        comment:
                          "I've taken several courses on this topic, and this is by far the best. The curriculum is well-structured, and the instructor is incredibly knowledgeable and responsive to questions.",
                      },
                      {
                        name: "Michael Chen",
                        rating: 4,
                        date: "1 month ago",
                        comment:
                          "Great course with lots of practical examples. I would have liked more advanced topics, but overall it provided a solid foundation that I could build upon.",
                      },
                    ].map((review, index) => (
                      <div key={index} className="rounded-lg border border-purple-800/20 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="mb-2 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-current text-yellow-400" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-20 border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle>Enroll in this Course</CardTitle>
              <CardDescription>Gain the skills you need to succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-2xl font-bold">${course.price}</div>
                  <Badge variant="outline" className="bg-purple-900/20">
                    {course.credits} Credits
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">Lifetime access to all course materials</div>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-purple-400" />
                  <span>{course.modules} modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>{course.duration} of content</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span>Start anytime, learn at your own pace</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Certificate of completion</span>
                </div>
              </div>

              <Button className="w-full gap-2">Enroll Now</Button>

              <div className="mt-4 text-center text-xs text-muted-foreground">30-day money-back guarantee</div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button variant="outline" className="w-full">
                Try for Free
              </Button>
              <div className="mt-4 text-center text-xs text-muted-foreground">
                Join {course.students.toLocaleString()} students already enrolled
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

