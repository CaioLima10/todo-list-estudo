import type { VariantProps } from "class-variance-authority"
import { Icon } from "../icon/icon"
import { buttonIconVariants } from "./button-icon-variants-cva"
import { buttonSvgIconVariants } from "./button-svg-icon-variants-cva"

interface ButtonIconProps extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
      icon: React.ComponentProps<typeof Icon>['svg']
}

export function ButtonIcon({ variant, size, icon, className, disabled, ...props }: ButtonIconProps) {
  return (
    <button className={buttonIconVariants({ variant, size, className, disabled })} {...props}>
      <Icon className={buttonSvgIconVariants({ variant, className })} svg={icon} />
    </button>
  )
}