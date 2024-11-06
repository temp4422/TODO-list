'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// prettier-ignore
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

export default function Home() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  })

  // // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  // const form = useForm()

  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <Input className="bg-white" />
          <p className="text-xs">домашні справи робота фітнес</p>

          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main className="">
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

          <hr className="bg-[#999999] h-[2px] m-2" />

          <h2>Категорія</h2>
          <p className="text-xs">домашні справи робота фітнес</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Заголовок</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} className="bg-white" />
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Примітка</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} className="bg-white h-28" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Buttons cancel/save */}
              <div className="flex justify-end gap-1">
                <Button className="bg-red-500" type="submit">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3_465)">
                      <path
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_465">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Скасувати
                </Button>
                <Button className="bg-[#FF6600]" type="submit">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3_460)">
                      <path
                        d="M8.99997 16.17L4.82997 12L3.40997 13.41L8.99997 19L21 7.00003L19.59 5.59003L8.99997 16.17Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_460">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Зберегти
                </Button>
              </div>
            </form>
          </Form>
        </main>

        <footer></footer>
      </div>
    </>
  )
}
