import type { Metadata } from 'next'
import { AuthLayout }   from '@/features/auth/components/AuthLayout'
import { SignupForm }   from '@/features/auth/components/SignupForm'

export const metadata: Metadata = {
  title:       'Create your account – Seellr',
  description: 'Start building your online business with Seellr. Free forever on the Starter plan.',
  robots:      { index: false },
}

export default function SignupPage() {
  return (
    <AuthLayout
      heading="Create your account"
      subheading="Start free — no credit card required. Upgrade when you're ready."
      footerText="Already have an account?"
      footerLinkLabel="Sign in"
      footerLinkHref="/login"
    >
      <SignupForm />
    </AuthLayout>
  )
}
