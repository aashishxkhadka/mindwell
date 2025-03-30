import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">MindWell</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-3xl py-12">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>Last updated: May 1, 2025</p>

            <h2>Introduction</h2>
            <p>
              At MindWell, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our mental health support application.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect several types of information from and about users of our application, including:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, and other contact details you provide when
                registering.
              </li>
              <li>
                <strong>Health Information:</strong> Mental health assessments, mood tracking data, and other
                health-related information you choose to provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our application, including features accessed
                and time spent.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access our application.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Protect the security and integrity of our application</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>With Your Consent:</strong> We may share your information when you explicitly consent to such
                sharing.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who
                perform services on our behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response
                to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share your information in connection with a merger,
                acquisition, or sale of all or a portion of our assets.
              </li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our application is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@mindwell.com.</p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 MindWell. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

