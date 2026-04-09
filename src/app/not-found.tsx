import Link from "next/link";
import FlowiseChatbot from "@/components/chatbot";

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto] items-center justify-items-center gap-12 bg-background p-8 pb-14 sm:p-20">
      <main className="surface-panel row-start-1 flex max-w-2xl flex-col items-center gap-7 p-8 text-center sm:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          404 Error
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">This page does not exist</h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          The link may be outdated, or the page may have moved. Let&apos;s get you back on
          track.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            href="/"
          >
            Return Home
          </Link>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
            href="https://t.me/AsharibAli"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on Telegram
          </a>
        </div>
      </main>
      <footer className="row-start-2 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <a
          className="flex items-center gap-2 hover:text-foreground hover:underline hover:underline-offset-4"
          href="https://asharibali.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Articles →
        </a>
        <a
          className="flex items-center gap-2 hover:text-foreground hover:underline hover:underline-offset-4"
          href="https://github.com/AsharibAli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:text-foreground hover:underline hover:underline-offset-4"
          href="https://www.asharib.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to asharib.xyz →
        </a>
      </footer>
      <div>
        <FlowiseChatbot />
      </div>
    </div>
  );
}
