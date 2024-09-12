import {TaskType} from "../types/TaskType.ts";

export const recursionAddSubTask = (id: string, arrayTasks: TaskType[], task: TaskType) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		if (item.id === id) {
			item.subTasks.push(task);
			arr.push(item);
		}
		else {
			arr.push({...item, subTasks: recursionAddSubTask(id, item.subTasks, task)})
		}

		return arr;
	}, [])
};

export const recursionDeleteTask = (id: string, arrayTasks: TaskType[]) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		if(item.id !== id)
		{
			arr.push({...item, subTasks: recursionDeleteTask(id, item.subTasks)})
		}

		return arr
	}, [])

};

export const recursionCompleteTask = (id: string, arrayTasks: TaskType[]) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		if (item.id !== id) {
			arr.push({...item, subTasks: recursionCompleteTask(id, item.subTasks)});
		} else {
			arr.push({
				...item,
				isCompleted: !item.isCompleted,
				subTasks: recursionCompleteSubTask(item.subTasks, !item.isCompleted)
			});
		}

		return arr;
	}, []);
};

export const recursionCompleteSubTask = (arrayTasks: TaskType[], state: boolean) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		arr.push({
			...item,
			isCompleted: state,
			subTasks: recursionCompleteSubTask(item.subTasks, state)
		});

		return arr;
	}, []);
};

export const recursionEditTaskName = (id: string, arrayTasks: TaskType[], taskName: string) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		if (item.id === id) {
			arr.push({...item, name: taskName});
		}
		else {
			arr.push({...item, subTasks: recursionEditTaskName(id, item.subTasks, taskName)})
		}

		return arr;
	}, [])
}

export const recursionEditTaskDescription = (id: string, arrayTasks: TaskType[], taskDescription: string) => {
	return arrayTasks.reduce((arr: TaskType[], item) => {
		if (item.id === id) {
			arr.push({...item, description: taskDescription});
		}
		else {
			arr.push({...item, subTasks: recursionEditTaskDescription(id, item.subTasks, taskDescription)})
		}

		return arr;
	}, [])
}
