import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="surface-canvas border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Legal
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">{updated}</p>
            <p
              className="mt-6 text-base leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: intro }}
            />
          </div>
        </div>
      </section>

      <div className="container-page py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="mb-12 flex gap-3 rounded-xl border border-border bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
            <span>
              <strong className="text-foreground">Placeholder document.</strong> This text is a
              starting template for an Indian technology company and must be reviewed and adapted by
              qualified legal counsel before launch. It does not constitute legal advice.
            </span>
          </p>
          <div className="space-y-10">{children}</div>
        </div>
      </div>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
