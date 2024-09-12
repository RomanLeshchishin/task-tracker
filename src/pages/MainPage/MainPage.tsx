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
			<CollapsedTaskCard/>
			<TaskCard small={false}/>
			<CollapsedTaskCard/>
		</div>
	);
});

export default MainPage;
