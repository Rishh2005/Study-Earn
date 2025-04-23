import { Lock, Shield } from "lucide-react"

import { ApiKeySetup } from "@/components/api-key-setup"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-muted-foreground">Configure your account settings and API keys</p>
      </div>

      <Tabs defaultValue="api-keys">
        <TabsList className="bg-black/40">
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="api-keys" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>API Key Management</CardTitle>
                  <CardDescription>Configure API keys for AI features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    StudyEarn uses OpenAI's API to power its AI features. To use these features, you need to provide
                    your own OpenAI API key.
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Your API key is stored securely and is only used to make requests to the OpenAI API. We never share
                    your API key with third parties.
                  </p>
                  <div className="rounded-md bg-purple-900/10 p-4">
                    <h3 className="mb-2 font-medium">Why do I need to provide an API key?</h3>
                    <p className="text-sm text-muted-foreground">Using your own API key allows you to:</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-purple-400">•</span>
                        <span>Have full control over your API usage and billing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-purple-400">•</span>
                        <span>Access the latest AI models and features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-purple-400">•</span>
                        <span>Ensure your data privacy and security</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ApiKeySetup />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-purple-400" />
                Account Settings
              </CardTitle>
              <CardDescription>Manage your account details and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Account settings will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-400" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Security settings will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

