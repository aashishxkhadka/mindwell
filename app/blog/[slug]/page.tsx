import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

// Mock blog data - in a real app, this would come from a database or CMS
const blogPosts = {
  "mindfulness-101": {
    title: "Mindfulness 101: A Beginner's Guide to Present Moment Awareness",
    content: `
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of purposely focusing your attention on the present moment—and accepting it without judgment. It's about being fully engaged with whatever you're doing at the moment, free from distraction or judgment, and aware of your thoughts and feelings without getting caught up in them.</p>
      
      <h2>The Benefits of Mindfulness</h2>
      <p>Research has shown that mindfulness practices can help reduce stress, anxiety, and depression. Regular mindfulness meditation can lead to:</p>
      <ul>
        <li>Reduced rumination (dwelling on negative thoughts)</li>
        <li>Decreased stress and anxiety</li>
        <li>Improved focus and concentration</li>
        <li>Better emotional regulation</li>
        <li>Enhanced self-awareness</li>
        <li>Improved sleep quality</li>
      </ul>
      
      <h2>Simple Mindfulness Exercises for Beginners</h2>
      <h3>1. Mindful Breathing</h3>
      <p>Find a quiet place to sit comfortably. Close your eyes and focus your attention on your breath. Notice the sensation of air moving in and out of your body. When your mind wanders (and it will), gently bring your focus back to your breath without judgment.</p>
      
      <h3>2. Body Scan Meditation</h3>
      <p>Lie down in a comfortable position. Starting from your toes and moving up to your head, bring awareness to each part of your body. Notice any sensations, tension, or discomfort without trying to change anything.</p>
      
      <h3>3. Mindful Observation</h3>
      <p>Choose an object in your environment (like a flower, cloud, or even a pencil) and focus all your attention on it. Observe it as if you're seeing it for the first time, noticing its colors, textures, and features.</p>
      
      <h2>Incorporating Mindfulness Into Daily Life</h2>
      <p>You don't need to meditate for hours to practice mindfulness. Here are some ways to bring mindfulness into your everyday activities:</p>
      <ul>
        <li>Mindful eating: Pay full attention to the experience of eating, noticing flavors, textures, and sensations.</li>
        <li>Mindful walking: Focus on the sensation of your feet touching the ground, the rhythm of your breath, and the feeling of air on your skin.</li>
        <li>Mindful listening: Give your full attention when someone is speaking, without planning what you'll say next.</li>
        <li>Mindful breaks: Take short breaks throughout the day to check in with yourself and notice how you're feeling.</li>
      </ul>
      
      <h2>Common Challenges and How to Overcome Them</h2>
      <p>Many beginners face challenges when starting a mindfulness practice:</p>
      <ul>
        <li><strong>A wandering mind:</strong> This is normal. When you notice your mind wandering, gently bring your attention back to your focus point.</li>
        <li><strong>Impatience:</strong> Remember that mindfulness is a skill that develops over time. Be patient with yourself.</li>
        <li><strong>Finding time:</strong> Start with just 5 minutes a day and gradually increase as you become more comfortable.</li>
        <li><strong>Discomfort:</strong> If you experience physical discomfort, adjust your position. If emotional discomfort arises, acknowledge it with kindness and continue your practice.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mindfulness is a powerful tool for improving mental health and overall well-being. By starting with small, consistent practices and approaching yourself with kindness and patience, you can develop a mindfulness practice that supports your mental health journey.</p>
    `,
    date: "May 15, 2025",
    author: "Dr. Aashish Khadka",
    category: "Meditation",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
  },
  "depression-signs": {
    title: "Recognizing the Early Signs of Depression",
    content: `
      <h2>Understanding Depression</h2>
      <p>Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that requires understanding, treatment, and a good recovery plan. Depression can present itself in many different ways, which is why it's important to be aware of the various symptoms and warning signs.</p>
      
      <h2>Early Warning Signs of Depression</h2>
      <p>Recognizing the early signs of depression can help you seek help before symptoms become severe. Here are some common early warning signs to watch for:</p>
      
      <h3>1. Persistent Sad or "Empty" Mood</h3>
      <p>While everyone feels sad occasionally, persistent feelings of sadness, emptiness, or hopelessness that last for more than two weeks may indicate depression. This feeling might be present most of the day, nearly every day.</p>
      
      <h3>2. Loss of Interest or Pleasure</h3>
      <p>A significant reduction in interest or pleasure in activities you once enjoyed, including hobbies, social activities, or sex, is a common early sign of depression.</p>
      
      <h3>3. Changes in Sleep Patterns</h3>
      <p>Depression can cause significant changes in sleep patterns. This might include insomnia (difficulty falling asleep or staying asleep), waking up too early, or sleeping excessively.</p>
      
      <h3>4. Changes in Appetite or Weight</h3>
      <p>Some people with depression experience reduced appetite and weight loss, while others might have increased cravings for food and weight gain.</p>
      
      <h3>5. Fatigue or Loss of Energy</h3>
      <p>Feeling tired all the time, even after adequate rest, can be an early sign of depression. You might feel physically drained and find even small tasks exhausting.</p>
      
      <h3>6. Difficulty Concentrating</h3>
      <p>Depression can make it hard to focus, concentrate, remember things, or make decisions. You might find yourself becoming more indecisive or forgetful.</p>
      
      <h3>7. Feelings of Worthlessness or Excessive Guilt</h3>
      <p>Depression often involves harsh self-criticism, feelings of worthlessness, or inappropriate guilt about things that aren't your fault or are beyond your control.</p>
      
      <h3>8. Irritability or Restlessness</h3>
      <p>Depression doesn't always manifest as sadness. Sometimes it appears as irritability, restlessness, or being easily annoyed.</p>
      
      <h3>9. Physical Symptoms</h3>
      <p>Depression can cause physical symptoms that don't respond to treatment, such as headaches, digestive problems, or chronic pain.</p>
      
      <h3>10. Thoughts of Death or Suicide</h3>
      <p>Recurrent thoughts of death, suicidal ideation, or suicide attempts are serious symptoms of depression that require immediate attention.</p>
      
      <h2>When to Seek Help</h2>
      <p>If you recognize several of these signs in yourself or someone you care about, especially if they persist for more than two weeks, it's important to seek professional help. Depression is treatable, and early intervention can lead to better outcomes.</p>
      
      <h2>How to Seek Help</h2>
      <ul>
        <li>Talk to your primary care physician</li>
        <li>Contact a mental health professional</li>
        <li>Use the MindWell app to schedule a telepsychiatry appointment</li>
        <li>Reach out to a trusted friend or family member for support</li>
        <li>Call a mental health helpline if you're in crisis</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Depression is a common but serious mental health condition. Recognizing the early signs can help you or your loved ones get the support needed before symptoms become severe. Remember, seeking help is a sign of strength, not weakness, and with proper treatment, recovery is possible.</p>
    `,
    date: "May 10, 2025",
    author: "Dr. Sumana Shrestha",
    category: "Depression",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link href="/blog">
          <Button variant="link">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <article className="container max-w-3xl py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

