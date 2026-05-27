import { cva } from 'class-variance-authority'

export const textVariants = cva(['font-sans', 'text-gray-400'], {
  variants: {
    variant: {
      'body-sm-semibold': 'text-sm leading-5 font-semibold',
      'bold-md': 'text-md leading-5 font-medium',
      'body-md-regular': 'text-base leading-6 font-semibold'
    },
    defaultVariants: {
      variant: 'body-md'
    }
  }
})