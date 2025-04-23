"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  BrainCircuit,
  Calendar,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  FileLineChartIcon as FlowChart,
  GraduationCapIcon as Graduation,
  Home,
  Lightbulb,
  Menu,
  Network,
  Route,
  Settings,
  Star,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Notes Maker",
    href: "/notes",
    icon: FileText,
  },
  {
    title: "Course Enrollment",
    href: "/courses",
    icon: Graduation,
  },
  {
    title: "AI ER Diagram Maker",
    href: "/er-diagram",
    icon: Network,
  },
  {
    title: "AI Roadmap Maker",
    href: "/roadmap",
    icon: Route,
  },
  {
    title: "Daily Tasks & To-Do",
    href: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "AI Flowchart Maker",
    href: "/flowchart",
    icon: FlowChart,
  },
  {
    title: "Flashcards",
    href: "/flashcards",
    icon: ClipboardList,
  },
  {
    title: "Quizzes",
    href: "/quizzes",
    icon: BookOpen,
  },
  {
    title: "Study Planner",
    href: "/planner",
    icon: Calendar,
  },
  {
    title: "Study Groups",
    href: "/groups",
    icon: Users,
  },
  {
    title: "AI Recommendations",
    href: "/recommendations",
    icon: Lightbulb,
  },
  {
    title: "Credits & Rewards",
    href: "/credits",
    icon: Star,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[80vw] max-w-[280px] sm:w-72 border-purple-800/20 bg-black/95 p-0">
          <div className="flex h-14 items-center border-b border-purple-800/20 px-4">
            <BrainCircuit className="mr-2 h-6 w-6 text-purple-500" />
            <span className="font-bold">StudyEarn</span>
          </div>
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="px-2 py-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-purple-500 text-white"
                        : "hover:bg-purple-900/20 hover:text-purple-400",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-20 hidden flex-col border-r border-purple-800/20 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60 transition-all duration-300 md:flex",
          isCollapsed ? "w-[70px]" : "w-[240px]",
        )}
      >
        <div className="flex h-14 items-center border-b border-purple-800/20 px-4">
          <BrainCircuit className="mr-2 h-6 w-6 text-purple-500" />
          {!isCollapsed && <span className="font-bold">StudyEarn</span>}
        </div>
        <ScrollArea className="flex-1">
          <div className="px-2 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-900/20 hover:text-purple-400",
                  )}
                  title={isCollapsed ? item.title : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </ScrollArea>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 sm:-right-4 top-20 hidden h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-purple-800/20 bg-black md:flex"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          ) : (
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          )}
          <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
        </Button>
      </div>
    </>
  )
}

