import type { VariantProps } from "class-variance-authority";
import { badgeTextVariants, badgeVariants } from "./badge-variant-cva";
import { Text } from "../text/text";

interface BadgeProps extends React.ComponentProps<'div'>, 
  VariantProps<typeof badgeVariants>, 
  VariantProps<typeof badgeTextVariants> {}

export function Badge({ variant, size, children }: BadgeProps) {
  return <div className={badgeVariants({ variant, size })}>
    <Text variant={"body-sm-semibold"}  className={badgeTextVariants({ variant })}>
      {children}
    </Text>
    </div>

}