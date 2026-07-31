import type { Metadata } from 'next'
import { AuthLayout } from '@/features/auth/components/AuthLayout'
import { LoginForm }  from '@/features/auth/components/LoginForm'

export const metadata: Metadata = {
  title:       'Sign in',
  description: 'Sign in to your Seellr account.',
  robots:      { index: false },
}

export default function LoginPage() {
  return (
    <AuthLayout
      heading="Welcome back"
      subheading="Sign in to your Seellr account to continue."
      footerText="Don't have an account?"
      footerLinkLabel="Sign up for free"
      footerLinkHref="/signup"
    >
      <LoginForm />
    </AuthLayout>
  )
}
