import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// prettier-ignore
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <Input className="bg-white" />
          <p>category1 category2 category2 </p>
          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main>
          <Card>
            <CardHeader>
              <CardDescription>Домашні справи</CardDescription>
              <CardTitle>Купити продукти</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Скласти список необхідних продуктів та відвідати магазин.</p>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#FF6600]">
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

          <hr className="bg-[#999999] h-[2px] m-2" />
          <div className="flex justify-end">
            <Button className="bg-[#FF6600]">
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
        </main>

        <footer></footer>
      </div>
    </>
  )
}
