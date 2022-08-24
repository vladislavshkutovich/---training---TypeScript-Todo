import { Todos } from './components/Todos'
import { Todo } from './models/todo'
import { NewTodo } from './components/NewTodo'
import React, { useState } from 'react'

function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	const handleAddTodo = (text: string) => {
		setTodos((prevState) => prevState.concat(new Todo(text)))
	}

	const handleDeleteTodo = (todoId: string) => {
		setTodos((prevState) => prevState.filter(todo => todo.id !== todoId))
	}

	return (
		<div>
			<NewTodo onAddTodo={handleAddTodo} />
			<Todos items={todos} onRemoveTodo={handleDeleteTodo}/>
		</div>
	)
}

export default App
