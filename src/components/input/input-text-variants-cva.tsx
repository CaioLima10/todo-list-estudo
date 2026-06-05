import { cva } from "class-variance-authority";

export const inputTextVariants = cva(['border-b', 'border-gray-200', 
  'focus:border-b', 'focus:border-b-pink-base' , 
  'outline-none', 'bg-transparent'] ,
{
  variants: {
    inputSize: {
      md: ['pb-2', 'px-2']
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  defaultVariants: {
    inputSize: 'md',
    disabled: false
  }
})