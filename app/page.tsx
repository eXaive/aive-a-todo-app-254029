'use client'

import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Todo App
          </h1>
          
          <TodoForm onAddTodo={addTodo} />
          
          {totalCount > 0 && (
            <div className="mb-4 text-sm text-gray-600 text-center">
              {completedCount} of {totalCount} tasks completed
            </div>
          )}
          
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
          
          {todos.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No todos yet. Add one above!
            </div>
          )}
        </div>
      </div>
    </main>
  )
}