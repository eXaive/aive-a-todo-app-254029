import TodoItem from './TodoItem'
import type { Todo } from '../app/page'

interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (id: number) => void
  onDeleteTodo: (id: number) => void
}

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}