import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Aashish Khadka",
      role: "Founder & Psychiatrist",
      bio: "Dr. Aashish Khadka is a board-certified psychiatrist with over 10 years of experience in treating depression, anxiety, and other mental health conditions. He founded MindWell with the vision of making mental healthcare accessible to everyone.",
      image: "/https://aashishkhadka.com.np/wp-content/uploads/2025/01/aashish-khadka-digital-marketing-in-nepal-scaled.jpeg?height=300&width=300&text=Dr.+Aashish+Khadka",
    },
    {
      name: "Dr. Sumana Shrestha",
      role: "Clinical Psychologist",
      bio: "Dr. Sumana Shrestha specializes in cognitive behavioral therapy and mindfulness-based interventions. She has extensive experience working with individuals dealing with depression, anxiety, and trauma.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Sumana+Shrestha",
    },
    {
      name: "Saran Shrestha",
      role: "Chief Technology Officer",
      bio: "Saran Shrestha leads our technology team, bringing over 8 years of experience in developing secure and user-friendly healthcare applications. He is passionate about using technology to improve mental health outcomes.",
      image: "/placeholder.svg?height=300&width=300&text=Saran+Shrestha",
    },
    {
      name: "Sabita Upadhya",
      role: "Mental Health Counselor",
      bio: "Sabita Upadhya is a licensed mental health counselor with expertise in depression, anxiety, and relationship issues. She believes in a holistic approach to mental health and is dedicated to helping clients achieve emotional well-being.",
      image: "/placeholder.svg?height=300&width=300&text=Sabita+Upadhya",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About MindWell</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our mission is to make mental healthcare accessible, affordable, and effective for everyone
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-500 dark:text-gray-400">
                  <p>
                    MindWell was founded in 2023 by Dr. Aashish Khadka, a psychiatrist who recognized the growing need
                    for accessible mental health resources. After years of working in traditional clinical settings, Dr.
                    Khadka saw how many people struggled to access quality mental healthcare due to cost, stigma, and
                    limited availability of services.
                  </p>
                  <p>
                    With a vision to break down these barriers, he assembled a team of mental health professionals and
                    technology experts to create MindWell—a comprehensive digital platform that provides evidence-based
                    tools and resources for mental health support.
                  </p>
                  <p>
                    Today, MindWell serves thousands of users worldwide, offering a range of features from mood tracking
                    and self-assessment to AI-powered support and telepsychiatry services. Our team continues to grow,
                    but our mission remains the same: to make mental healthcare accessible to everyone who needs it.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We believe mental healthcare should be available to everyone, regardless of location, income, or
                      background.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our tools and resources are grounded in scientific research and clinical best practices.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-2">Privacy</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We prioritize the security and confidentiality of your personal information and health data.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We aim to empower individuals with the knowledge and tools to take control of their mental health.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                  The dedicated professionals behind MindWell
                </p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <Badge variant="outline" className="mt-1 mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>

  )
}

