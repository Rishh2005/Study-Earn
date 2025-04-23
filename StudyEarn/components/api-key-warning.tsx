import { AlertCircle } from "lucide-react"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function ApiKeyWarning() {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>API Key Required</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <p>To use this feature, you need to configure your OpenAI API key in the settings.</p>
        <Button asChild variant="outline" size="sm" className="w-fit">
          <Link href="/settings">Configure API Key</Link>
        </Button>
      </AlertDescription>
    </Alert>
  )
}

