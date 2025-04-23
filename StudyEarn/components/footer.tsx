import Link from "next/link"
import { BrainCircuit, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-purple-800/20 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
              <span className="text-lg sm:text-xl font-bold">StudyEarn</span>
            </div>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
              An AI-powered learning platform that helps you master any subject and advance your career while earning
              rewards.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/credits" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Credits & Rewards
                </Link>
              </li>
              <li>
                <Link href="/flashcards" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Flashcards
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Quizzes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="border-purple-800/20 bg-black/40" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-purple-800/20" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} StudyEarn. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-purple-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

