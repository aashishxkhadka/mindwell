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
      image: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/465783672_1627584521124209_324002651127515382_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHhkwyhTkHHU6kBgtsbC1W5YX771tSjQXFhfvvW1KNBcR4a3rfEX5qxKkvOaZu0S2g27hhgs5a6zu2nPxzmjlWT&_nc_ohc=Wx90UEKjb58Q7kNvgG7EgUW&_nc_oc=AdmWeRwV5a5jWf6NCA7nP-2Cn-XOjsJw1tc6oU1eRHnGkkUmtH1gHQxskRnlae2nN-E&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=X7If00ho8o1rCkk-6koHsg&oh=00_AYErhdBgcE4Tt__msj0eFRPPpmCEmV5EWUKUChrwWD9X8Q&oe=67EF384E"
    },
    {
      name: "Dr. Sumana Shrestha",
      role: "Clinical Psychologist",
      bio: "Dr. Sumana Shrestha specializes in cognitive behavioral therapy and mindfulness-based interventions. She has extensive experience working with individuals dealing with depression, anxiety, and trauma.",
      image: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/469290505_9639834722727703_4161734008847093895_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9oRqJpDSB4QRBNU8QvRoJvtbJS-bVWmO-1slL5tVaYyIfOx3G-R4kqT_omvyaAFqg0LJ6RPhiI9wxua14IO-5&_nc_ohc=TBTci3BiDtQQ7kNvgHp5Ifl&_nc_oc=AdkWj2_5a68uSXW2Op-oyJB6-hqamnc6BSAxHXy_Bwz9eofc7rOWyInuEAtfCye7iPI&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=8U9_d_ZJ5QVzRGdGjplYzw&oh=00_AYFxOSFHInGbPNqnRSMjbH2i53G6_Srj5tH-YDqTyJ8W5g&oe=67EF3BF8",
    },
    {
      name: "Dr. Saran Shrestha",
      role: "Chief Technology Officer",
      bio: "Saran Shrestha leads our technology team, bringing over 8 years of experience in developing secure and user-friendly healthcare applications. He is passionate about using technology to improve mental health outcomes.",
      image: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/400606491_1046497376389125_7806142634940532087_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFT7KbEbeNdAM-njOv-dP3LKaolLIiZsigpqiUsiJmyKMOO-4J5_PdMjf-lhlSsRck5ezdxqdamfUpxn0Miq8UX&_nc_ohc=ndCOYDQnaf4Q7kNvgGmCm6h&_nc_oc=AdmbXt40DkXdqxZc20Vfx4oUoE67MF2QsMDR3exJm6q0tqUFC5K7FkY9IOsSXQJdnSo&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=pUKaCejyZuMYUxf2HoGRAw&oh=00_AYE5G9nO0pFkx46VJfO7GrSd8t9PrrbO6vQlxcC_neBbuw&oe=67EF2272",
    },
    {
      name: "Dr. Sabita Upadhya",
      role: "Mental Health Counselor",
      bio: "Sabita Upadhya is a licensed mental health counselor with expertise in depression, anxiety, and relationship issues. She believes in a holistic approach to mental health and is dedicated to helping clients achieve emotional well-being.",
      image: "https://instagram.fktm1-1.fna.fbcdn.net/v/t39.30808-6/449135713_18082514449471781_2636828516721715602_n.jpg?stp=dst-jpg_e35_tt6&cb=30a688f7-4a514005&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fktm1-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QEXQGpa8E2qLC4hrWC_C1pIE4V-324V0LuO7O_6yh8TuZ1ZdNTMFNyThENsuks7PNI&_nc_ohc=Z2tubD0bcI8Q7kNvgF1W94S&_nc_gid=ki8Qq0xPJQzmiTMk-BQ64w&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzM5ODMzMjc1NDQ4MjcyODQxOA%3D%3D.3-ccb7-5-cb30a688f7-4a514005&oh=00_AYH0N7mCoSqFmdX9PzKtNOF9ZXh3FvWcrYArimzRTpTEAg&oe=67EF1B6A&_nc_sid=22de04",
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

