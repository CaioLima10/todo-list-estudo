import type { VariantProps } from "class-variance-authority"
import { iconVariants } from "./icon-variant-cva"


interface IconProps extends React.ComponentProps<'svg'>, VariantProps<typeof iconVariants>{
  svg: React.FC<React.ComponentProps<'svg'>>
}

export function Icon({svg: SvgComponent, className, animate, ...props }: IconProps) {
return <SvgComponent {...props} className={iconVariants({ className, animate })} />
}