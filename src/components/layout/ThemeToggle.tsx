import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark"

function readTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = localStorage.getItem("colorTheme") as Theme | null
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initial = readTheme()
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    localStorage.setItem("colorTheme", next)
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
      }
      className="text-muted-foreground hover:text-foreground"
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun data-icon strokeWidth={1.75} />
        ) : (
          <Moon data-icon strokeWidth={1.75} />
        )
      ) : (
        <Sun data-icon strokeWidth={1.75} className="opacity-0" />
      )}
    </Button>
  )
}
