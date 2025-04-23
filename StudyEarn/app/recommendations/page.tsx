import { CourseRecommendations } from "@/components/course-recommendations"

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Free Course Recommendations</h1>
        <p className="mt-2 text-muted-foreground">
          Discover high-quality free courses tailored to your interests and skill level
        </p>
      </div>
      <CourseRecommendations />
    </div>
  )
}

