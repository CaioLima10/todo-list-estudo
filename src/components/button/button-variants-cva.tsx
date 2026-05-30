import { cva } from "class-variance-authority";

export const buttonVariants = cva(['flex', 'items-center', 'justify-center', 'rounded-lg', 'group', 'transition'], {
  variants: {
    variant: {
      primary: ['bg-gray-200', 'hover:bg-pink-light']
    },
    size: {
      md: ['px-4', 'py-5']
    },
    disabled: {
      false: 'cursor-pointer',
      true: ['opacity-50', 'cursor-not-allowed']
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    disabled: false
  }
})