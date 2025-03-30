import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>Last updated: May 1, 2025</p>

            <h2>Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the MindWell application and services.
              Please read these Terms carefully before using our application.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using MindWell, you agree to be bound by these Terms. If you do not agree to these Terms,
              you may not access or use our application.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may revise these Terms at any time by updating this page. Your continued use of MindWell after any such
              changes constitutes your acceptance of the new Terms.
            </p>

            <h2>Not a Substitute for Professional Medical Advice</h2>
            <p>
              MindWell is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the
              advice of your physician or other qualified health provider with any questions you may have regarding a
              medical condition.
            </p>
            <p>
              If you think you may have a medical emergency, call your doctor or emergency services immediately.
              MindWell does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or
              other information that may be mentioned on the application.
            </p>

            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are
              responsible for safeguarding the password that you use to access MindWell and for any activities or
              actions under your password.
            </p>

            <h2>User Content</h2>
            <p>
              Our application may allow you to post, link, store, share and otherwise make available certain
              information, text, graphics, videos, or other material. You are responsible for the content you post to
              MindWell, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting content to MindWell, you grant us the right to use, modify, publicly perform, publicly display,
              reproduce, and distribute such content on and through our application.
            </p>

            <h2>Prohibited Uses</h2>
            <p>You agree not to use MindWell:</p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To harass, abuse, or harm another person</li>
              <li>
                To impersonate or attempt to impersonate MindWell, a MindWell employee, another user, or any other
                person or entity
              </li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of MindWell</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              MindWell and its original content, features, and functionality are and will remain the exclusive property
              of MindWell and its licensors. Our application is protected by copyright, trademark, and other laws.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall MindWell, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use MindWell.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of
              law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at terms@mindwell.com.</p>
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

