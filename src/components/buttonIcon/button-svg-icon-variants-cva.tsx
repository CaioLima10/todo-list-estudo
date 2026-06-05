import { cva } from "class-variance-authority";

export const buttonSvgIconVariants = cva(['transition'], {
  variants: {
    variant: {
      primary: ['fill-white'],
      secondary: ['fill-pink-base', 'group-hover:fill-white'],
      tertiary: ['fill-pink-base'],  
    },
    size: {
      sm: ['w-4', 'h-4']
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm'
  }
})