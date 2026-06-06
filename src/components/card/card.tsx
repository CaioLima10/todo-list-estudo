import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./card-variants-cva";
import React from "react";

interface CardProps extends React.ComponentProps<'div'>, Omit<VariantProps<typeof cardVariants>, 'size'> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Card({as = 'div', cardSize, children, className, ...props}: CardProps){
  return React.createElement(
    as, {
      className: cardVariants({ cardSize, className, ...props })
    },
    children
  )
}