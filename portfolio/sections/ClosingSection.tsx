import { SocialButtons } from "@/components/SocialButtons";

/**
 * Closing beat that resolves the arc the hero opens ("the path that got me
 * here"). It echoes the hero's uppercase kicker + bold, accent-highlighted line
 * and reuses SocialButtons so the reader finishes the story with a clear way to
 * reach out.
 */
export function ClosingSection() {
  return (
    <div className="w-full py-16 md:py-24 text-center scroll-mt-24" id="contact">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        That&apos;s the path so far
      </p>
      <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
        Let&apos;s build <span className="text-emerald-600 dark:text-emerald-400">what&apos;s next</span>.
      </h2>
      <p className="mx-auto mb-8 max-w-md text-gray-600 dark:text-gray-400 leading-relaxed">
        Always up for a good problem, a new team, or just a chat about software
        and the people behind it.
      </p>
      <div className="flex justify-center">
        <SocialButtons />
      </div>
    </div>
  );
}
