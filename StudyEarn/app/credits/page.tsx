import { ArrowRight, Award, BookOpen, CheckCircle2, Gift, GraduationCap, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CreditsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Credits & Rewards</h1>
        <p className="mt-2 text-muted-foreground">
          Earn credits by completing courses and tasks, then redeem them for rewards
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-400" />
              Your Credits
            </CardTitle>
            <CardDescription>Current balance and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-purple-600 bg-black/60">
                <div className="text-center">
                  <div className="text-3xl font-bold">250</div>
                  <div className="text-xs text-muted-foreground">CREDITS</div>
                </div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold">
                  +25
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Next Reward Tier</span>
                  <span className="font-medium">250/500</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="rounded-lg bg-purple-900/20 p-3 text-center">
                <p className="text-sm">
                  You're a <span className="font-bold text-purple-400">Silver Member</span>
                </p>
                <p className="text-xs text-muted-foreground">Earn 250 more credits to reach Gold</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full gap-2">
              <Gift className="h-4 w-4" />
              Redeem Credits
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-purple-400" />
              Recent Earnings
            </CardTitle>
            <CardDescription>Credits earned in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-purple-900/10 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Completed Task</div>
                    <div className="text-xs text-muted-foreground">Math Assignment</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-purple-400">+15</div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-purple-900/10 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
                    <GraduationCap className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Course Progress</div>
                    <div className="text-xs text-muted-foreground">Web Development - Module 3</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-purple-400">+25</div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-purple-900/10 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/20">
                    <Award className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Daily Streak</div>
                    <div className="text-xs text-muted-foreground">7 Days in a Row</div>
                  </div>
                </div>
                <div className="text-sm font-bold text-purple-400">+10</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full gap-2">
              View All Activity
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-purple-400" />
              Ways to Earn
            </CardTitle>
            <CardDescription>Opportunities to earn more credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg bg-purple-900/10 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">Complete Daily Tasks</span>
                </div>
                <p className="text-xs text-muted-foreground">Earn 5-15 credits per task based on priority</p>
              </div>

              <div className="rounded-lg bg-purple-900/10 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">Course Completion</span>
                </div>
                <p className="text-xs text-muted-foreground">Earn 50-200 credits for completing courses</p>
              </div>

              <div className="rounded-lg bg-purple-900/10 p-3">
                <div className="mb-1 flex items-center gap-2">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">Maintain Streaks</span>
                </div>
                <p className="text-xs text-muted-foreground">Earn bonus credits for consistent learning</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2">
              Start Earning Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="rewards" className="mb-8">
        <TabsList className="bg-black/40">
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="courses">Premium Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="rewards" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Premium Template Bundle",
                description: "Collection of professional templates for projects",
                credits: 100,
                image: "/placeholder.svg?height=100&width=200",
                tag: "Popular",
              },
              {
                title: "1-Month Premium Subscription",
                description: "Full access to all premium features",
                credits: 300,
                image: "/placeholder.svg?height=100&width=200",
                tag: "Best Value",
              },
              {
                title: "1-on-1 Mentoring Session",
                description: "30-minute session with an expert",
                credits: 250,
                image: "/placeholder.svg?height=100&width=200",
              },
              {
                title: "Certificate Frame",
                description: "Digital frame for your certificates",
                credits: 75,
                image: "/placeholder.svg?height=100&width=200",
              },
              {
                title: "Custom Profile Badge",
                description: "Exclusive profile badge to showcase your status",
                credits: 50,
                image: "/placeholder.svg?height=100&width=200",
              },
              {
                title: "Early Access Pass",
                description: "Get early access to new courses and features",
                credits: 150,
                image: "/placeholder.svg?height=100&width=200",
                tag: "Limited",
              },
            ].map((reward, index) => (
              <Card key={index} className="overflow-hidden border-purple-800/20 bg-black/40 backdrop-blur">
                <div className="relative">
                  <img
                    src={reward.image || "/placeholder.svg"}
                    alt={reward.title}
                    className="h-32 w-full object-cover"
                  />
                  {reward.tag && <Badge className="absolute right-2 top-2 bg-purple-600">{reward.tag}</Badge>}
                </div>
                <CardHeader>
                  <CardTitle>{reward.title}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-purple-400" />
                    <span className="font-bold">{reward.credits} Credits</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Redeem
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="subscription" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
              <CardHeader>
                <CardTitle>Monthly Premium</CardTitle>
                <CardDescription>30 days of premium access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">300 Credits</div>
                  <div className="text-sm text-muted-foreground">or $9.99/month</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Unlimited course access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Advanced AI tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">No ads</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe with Credits</Button>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden border-purple-600 bg-black/40 backdrop-blur">
              <div className="absolute -right-10 top-5 rotate-45 bg-purple-600 px-10 py-1 text-xs font-bold">
                BEST VALUE
              </div>
              <CardHeader>
                <CardTitle>Annual Premium</CardTitle>
                <CardDescription>365 days of premium access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">2,500 Credits</div>
                  <div className="text-sm text-muted-foreground">or $79.99/year</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Everything in Monthly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Save 30% vs monthly</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe with Credits</Button>
              </CardFooter>
            </Card>

            <Card className="border-purple-800/20 bg-black/40 backdrop-blur">
              <CardHeader>
                <CardTitle>Lifetime Access</CardTitle>
                <CardDescription>One-time payment for unlimited access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold">10,000 Credits</div>
                  <div className="text-sm text-muted-foreground">or $299.99</div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Everything in Annual</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Lifetime updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Exclusive community access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Purchase with Credits</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Advanced Machine Learning",
                description: "Master complex ML algorithms and neural networks",
                credits: 400,
                image: "/placeholder.svg?height=100&width=200",
                level: "Advanced",
                duration: "6 months",
              },
              {
                title: "Full-Stack Web Development",
                description: "Build complete web applications from scratch",
                credits: 350,
                image: "/placeholder.svg?height=100&width=200",
                level: "Intermediate",
                duration: "4 months",
                tag: "Bestseller",
              },
              {
                title: "iOS App Development",
                description: "Create professional iOS applications with Swift",
                credits: 300,
                image: "/placeholder.svg?height=100&width=200",
                level: "Intermediate",
                duration: "3 months",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden border-purple-800/20 bg-black/40 backdrop-blur">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-32 w-full object-cover"
                  />
                  {course.tag && <Badge className="absolute right-2 top-2 bg-purple-600">{course.tag}</Badge>}
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Level: </span>
                      <span>{course.level}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration: </span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-purple-400" />
                    <span className="font-bold">{course.credits} Credits</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Enroll
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl border border-purple-800/20 bg-black/40 p-8 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Refer Friends, Earn Credits</h2>
            <p className="mb-6 text-muted-foreground">
              Invite your friends to join StudyEarn and earn 100 credits for each friend who signs up and completes
              their first course.
            </p>
            <Button className="gap-2">
              Get Referral Link
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-40 w-40 rounded-full border border-purple-800/20 bg-purple-900/10 backdrop-blur" />
              <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full border border-purple-800/20 bg-purple-900/10 backdrop-blur" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-purple-800/20 bg-black/60 backdrop-blur">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">100</div>
                  <div className="text-sm">CREDITS PER REFERRAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

