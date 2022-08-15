export class Todo {
	// в отличие от JS, где был бы просто конструктор
	// в TS мы ещё объявляет типы полей, присваевымых там
	id: string
	randomCountForId: string
	text: string

	constructor(todoText: string) {
		this.randomCountForId = Math.random().toFixed(2)
		this.id =
			new Date().toISOString() + this.randomCountForId
		this.text = todoText
	}
}
