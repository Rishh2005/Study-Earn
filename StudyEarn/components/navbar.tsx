import { BookOpen, ChevronDown, Code, GraduationCap, Moon, Search, Settings, Sparkles, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800/20 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-14 items-center gap-4 px-4 md:px-6">
        {/* Main Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-sm">
                Tutorials
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-purple-800/20 bg-black/95">
              <DropdownMenuItem className="focus:bg-purple-900/20">Web Development</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Data Science</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Mobile Development</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-sm">
                Exercises
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-purple-800/20 bg-black/95">
              <DropdownMenuItem className="focus:bg-purple-900/20">Practice Coding</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Quizzes</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Projects</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-sm">
                Certificates
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-purple-800/20 bg-black/95">
              <DropdownMenuItem className="focus:bg-purple-900/20">All Certificates</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">My Certificates</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Student Paths</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-center">
          <form className="w-full max-w-[500px] px-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full border-purple-800/20 bg-black/40 pl-8 h-9 text-sm"
              />
            </div>
          </form>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center gap-1 sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-purple-800/20 bg-black/95">
              <DropdownMenuItem className="focus:bg-purple-900/20">Light</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Dark</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" className="gap-2 border-purple-800/20 bg-black/40">
            <span className="flex items-center gap-1">
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
              <span className="font-medium">250 Credits</span>
            </span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="hidden lg:inline-block">Plus</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <Code className="h-4 w-4" />
            <span className="hidden lg:inline-block">Spaces</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden lg:inline-block">For Teachers</span>
          </Button>

          <Button variant="purple" size="sm" className="gap-2 bg-purple-600 hover:bg-purple-700">
            <BookOpen className="h-4 w-4" />
            <span className="hidden lg:inline-block">Get Certified</span>
          </Button>

          <Link href="/settings">
            <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Settings">
              <Settings className="h-4 w-4" />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="User account">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-purple-800/20 bg-black/95">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-purple-800/20" />
              <DropdownMenuItem className="focus:bg-purple-900/20">Profile</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">My Courses</DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-purple-900/20">Certificates</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-purple-800/20" />
              <DropdownMenuItem className="focus:bg-purple-900/20">Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

