import { Todos } from './components/Todos'
import { Todo } from './models/todo'
import { NewTodo } from './components/NewTodo'
import { useState } from 'react'

function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	const handleAddTodo = (text: string) => {
		setTodos((prevState) => prevState.concat(new Todo(text)))
	}

	return (
		<div>
			<NewTodo onAddTodo={handleAddTodo} />
			<Todos items={todos} />
		</div>
	)
}

export default App
