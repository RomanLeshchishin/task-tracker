export type TaskType = {
	id: string;
	name: string;
	description: string;
	isCompleted: boolean;
	subTasks: TaskType[];
}
