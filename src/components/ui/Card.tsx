import type { HTMLAttributes, ReactNode } from 'react'

type Padding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: Padding
  hoverable?: boolean
}

export default function Card({
  children,
  padding = 'md',
  hoverable = false,
  className = '',
  ...rest
}: CardProps) {
  const classes = [
    'card-ui',
    `card-ui--pad-${padding}`,
    hoverable ? 'card-ui--hoverable' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}