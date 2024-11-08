'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// prettier-ignore
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import AddTaskButton from '@/components/AddTaskButton'
import AddTaskForm from '@/components/AddTaskForm'
import CardBoilerplate from '@/components/CardBoilerplate'

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <div className="relative">
            <Input className="my-2 bg-white" placeholder="" />
            <svg
              className="absolute top-2 right-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_1952)">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_1952">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className="text-xs">домашні справи робота фітнес</p>

          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main className="">
          {/* Cards container */}
          <div id="cards">
            <CardBoilerplate />

            <div className="mt-4 opacity-50">
              <CardBoilerplate />
            </div>
          </div>

          {/* Button for adding new task */}
          <AddTaskButton />

          {/* Form for adding new task */}
          <AddTaskForm />
        </main>

        <footer></footer>
      </div>
    </>
  )
}
