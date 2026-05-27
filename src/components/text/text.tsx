import React from 'react'
import { textVariants } from './text-variants-cva'
import type { VariantProps } from 'class-variance-authority'


interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode

}

export function Text({ children, as = 'span', className, variant, ...props }: TextProps){
  return React.createElement(
    as, {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  )
}