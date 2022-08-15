import { useRef } from 'react'
import classes from './NewTodo.module.css'

export const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
	// в TS рефу нужно дать ожидаемый тип через дженерик и начальное значение
	// prettier-ignore
	const todoTextInputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		// оператор "!" в TS говорит: следующее значение !== null в любом случае
		const enteredText = todoTextInputRef.current!.value

		if (enteredText.trim().length === 0) {
			return
		}

		props.onAddTodo(enteredText)
	}

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	)
}