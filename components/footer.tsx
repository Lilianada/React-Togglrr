import { ModeToggle } from "./mode-toggle"

const Footer = () => {
  return (
    <footer className="max-h-24 py-6 border-t border-zinc-200 dark:border-zinc-800 w-full relative">
      <div className="absolute left-2"> <ModeToggle /></div>
      <div className="text-center text-xs text-zinc-500 dark:text-zinc-400">
        <p>Togglrr &copy; {new Date().getFullYear()}</p>
        <p className="mt-1">
          A product of{" "}
          <a
            href="https://lilyslab.xyz"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Lily&#39;s Lab
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/lilianada/togglrr/fork"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
