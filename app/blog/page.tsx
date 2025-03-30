import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

// Mock blog data
const blogPosts = [
  {
    id: "mindfulness-101",
    title: "Mindfulness 101: A Beginner's Guide to Present Moment Awareness",
    excerpt:
      "Learn the basics of mindfulness meditation and how it can help reduce stress and anxiety in your daily life.",
    date: "May 15, 2025",
    author: "Dr. Aashish Khadka",
    category: "Meditation",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "depression-signs",
    title: "Recognizing the Early Signs of Depression",
    excerpt:
      "Understanding the early warning signs of depression can help you seek help before symptoms become severe.",
    date: "May 10, 2025",
    author: "Dr. Sumana Shrestha",
    category: "Depression",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "anxiety-coping",
    title: "5 Effective Coping Strategies for Anxiety",
    excerpt: "Practical techniques to help manage anxiety symptoms and regain control during stressful situations.",
    date: "May 5, 2025",
    author: "Dr. Saran Shrestha",
    category: "Anxiety",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "sleep-mental-health",
    title: "The Connection Between Sleep and Mental Health",
    excerpt: "How quality sleep affects your mental well-being and tips for improving your sleep hygiene.",
    date: "April 28, 2025",
    author: "Dr. Sabita Upadhya",
    category: "Sleep",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "self-care-routine",
    title: "Building a Self-Care Routine That Actually Works",
    excerpt: "Practical advice for creating a sustainable self-care routine that supports your mental health.",
    date: "April 20, 2025",
    author: "Dr. Aashish Khadka",
    category: "Self-Care",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "social-media-mental-health",
    title: "How Social Media Affects Your Mental Health",
    excerpt: "Understanding the impact of social media on your mental well-being and strategies for healthier usage.",
    date: "April 15, 2025",
    author: "Dr. Sumana Shrestha",
    category: "Digital Wellness",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="container mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mental Health Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Insights, tips, and resources to support your mental well-being journey
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

