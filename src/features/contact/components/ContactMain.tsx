import { Section }     from '@/components/layout/Section'
import { Container }  from '@/components/layout/Container'
import { FadeLeft }   from '@/components/animations/FadeLeft'
import { FadeRight }  from '@/components/animations/FadeRight'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export function ContactMain() {
  return (
    <Section spacing="md" aria-label="Send a message" className="pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:grid-cols-[1fr_420px]">
          <FadeLeft>
            <ContactForm />
          </FadeLeft>

          <FadeRight delay={0.1}>
            <ContactInfo />
          </FadeRight>
        </div>
      </Container>
    </Section>
  )
}
