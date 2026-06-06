import type { VariantProps } from "class-variance-authority";
import { Icon } from "../icon/icon";
import { buttonVariants } from "./button-variants-cva";
import { Text } from "../text/text";

interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>, 
  VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps< typeof Icon>['svg']
}

export function Button({ variant, size, icon: IconComponents, className, children, ...props }: ButtonProps) {

return (
  <button  className={buttonVariants({ variant, size, className, ...props })}>
    <Text className="flex items-center gap-2">
      { IconComponents && <Icon svg={IconComponents}/> }
      {children}
    </Text>
  </button>
)
}