"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"
import { AlertCircle } from "lucide-react"

export default function SettingsPage() {
  const { user } = useAuth()
  const { toast } = useToast()

  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [emailNotifications, setEmailNotifications] = useState({
    appointments: true,
    reminders: true,
    updates: false,
    marketing: false,
  })

  const [privacySettings, setPrivacySettings] = useState({
    anonymousPosting: true,
    showProfileInCommunity: false,
    shareProgressWithTherapist: true,
    allowDataCollection: true,
  })

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, this would make an API call to update the profile
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
      className: "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800",
    })
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your new passwords match.",
        variant: "destructive",
      })
      return
    }

    if (newPassword === currentPassword) {
      toast({
        title: "Password unchanged",
        description: "Your new password must be different from your current password.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would make an API call to change the password
    toast({
      title: "Password changed",
      description: "Your password has been changed successfully.",
      className: "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800",
    })

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleUpdateNotifications = () => {
    // In a real app, this would make an API call to update notification settings
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been saved.",
      className: "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800",
    })
  }

  const handleUpdatePrivacy = () => {
    // In a real app, this would make an API call to update privacy settings
    toast({
      title: "Privacy settings updated",
      description: "Your privacy preferences have been saved.",
      className: "bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800",
    })
  }

  return (
    <div className="container py-6 md:py-10">
      <h1 className="mb-6 text-3xl font-bold">Settings</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdateProfile}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <form onSubmit={handleChangePassword}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Change Password</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="appointments">Appointment Reminders</Label>
                    <p className="text-sm text-muted-foreground">Receive email reminders about upcoming appointments</p>
                  </div>
                  <Switch
                    id="appointments"
                    checked={emailNotifications.appointments}
                    onCheckedChange={(checked) =>
                      setEmailNotifications({ ...emailNotifications, appointments: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reminders">Daily Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive daily reminders to log your mood and complete exercises
                    </p>
                  </div>
                  <Switch
                    id="reminders"
                    checked={emailNotifications.reminders}
                    onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, reminders: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="updates">Platform Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about new features and updates
                    </p>
                  </div>
                  <Switch
                    id="updates"
                    checked={emailNotifications.updates}
                    onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, updates: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive promotional emails and special offers</p>
                  </div>
                  <Switch
                    id="marketing"
                    checked={emailNotifications.marketing}
                    onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, marketing: checked })}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpdateNotifications}>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control how your information is used and shared</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="anonymous-posting">Anonymous Posting</Label>
                    <p className="text-sm text-muted-foreground">Post anonymously in the community forum by default</p>
                  </div>
                  <Switch
                    id="anonymous-posting"
                    checked={privacySettings.anonymousPosting}
                    onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, anonymousPosting: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-profile">Show Profile in Community</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow other users to see your profile in the community forum
                    </p>
                  </div>
                  <Switch
                    id="show-profile"
                    checked={privacySettings.showProfileInCommunity}
                    onCheckedChange={(checked) =>
                      setPrivacySettings({ ...privacySettings, showProfileInCommunity: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="share-progress">Share Progress with Therapist</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow your therapist to view your mood tracking and assessment data
                    </p>
                  </div>
                  <Switch
                    id="share-progress"
                    checked={privacySettings.shareProgressWithTherapist}
                    onCheckedChange={(checked) =>
                      setPrivacySettings({ ...privacySettings, shareProgressWithTherapist: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-collection">Allow Data Collection</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow anonymous data collection to improve our services
                    </p>
                  </div>
                  <Switch
                    id="data-collection"
                    checked={privacySettings.allowDataCollection}
                    onCheckedChange={(checked) =>
                      setPrivacySettings({ ...privacySettings, allowDataCollection: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-md border p-3 bg-blue-50 dark:bg-blue-900">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Your privacy is important to us. We never share your personal information with third parties without
                  your consent.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpdatePrivacy}>Save Privacy Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

