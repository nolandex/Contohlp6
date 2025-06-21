import type React from "react"
import { Hero, Testimonials, Pricing, FAQ, Logos, Benefits, Container, Section, Stats, CTA } from "@/components"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section id="pricing" title="Pricing" description="Simple, transparent pricing. No surprises.">
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  )
}

export default HomePage
