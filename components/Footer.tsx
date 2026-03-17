import { SITE_TITLE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} {SITE_TITLE}. All rights reserved.
      </div>
    </footer>
  );
}
