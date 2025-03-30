import { BarChart3, Brain, Calendar, MessageCircle, Shield, Users } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Mood Tracking",
      description: "Log your daily emotions and track your mental health progress over time.",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Self-Assessment",
      description: "Evaluate your mental state with our comprehensive quiz and get personalized recommendations.",
      color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "AI Chatbot",
      description: "Get guidance, answers to common mental health questions, and coping strategies.",
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Guided Meditation",
      description: "Access guided meditation and relaxation exercises to manage stress and anxiety.",
      color: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Telepsychiatry",
      description: "Schedule virtual consultations with mental health professionals.",
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Support Forum",
      description: "Connect with a supportive community to share experiences and seek advice anonymously.",
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    },
  ]

  return (
    <section className="container mx-auto w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Comprehensive Support
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features Designed For Your Well-being</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Everything you need to monitor and improve your mental well-being
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className={`rounded-full p-4 ${feature.color}`}>{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

