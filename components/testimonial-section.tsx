export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "MindWell has been a game-changer for my mental health journey. The mood tracking feature helps me identify patterns I never noticed before.",
      author: "Aashish K.",
      role: "User for 8 months",
    },
    {
      quote:
        "The guided meditation exercises have helped me manage my anxiety better than anything else I've tried. I use them daily now.",
      author: "Saran S.",
      role: "User for 1 year",
    },
    {
      quote:
        "Being able to connect with others who understand what I'm going through in the support forum has made me feel less alone in my struggles.",
      author: "Tej B.",
      role: "User for 5 months",
    },
    {
      quote:
        "The self-assessment tools gave me insights about my mental health that I wasn't aware of. It helped me take the first step toward seeking help.",
      author: "Sumana S.",
      role: "User for 6 months",
    },
    {
      quote:
        "The telepsychiatry feature made it so convenient to speak with a professional. I no longer had to worry about commuting or taking time off work.",
      author: "Sabita U.",
      role: "User for 3 months",
    },
    {
      quote:
        "As someone who struggled with depression for years, MindWell's comprehensive approach has been instrumental in my recovery journey.",
      author: "Yuvraj P.",
      role: "User for 9 months",
    },
  ]

  return (
    <section className="container mx-auto w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from people who have improved their mental well-being with MindWell
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

