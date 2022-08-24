import React from 'react'
import classes from './TodoItem.module.css'

export const TodoItem: React.FC<{
	text: string,
	onRemoveTodo: (event: React.MouseEvent) => void,
}> = ({ text, onRemoveTodo }) => {
	return (
		<li className={classes.item} onClick={onRemoveTodo}>
			{text}
		</li>
	)
}
