import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <div className="flex min-h-screen flex-col">
     <MainNav/> 

      <main className="container mx-auto">
        <section className="w-full py-12  bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center pt-20">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Creating a supportive platform for mental health and well-being
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="prose dark:prose-invert max-w-none space-y-4 mb-8 text-center">
                <p className="lead"> 
                  Our mission at MindWell is to create a safe, supportive, and accessible platform for individuals
                  struggling with mental health challenges, particularly depression. We aim to empower users by
                  providing tools for self-awareness, emotional well-being, and professional support.
                </p>

                <p>
                  Through features like mood tracking, self-assessment quizzes, guided meditation, AI-powered chat
                  support, and a secure community forum, we strive to make mental health resources more approachable and
                  effective.
                </p>

                <p>
                  We believe that mental well-being is just as important as physical health, and our platform is
                  designed to foster hope, resilience, and positive change in people's lives. By integrating education,
                  self-care techniques, and professional connections, we seek to break the stigma around mental health
                  and provide users with a path to healing and growth.
                </p>

                <h2 className="font-bold text-3xl text-center mt-10 py-20">Our Core Values</h2>
                <div className="grid gap-6 sm:grid-cols-2 mt-8">
                  <Card className="overflow-hidden">
                    <CardContent className="p-6 flex gap-4">
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Safety & Privacy</h3>
                        <p className="text-muted-foreground">
                          We prioritize creating a secure space where users can trust that their personal information
                          and experiences are protected.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6 flex gap-4">
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                        <HeartHandshake className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Compassion</h3>
                        <p className="text-muted-foreground">
                          We approach every interaction with empathy, understanding that each person's journey is unique
                          and deserving of support.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6 flex gap-4">
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                        <p className="text-muted-foreground">
                          We're committed to making mental health support accessible to everyone, regardless of
                          background or circumstances.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6 flex gap-4">
                      <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">
                          We continuously improve our platform through evidence-based approaches and innovative
                          technology.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

               
                <h2 className="font-bold text-3xl text-center mt-10 pt-20 pb-20 ">Our Commitment</h2>
                <p>
                  MindWell is committed to breaking the stigma surrounding mental health, providing reliable resources,
                  and connecting users with professional support when needed. We strive to be a trusted companion on
                  your mental health journey, offering tools that promote resilience, self-awareness, and positive
                  growth.
                </p>

                <p className="text-center">
                  Whether you're seeking help for yourself or supporting someone else, MindWell aims to be a
                  comprehensive platform that meets you where you are and guides you toward improved mental well-being.
                </p>

                <div className="mt-12 bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2 pt-20 text-center pb-6">Join Our Community</h3>
                  <p className=" text-center ">
                    Be part of our growing community of individuals committed to improving their mental health and
                    supporting others on similar journeys.
                  </p>
                  <div className="mt-4 pt-4 text-center">
                    <Link href="/register">
                      <Button size="lg">Get Started Today</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

