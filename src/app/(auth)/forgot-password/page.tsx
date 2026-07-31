import type { Metadata }         from 'next'
import { AuthLayout }             from '@/features/auth/components/AuthLayout'
import { ForgotPasswordForm }     from '@/features/auth/components/ForgotPasswordForm'

export const metadata: Metadata = {
  title:   'Reset password – Seellr',
  description: 'Request a password reset link for your Seellr account.',
  robots:  { index: false },
}

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      heading="Reset your password"
      subheading="Enter your email and we'll send you a secure reset link."
      footerText="Remember your password?"
      footerLinkLabel="Sign in"
      footerLinkHref="/login"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
