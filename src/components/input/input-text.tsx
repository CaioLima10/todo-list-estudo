import type { VariantProps } from "class-variance-authority";
import { inputTextVariants } from "./input-text-variants-cva";
import { cx } from "class-variance-authority";
import { textVariants } from "../text/text-variants-cva";

interface InputTextProps extends React.ComponentProps<'input'>, 
  Omit<VariantProps<typeof inputTextVariants>, 'size' | 'disabled' >{

}

export function InputText({ inputSize, disabled, className, ...props }: InputTextProps) {
  return(
    <input 
    className={
      cx(inputTextVariants({ inputSize, disabled, className }),
      textVariants()
  )} {...props} />
  )
}