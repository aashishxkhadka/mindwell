import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Brain,
  Calendar,
  FileQuestion,
  MessageCircle,
  Users,
  ArrowRight,
  Shield,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Mental Health Assessment",
      description:
        "Comprehensive evaluations performed by licensed mental health professionals to understand your specific needs and create personalized treatment recommendations.",
      icon: <FileQuestion className="h-12 w-12" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      features: [
        "Depression screening (PHQ-9)",
        "Anxiety assessment (GAD-7)",
        "Personalized results and recommendations",
        "Progress tracking over time",
        "Expert interpretation of results",
      ],
    },
    {
      title: "Therapy Sessions",
      description:
        "One-on-one virtual sessions with licensed therapists specializing in various mental health conditions, including depression, anxiety, trauma, and relationship issues.",
      icon: <Calendar className="h-12 w-12" />,
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Mindfulness-based approaches",
        "Trauma-focused therapy",
        "Flexible scheduling options",
      ],
    },
    {
      title: "Mood Tracking",
      description:
        "Our advanced mood tracking tools help you identify patterns, triggers, and improvements in your emotional well-being over time.",
      icon: <BarChart3 className="h-12 w-12" />,
      color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      features: [
        "Daily mood logging",
        "Pattern recognition algorithms",
        "Custom notes and observations",
        "Visual trend analysis",
        "Export options for sharing with providers",
      ],
    },
    {
      title: "Guided Meditation",
      description:
        "Access our library of guided meditation sessions designed to reduce stress, improve focus, and promote emotional balance.",
      icon: <Brain className="h-12 w-12" />,
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
      features: [
        "Various session lengths (5-30 minutes)",
        "Specialized meditations for anxiety and depression",
        "Sleep-focused relaxation techniques",
        "Breath work exercises",
        "Progressive muscle relaxation",
      ],
    },
    {
      title: "Support Groups",
      description:
        "Connect with others facing similar challenges in our moderated support groups, providing a safe space for sharing experiences and strategies.",
      icon: <Users className="h-12 w-12" />,
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
      features: [
        "Topic-specific groups (depression, anxiety, grief)",
        "Professional moderation",
        "Anonymous participation options",
        "Regular scheduled meetings",
        "Resource sharing between members",
      ],
    },
    {
      title: "AI Chat Support",
      description:
        "Receive immediate support and guidance through our AI-powered chat system, available 24/7 to provide coping strategies and resources.",
      icon: <MessageCircle className="h-12 w-12" />,
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
      features: [
        "24/7 availability",
        "Evidence-based coping strategies",
        "Crisis resource connection",
        "Guided self-help exercises",
        "Personalized recommendations",
      ],
    },
    {
      title: "Educational Resources",
      description:
        "Access our comprehensive library of articles, videos, and worksheets on mental health topics, created and vetted by mental health professionals.",
      icon: <BookOpen className="h-12 w-12" />,
      color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
      features: [
        "Evidence-based information",
        "Downloadable worksheets and guides",
        "Video tutorials on coping skills",
        "Recommended reading lists",
        "Regular content updates",
      ],
    },
    {
      title: "Crisis Support",
      description:
        "Immediate resources and connections to crisis services for those experiencing severe distress or emergency situations.",
      icon: <Shield className="h-12 w-12" />,
      color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
      features: [
        "Immediate crisis intervention protocols",
        "Direct connection to local emergency services",
        "Follow-up support services",
        "Family resource coordination",
        "Safety planning assistance",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
    <MainNav/>
      <main className="container mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive mental health support tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden flex flex-col h-full">
                  <CardHeader className={service.color}>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-white p-2 dark:bg-gray-800">{service.icon}</div>
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-1">
                    <p className="mb-4">{service.description}</p>
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/register" className="w-full">
                      <Button className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Take the first step toward improved mental well-being today. Our team is here to support you on your
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg">Create an Account</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

