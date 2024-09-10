import styles from "./MainPage.module.scss";
import {Button} from "antd";
import task from "../../store/store.ts";
import CreateTaskCard from "../../components/Card/CreateTaskCard.tsx";
import {observer} from "mobx-react-lite";

const MainPage = observer(() => {
	const isShow = task.isShowCreateCard;
	const handleClickCreate = () => {
		task.setShowCreateCard(true)
	}
	return (
		<div className={styles.mainContainer}>
			<div className={styles.createTaskBtn}>
				<Button onClick={handleClickCreate}>Создать задачу</Button>
				{isShow && <CreateTaskCard/>}
			</div>
		</div>
	);
});

export default MainPage;
