import { Button } from '@/components/ui/button'
import React from 'react'

// type ButtonProps = {
//   label: string
//   onClick: () => void
// }

// const ButtonA: React.FC<ButtonProps> = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick} className="button">
//       {label}
//     </button>
//   )
// }

// export default ButtonA

export default function AddTaskButton() {
  return (
    <div className="flex justify-end my-2">
      <Button className="bg-accent" onClick={() => console.log('OK')}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
        </svg>
        Додати справу
      </Button>
    </div>
  )
}
