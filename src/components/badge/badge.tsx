import type { VariantProps } from "class-variance-authority";
import { badgeTextVariants, badgeVariants } from "./badge-variant-cva";
import { Text } from "../text/text";
import { Skeleton } from "../skeleton/skeleton";

interface BadgeProps extends React.ComponentProps<'div'>, 
  VariantProps<typeof badgeVariants>, 
  VariantProps<typeof badgeTextVariants> {
    loading?: boolean
  }

export function Badge({ loading, variant = 'none', size, children }: BadgeProps) {
  if(loading) {
    return <Skeleton rounded={'full'} className="w-6 h-6"/>
  }

  return <div className={badgeVariants({ variant, size })}>
    <Text variant={"body-sm-semibold"}  className={(badgeTextVariants({ variant }))}>
      {children}
    </Text>
    </div>

}