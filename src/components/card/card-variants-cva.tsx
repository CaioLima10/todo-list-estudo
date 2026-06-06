import { cva } from "class-variance-authority";

export const cardVariants = cva(['rounded-lg', 'border-gray-200', 'bg-white', 'shadow-sm'], {
  variants: {
    cardSize: {
      none: '', 
      md: 'p-5'
    }
  },
  defaultVariants: {
    cardSize: 'none'
  }
})