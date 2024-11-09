import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// prettier-ignore
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MyTaskType } from '@/app/page'

export default function CardBoilerplate(task: MyTaskType) {
  return (
    <Card data-id={task.id} className={cn(`${task.active ? 'opacity-100' : 'opacity-50'}`, 'mb-4')}>
      <CardHeader>
        <CardDescription className="flex justify-end relative mb-2">
          <button
            className="hover:bg-gray-100 p-2 rounded-full"
            onClick={() => {
              task.deleteTask(task.id)
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                fill="#333333"
              />
            </svg>
          </button>
        </CardDescription>
        {/* <CardTitle className="text-xl">Купити продукти</CardTitle> */}
        <CardTitle className={cn(`${task.active ? '' : 'line-through'}`, 'text-xl')}>
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* <p>Скласти список необхідних продуктів та відвідати магазин.</p> */}
        <p className={cn(`${task.active ? '' : 'line-through'}`)}>{task.content}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-accent"
          onClick={() => {
            task.setActive(task.id)
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.59 5.58L8 12.17L4.41 8.59L3 10L8 15L16 7L14.59 5.58ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
              fill="white"
            />
          </svg>
          {task.active ? 'Завершити' : 'Відновити'}
        </Button>
      </CardFooter>
    </Card>
  )
}
