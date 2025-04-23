import { Award, BookOpen, BrainCircuit, GraduationCap, Lightbulb, Mail, MapPin, Phone, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <div className="mb-4 inline-block rounded-full bg-purple-900/20 px-4 py-1.5 text-sm font-medium text-purple-400">
          About StudyEarn
        </div>
        <h1 className="mb-4 text-4xl font-bold">Revolutionizing Education with AI</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          StudyEarn is an innovative learning platform that combines artificial intelligence with proven educational
          methods to help students master any subject while earning rewards.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
            <Lightbulb className="h-6 w-6 text-purple-400" />
          </div>
          <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            To democratize education by providing personalized, AI-powered learning experiences that adapt to each
            student's unique needs, making quality education accessible to everyone, everywhere.
          </p>
        </div>

        <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
            <GraduationCap className="h-6 w-6 text-purple-400" />
          </div>
          <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground">
            To create a world where learning is engaging, rewarding, and tailored to individual needs, empowering people
            to achieve their full potential through continuous education and skill development.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">How StudyEarn Works</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our platform combines cutting-edge AI technology with gamification to create an engaging and effective
            learning experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <BrainCircuit className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>AI-Powered Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes your learning style, strengths, and weaknesses to create personalized learning paths
                that adapt in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <Star className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Earn Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete courses, tasks, and quizzes to earn credits that can be redeemed for subscriptions, premium
                courses, and rewards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Interactive Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use our suite of AI-powered tools like flashcards, quizzes, ER diagrams, and roadmaps to enhance your
                learning experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Get Certified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Earn industry-recognized certifications that validate your skills and boost your career prospects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A diverse group of educators, technologists, and lifelong learners dedicated to transforming education.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Founder & CEO",
              bio: "Former professor with a Ph.D. in Educational Technology, passionate about making quality education accessible to all.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              bio: "AI researcher and engineer with 15+ years of experience developing adaptive learning systems.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Priya Patel",
              role: "Chief Learning Officer",
              bio: "Educational psychologist specializing in cognitive learning strategies and curriculum development.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "James Wilson",
              role: "Head of Product",
              bio: "Former edtech product leader with a passion for creating intuitive and engaging user experiences.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Elena Rodriguez",
              role: "Content Director",
              bio: "Curriculum expert with experience developing educational content for diverse learning needs.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "David Kim",
              role: "Head of Partnerships",
              bio: "Building relationships with educational institutions and industry partners to expand our impact.",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <Card key={index} className="overflow-hidden border-purple-800/20 bg-black/40 backdrop-blur">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">What Our Users Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from students who have transformed their learning journey with StudyEarn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Alex T.",
              role: "Software Developer",
              quote:
                "StudyEarn's AI-powered flashcards and quizzes helped me master Python programming in half the time it would have taken with traditional methods.",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Maria G.",
              role: "Medical Student",
              quote:
                "The ability to create custom study materials and earn credits while learning has made studying for medical exams both effective and rewarding.",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Jamal K.",
              role: "Business Analyst",
              quote:
                "I used my earned credits to access premium courses that helped me transition to a data science role. Best investment in my career!",
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="border-purple-800/20 bg-black/40 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mb-16 rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">500K+</div>
            <div className="mt-2 text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">1000+</div>
            <div className="mt-2 text-sm text-muted-foreground">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">50M+</div>
            <div className="mt-2 text-sm text-muted-foreground">Credits Earned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">95%</div>
            <div className="mt-2 text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">Find answers to common questions about StudyEarn.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/40">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="credits">Credits & Rewards</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-6 space-y-4">
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">What is StudyEarn?</h3>
              <p className="text-sm text-muted-foreground">
                StudyEarn is an AI-powered learning platform that helps you master any subject while earning credits
                that can be redeemed for rewards, subscriptions, and premium courses.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">How does the AI personalization work?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes your learning patterns, strengths, and areas for improvement to create personalized
                learning paths and recommend content that's most relevant to your goals.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">Is StudyEarn available on mobile devices?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, StudyEarn is fully responsive and works on all devices. We also have dedicated mobile apps for iOS
                and Android for learning on the go.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="credits" className="mt-6 space-y-4">
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">How do I earn credits?</h3>
              <p className="text-sm text-muted-foreground">
                You can earn credits by completing courses, finishing daily tasks, taking quizzes, maintaining learning
                streaks, and referring friends to the platform.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">What can I redeem credits for?</h3>
              <p className="text-sm text-muted-foreground">
                Credits can be redeemed for premium subscriptions, exclusive courses, digital rewards like templates and
                profile badges, and even one-on-one mentoring sessions.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">Do credits expire?</h3>
              <p className="text-sm text-muted-foreground">
                Credits earned through regular learning activities don't expire. However, promotional credits from
                special events may have an expiration date, which will be clearly indicated.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="mt-6 space-y-4">
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">Are the courses self-paced?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, all courses on StudyEarn are self-paced, allowing you to learn at your own speed and according to
                your own schedule.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">Are the certificates recognized by employers?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, our certificates are industry-recognized and valued by employers. We partner with leading companies
                and educational institutions to ensure our content meets industry standards.
              </p>
            </div>
            <div className="rounded-lg border border-purple-800/20 bg-black/20 p-4">
              <h3 className="mb-2 font-medium">Can I access course content offline?</h3>
              <p className="text-sm text-muted-foreground">
                Premium subscribers can download course materials for offline access through our mobile apps, making it
                convenient to learn even without an internet connection.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Get in Touch</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For general inquiries, support, or partnership opportunities.
              </p>
              <a href="mailto:info@studyearn.com" className="mt-2 block font-medium text-purple-400">
                info@studyearn.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Available Monday to Friday, 9am to 5pm EST.</p>
              <a href="tel:+1-800-123-4567" className="mt-2 block font-medium text-purple-400">
                +1-800-123-4567
              </a>
            </CardContent>
          </Card>

          <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900/20">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <CardTitle>Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Our headquarters is located in the heart of the city.</p>
              <address className="mt-2 not-italic font-medium text-purple-400">
                123 Learning Lane
                <br />
                San Francisco, CA 94103
              </address>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Learning Experience?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join thousands of students who are already advancing their careers with StudyEarn. Get started today with a
            free account.
          </p>
          <Button size="lg" className="gap-2">
            <Zap className="h-5 w-5" />
            Start Learning Now
          </Button>
        </div>
      </div>
    </div>
  )
}

