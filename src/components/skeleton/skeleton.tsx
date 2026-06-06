import type { VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeleton-variants-cva";

interface SkeletonProps extends React.ComponentProps<'div'>, VariantProps<typeof skeletonVariants> {}

export function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props}/>
  )
}