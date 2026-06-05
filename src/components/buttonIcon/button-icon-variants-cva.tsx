import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(['inline-flex', 'items-center', 'justify-center', 'transition', 'cursor-pointer', 'group'],{
  variants: {
    variant: {
      primary: ['bg-green-base', 'hover:bg-green-dark'],
      secondary: ['bg-pink-light', 'hover:bg-pink-base'],
      tertiary: ['bg-transparent', 'hover:bg-pink-light'],
    },
    size: {
      sm: ['w-6', 'h-6', 'rounded']
    },
    disabled: {
      true: ['opacity-50', 'pointer-events-none'],
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
    disabled: false
  }
})