import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// prettier-ignore
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function AddTaskForm({ addTask, formActivation }: any) {
  const formSchema = z.object({
    title: z.string().min(1, {
      message: 'title must must not be empty.',
    }),
    content: z.string().min(0, {
      // message: 'content must must not be empty.',
    }),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    addTask({
      id: Number(Date.now()),
      title: values.title,
      content: values.content,
      active: true,
    })
    form.reset()
    // ✅ This will be type-safe and validated.
  }

  return (
    <div>
      <hr className="bg-[#999999] h-[2px] m-2" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
          <FormField
            control={form.control}
            name="title"
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
            name="content"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Примітка</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons cancel/save */}
          <div className="flex justify-end gap-1 mt-6">
            <Button
              className="bg-red-500"
              onClick={(e) => {
                e.preventDefault()
                form.reset()
                formActivation()
              }}
            >
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
                    fill="white"
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

            <Button className="bg-accent" type="submit">
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
    </div>
  )
}
