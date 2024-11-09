'use client'
import HeaderInput from '@/components/HeaderInput'
import CardBoilerplate from '@/components/CardBoilerplate'
import AddTaskButton from '@/components/AddTaskButton'
import AddTaskForm from '@/components/AddTaskForm'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const sampleTaskList = [
  {
    id: 1,
    title: 'Купити продукти',
    content: 'Скласти список необхідних продуктів та відвідати магазин.',
    active: true,
  },
  {
    id: 2,
    title: 'Купити продукти',
    content: 'Скласти список необхідних продуктів та відвідати магазин.',
    active: false,
  },
]

export type MyCardType = {
  id: number
  title: string
  content: string
  active: boolean
}

export default function Home() {
  const [taskList, setTaskList] = useState(sampleTaskList)
  function addTask({ id, title, content, active }: MyCardType) {
    setTaskList([...taskList, { id, title, content, active }])
  }

  const [isActiveForm, setIsActiveForm] = useState(false)
  function formActivation() {
    setIsActiveForm(!isActiveForm)
  }
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <HeaderInput />
          {/* <p className="text-xs">домашні справи робота фітнес</p> */}
          <hr className="bg-[#999999] h-[2px] m-2" />
          <br />
        </header>

        <main>
          {/* Cards container */}
          <ul id="cards">
            {taskList.map((card) => (
              <CardBoilerplate
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                active={card.active}
              />
            ))}
          </ul>

          {/* Button for adding new task */}
          {!isActiveForm && <AddTaskButton formActivation={formActivation} />}

          {/* Form for adding new task */}
          {isActiveForm && <AddTaskForm addTask={addTask} formActivation={formActivation} />}
        </main>

        <footer></footer>
      </div>
    </>
  )
}
