import classes from './TodoItem.module.css'

export const TodoItem: React.FC<{ text: string }> = ({
	text,
}) => {
	return <li className={classes.item}>{text}</li>
}
