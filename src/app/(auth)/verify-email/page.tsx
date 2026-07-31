import type { Metadata }    from 'next'
import { AuthLayout }       from '@/features/auth/components/AuthLayout'
import { VerifyEmailView }  from '@/features/auth/components/VerifyEmailView'

export const metadata: Metadata = {
  title:       'Verify your email – Seellr',
  description: 'Check your inbox to verify your Seellr account.',
  robots:      { index: false },
}

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      heading="One more step"
      subheading="You're almost there — just confirm your email address."
      footerText="Wrong email?"
      footerLinkLabel="Start over"
      footerLinkHref="/signup"
    >
      <VerifyEmailView />
    </AuthLayout>
  )
}
