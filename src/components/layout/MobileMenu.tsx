import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type NavItem = { href: string; label: string }

interface Props {
  items: NavItem[]
  cta: { label: string }
}

export function MobileMenu({ items, cta }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Abrir menú"
          className="text-muted-foreground hover:text-foreground"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 sm:w-80">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Menú</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>
        <Separator className="mx-4 w-auto" />
        <div className="px-4 pb-6">
          <SheetClose asChild>
            <Button type="button" className="w-full">
              {cta.label}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
