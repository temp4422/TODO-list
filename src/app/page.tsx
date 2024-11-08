'use client'
import HeaderInput from '@/components/HeaderInput'
import CardBoilerplate from '@/components/CardBoilerplate'
import AddTaskButton from '@/components/AddTaskButton'
import AddTaskForm from '@/components/AddTaskForm'

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <HeaderInput />
          <p className="text-xs">домашні справи робота фітнес</p>
          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main>
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
