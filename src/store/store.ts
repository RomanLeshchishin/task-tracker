import {makeAutoObservable} from "mobx";
import {TaskType} from "../types/TaskType.ts";
import { v4 as uuidv4 } from "uuid";
import {
	recursionAddSubTask,
	recursionCompleteTask,
	recursionDeleteTask,
	recursionEditTaskDescription,
	recursionEditTaskName
} from "../utils/task.ts";

class Task {
	isShowCreateCard: boolean = false;
	taskArray: TaskType[] = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
	currentTask: TaskType = {} as TaskType;
	taskName: string = '';
	taskDescription: string = '';

	constructor() {
		makeAutoObservable(this)
	}

	setShowCreateCard(isShowCreateCard: boolean) {
		this.isShowCreateCard = isShowCreateCard;
	}

	setName(name: string) {
		this.taskName = name;
	}

	setDescription(description: string) {
		this.taskDescription = description;
	}

	addTask = () => {
		if (this.taskName.trim().length) {
			this.taskArray.push({
				id: uuidv4(),
				name: this.taskName,
				description: this.taskDescription,
				isCompleted: false,
				subTasks: []
			});
		}

		localStorage.setItem('tasks', JSON.stringify(this.taskArray))
		this.taskName = ''
		this.taskDescription = ''
	}

	addSubTask = (id: string) => {
		if (this.taskName.trim().length) {
			const task: TaskType = {
				id: uuidv4(),
				name: this.taskName,
				description: this.taskDescription,
				isCompleted: false,
				subTasks: []
			}

			this.taskArray = recursionAddSubTask(id, this.taskArray, task)
			localStorage.setItem('tasks', JSON.stringify(this.taskArray))
			this.taskName = ''
			this.taskDescription = ''
		}
	}

	deleteTask = (id: string) => {
		this.taskArray = recursionDeleteTask(id, this.taskArray)
		localStorage.setItem('tasks', JSON.stringify(this.taskArray))

		if (this.taskArray.length === 0) {
			localStorage.removeItem('tasks');
		}
	}

	completeTask = (id: string) => {
		this.taskArray = recursionCompleteTask(id, this.taskArray)
		localStorage.setItem('tasks', JSON.stringify(this.taskArray))
		// функция отметки родительской задачи, если все подзадачи отмечены
	}

	editTaskName = (id: string) => {
		if (this.taskName.trim().length) {
			this.taskArray = recursionEditTaskName(id, this.taskArray, this.taskName)
			localStorage.setItem('tasks', JSON.stringify(this.taskArray))
		}
	}

	editTaskDescription = (id: string) => {
		this.taskArray = recursionEditTaskDescription(id, this.taskArray, this.taskDescription)
		localStorage.setItem('tasks', JSON.stringify(this.taskArray))
	}
}

export default new Task();
