import React from 'react'
import { TodoItem } from './TodoItem'
import { Todo } from '../models/todo'
import classes from './Todos.module.css'

export const Todos: React.FC<{ items: Todo[] }> = ({
	items,
}) => {
	return (
		<ul className={classes.todos}>
			{items.map((el) => (
				<TodoItem key={el.id} text={el.text} />
			))}
		</ul>
	)
}
