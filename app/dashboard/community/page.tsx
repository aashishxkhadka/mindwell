"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Heart, Flag, Plus, Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock forum posts
const initialPosts = [
  {
    id: "p1",
    title: "Coping with work stress",
    content:
      "I've been experiencing a lot of stress at work lately. My job demands have increased, and I'm finding it hard to maintain a healthy work-life balance. Does anyone have any strategies that have worked for them?",
    author: "Anonymous",
    date: "2 days ago",
    likes: 15,
    replies: 8,
    tags: ["Stress", "Work"],
  },
  {
    id: "p2",
    title: "Meditation techniques for beginners",
    content:
      "I've been trying to start a meditation practice to help with my anxiety, but I'm finding it difficult to stay focused. Any tips for beginners?",
    author: "MindfulSeeker",
    date: "5 days ago",
    likes: 32,
    replies: 14,
    tags: ["Meditation", "Anxiety"],
  },
  {
    id: "p3",
    title: "Dealing with social anxiety",
    content:
      "I struggle with social anxiety and find it difficult to participate in group settings or social events. It's affecting my personal and professional life. Has anyone overcome this? What helped you?",
    author: "Anonymous",
    date: "1 week ago",
    likes: 27,
    replies: 12,
    tags: ["Social Anxiety"],
  },
  {
    id: "p4",
    title: "Depression and motivation",
    content:
      "I've been diagnosed with depression and one of my biggest struggles is finding motivation to do even basic tasks. Everything feels overwhelming. How do you push through when you're feeling this way?",
    author: "HopingForBetter",
    date: "2 weeks ago",
    likes: 41,
    replies: 23,
    tags: ["Depression", "Motivation"],
  },
]

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts)
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [newPostTags, setNewPostTags] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newPostTitle.trim() || !newPostContent.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both a title and content for your post.",
        variant: "destructive",
      })
      return
    }

    const newPost = {
      id: `p${Date.now()}`,
      title: newPostTitle,
      content: newPostContent,
      author: isAnonymous ? "Anonymous" : "User", // In a real app, this would be the user's username or "Anonymous"
      date: "Just now",
      likes: 0,
      replies: 0,
      tags: newPostTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    }

    setPosts([newPost, ...posts])
    setShowNewPostForm(false)
    setNewPostTitle("")
    setNewPostContent("")
    setNewPostTags("")

    toast({
      title: "Post created",
      description: "Your post has been published to the community.",
    })
  }

  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query))
    )
  })

  return (
    <div className="container py-6 md:py-10">
      <h1 className="mb-6 text-3xl font-bold">Community Forum</h1>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setShowNewPostForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {showNewPostForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create a New Post</CardTitle>
            <CardDescription>Share your thoughts, questions, or experiences with the community</CardDescription>
          </CardHeader>
          <form onSubmit={handleCreatePost}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  placeholder="Enter a title for your post"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">
                  Content
                </label>
                <Textarea
                  id="content"
                  placeholder="Share your thoughts..."
                  className="min-h-[150px]"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  Tags (comma separated)
                </label>
                <Input
                  id="tags"
                  placeholder="e.g., Anxiety, Depression, Self-care"
                  value={newPostTags}
                  onChange={(e) => setNewPostTags(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="anonymous" className="text-sm font-medium">
                  Post anonymously
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => setShowNewPostForm(false)}>
                Cancel
              </Button>
              <Button type="submit">Publish Post</Button>
            </CardFooter>
          </form>
        </Card>
      )}

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="depression">Depression</TabsTrigger>
          <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
          <TabsTrigger value="stress">Stress</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>{post.author === "Anonymous" ? "A" : post.author[0]}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.replies}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Flag className="h-4 w-4" />
                    <span>Report</span>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your search.</p>
            </div>
          )}
        </TabsContent>

        {/* Similar content for other tabs */}
      </Tabs>

      <div className="mt-8 rounded-lg border p-6">
        <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be respectful and supportive of other community members.</li>
          <li>Do not share personally identifiable information.</li>
          <li>In crisis situations, please contact emergency services or a crisis helpline.</li>
          <li>Report any content that violates our guidelines.</li>
          <li>Remember that this forum is not a substitute for professional mental health care.</li>
        </ul>
      </div>
    </div>
  )
}

