import { Button } from '@/components/ui/button'
// prettier-ignore
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MyCardType } from '@/app/page'

export default function CardBoilerplate(card: MyCardType) {
  return (
    <Card data-id={card.id} className={card.active ? 'opacity-100 mb-4' : 'opacity-50 mb-4'}>
      <CardHeader>
        <CardDescription className="flex justify-end relative mb-2">
          {/* <p className="absolute left-0 text-accent text-xs font-bold border-2 p-1 border-accent">
            домашні справи
          </p> */}
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2054_47)">
                <path
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                  fill="#333333"
                />
              </g>
              <defs>
                <clipPath id="clip0_2054_47">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button
            onClick={() => {
              card.deleteTask(card.id)
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
        <CardTitle className="text-xl">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <p>Скласти список необхідних продуктів та відвідати магазин.</p> */}
        <p>{card.content}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-accent"
          onClick={() => {
            card.setActive(card.id)
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
          Завершити
        </Button>
      </CardFooter>
    </Card>
  )
}
