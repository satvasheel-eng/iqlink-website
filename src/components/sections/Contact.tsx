import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Let's build what comes next.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Founders, institutions, and government teams — reach out to talk about a product,
          a partnership, or an idea for the IQLink portfolio.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="mailto:managefirmyn@gmail.com">Email us</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <a href="https://firmyn.in/" target="_blank" rel="noreferrer">Explore Firmyn</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
