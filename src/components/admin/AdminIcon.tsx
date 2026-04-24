import type { LucideIcon } from 'lucide-react'
import type { SVGProps } from 'react'
import { cx } from '@/lib/cn'

/** Consistent visual weight for admin Lucide icons (softer, more premium) */
export const ADMIN_ICON_STROKE = 1.65

const sizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string> = {
  xs: 'h-3 w-3',
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-6 w-6',
}

type AdminIconProps = {
  icon: LucideIcon
  size?: keyof typeof sizes
  className?: string
  strokeWidth?: number
} & Omit<SVGProps<SVGSVGElement>, 'ref' | 'children' | 'className'>

/**
 * Renders a Lucide icon with consistent size and stroke for the admin surface.
 */
export function AdminIcon({
  icon: Icon,
  size = 'md',
  className,
  strokeWidth = ADMIN_ICON_STROKE,
  ...rest
}: AdminIconProps) {
  return (
    <Icon
      className={cx(sizes[size], 'shrink-0', className)}
      strokeWidth={strokeWidth}
      {...rest}
    />
  )
}
