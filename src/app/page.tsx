import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <Input className="bg-white" />
          <p>list1 list2 list2 </p>
          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main>
          list-item1 list-item 2 list-item3
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
