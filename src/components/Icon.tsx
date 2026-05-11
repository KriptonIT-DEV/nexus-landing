import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"
import { iconMap, type IconName } from "@/lib/icons"

interface Props extends ComponentProps<LucideIcon> {
  name: IconName
}

export function Icon({ name, ...rest }: Props) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component {...rest} />
}
