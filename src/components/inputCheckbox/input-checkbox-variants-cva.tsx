import { cva } from "class-variance-authority";

export const InputCheckboxWrapperVariants = cva(['inline-flex', 'items-center', 
  'justify-center', 'group', 'relative'])
  
export const InputCheckboxVariants = cva(['appearance-none', 'peer','cursor-pointer',
  'flex', 'items-center', 'justify-center', 'border-2', 'border-solid', 'transition',
  'overflow-hidden', 'border-green-base', 'checked:group-hover:border-green-dark', 'hover:bg-green-dark/20',
  'checked:bg-green-base', 'checked:border-green-base', 'checked:group-hover:bg-green-dark'
], {
  variants: {
    checkedSize: {
      sm: ['w-5', 'h-5', 'rounded-md'] 
    },
    disabled: {
      true: 'pointer-events-none'
    }
  },
  defaultVariants: {
    checkedSize: 'sm',
    disabled: false
  }
  
})

export const checkedIconVariants = cva(['absolute', 'top-1/2', 'left-1/2', 'transform', ' -translate-x-1/2', 
  '-translate-y-1/2', 'hidden', 'peer-checked:block',
  'fill-gray-100'], {
    variants: {
      checkedSize: {
        sm: ['w-4', 'h-4']
      }
    }, 
    defaultVariants: {
      checkedSize: 'sm'
    }
  })


