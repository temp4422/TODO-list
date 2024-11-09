'use client'
import CardBoilerplate from '@/components/CardBoilerplate'
import AddTaskButton from '@/components/AddTaskButton'
import AddTaskForm from '@/components/AddTaskForm'
import { useState } from 'react'

const sampleTaskList = [
  {
    id: 1,
    title: 'Купити продукти',
    content: 'Скласти список необхідних продуктів та відвідати магазин.',
    active: true,
  },
  {
    id: 2,
    title: 'Пройти прогулянку на свіжому повітрі',
    content: 'Встановити таймер на 30 хвилин і прогулятися в парку.',
    active: false,
  },
]

export type MyTaskType = {
  id: number
  title: string
  content: string
  active: boolean
  setActive: (id: number) => void
  deleteTask: (id: number) => void
}

export default function Home() {
  const [taskList, setTaskList] = useState(sampleTaskList)
  function addTask({ id, title, content, active }: MyTaskType) {
    setTaskList([...taskList, { id, title, content, active }])
  }

  function handleSetActive(id: number) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          task.active = !task.active
          return task
        } else {
          return task
        }
      })
    )
  }

  function handleDeleteTask(id: number) {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const [isActiveForm, setIsActiveForm] = useState(false)
  function formActivation() {
    setIsActiveForm(!isActiveForm)
  }
  return (
    <>
      <div className="container mx-auto max-w-[800px] h-auto bg-[#E2E2E2] p-4 min-h-screen">
        <header>
          <h1 className="text-4xl wheight-bold">Список справ</h1>
          <br />
        </header>

        <main>
          <ul id="cards">
            {taskList.map((card) => (
              <CardBoilerplate
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                active={card.active}
                setActive={handleSetActive}
                deleteTask={handleDeleteTask}
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
