import type { VariantProps } from "class-variance-authority";
import { checkedIconVariants, InputCheckboxVariants, InputCheckboxWrapperVariants } from "./input-checkbox-variants-cva";
import { Icon } from "../icon/icon";
import CheckIcon from "../../assets/image/check.svg?react"

interface InputCheckboxProps extends React.ComponentProps<'input'>, Omit<VariantProps<typeof InputCheckboxVariants>, 'size' | 'disabled'> {

}

export function InputCheckbox({ checkedSize, disabled, className, ...props }: InputCheckboxProps) {
  return(
    <label className={InputCheckboxWrapperVariants({ className })}>
      <input {...props} className={InputCheckboxVariants({checkedSize, disabled})} />
      <Icon className={checkedIconVariants({checkedSize})} svg={CheckIcon} />
    </label>
  )
}