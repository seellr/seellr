import type { Metadata }       from 'next'
import { AuthLayout }          from '@/features/auth/components/AuthLayout'
import { ResetPasswordForm }   from '@/features/auth/components/ResetPasswordForm'

export const metadata: Metadata = {
  title:       'Set new password – Seellr',
  description: 'Choose a new password for your Seellr account.',
  robots:      { index: false },
}

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      heading="Set a new password"
      subheading="Choose a strong password for your account."
      footerText="Remember your password?"
      footerLinkLabel="Sign in"
      footerLinkHref="/login"
    >
      <ResetPasswordForm />
    </AuthLayout>
  )
}
