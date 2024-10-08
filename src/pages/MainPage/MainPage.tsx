import styles from "./MainPage.module.scss";
import {Button} from "antd";
import task from "../../store/store.ts";
import CreateTaskCard from "../../components/Card/CreateTaskCard/CreateTaskCard.tsx";
import {observer} from "mobx-react-lite";
import CollapsedTaskCard from "../../components/Card/CollapsedTaskCard/CollapsedTaskCard.tsx";
import TaskCard from "../../components/Card/TaskCard/TaskCard.tsx";

const MainPage = observer(() => {
	const isShow = task.isShowCreateCard;
	const handleClickCreate = () => {
		task.setShowCreateCard(true)
	}
	return (
		<div className={styles.mainContainer}>
			<div className={styles.createTaskBtn}>
				<Button onClick={handleClickCreate} className={styles.createBtnFont}>Создать задачу</Button>
			</div>
			{isShow && <CreateTaskCard/>}
			{
				task.taskArray.map((task, count) =>
					task.subTasks.length !== 0
						? <CollapsedTaskCard key={count} item={task} border={false}/>
						: <TaskCard small={false} key={count} item={task} border={false} left={0}/>)
			}
			{/*<TaskCard small={false}/>*/}
		</div>
	);
});

export default MainPage;
