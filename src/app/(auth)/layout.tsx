// Auth layout — intentionally excludes Navbar, AnnouncementBar, and Footer.
// The auth pages manage their own minimal chrome via AuthLayout.

interface AuthGroupLayoutProps {
  children: React.ReactNode
}

export default function AuthGroupLayout({ children }: AuthGroupLayoutProps) {
  return <>{children}</>
}
