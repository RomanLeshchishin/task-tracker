import {Button} from "antd";
import task from "../../../store/store.ts";
import styles from "./CreateTaskCard.module.scss";

const CreateTaskCard = () => {
	const isShow = task.isShowCreateCard;
	const handleClickCancel = () => {
		task.setShowCreateCard(false)
	}
	return (
		<div className={styles.card}>
			<input placeholder={"Название задачи"} className={styles.cardInput}/>
			<input placeholder={"Добавить описание"} className={styles.cardInputDescr}/>
			<div className={styles.cardButtons}>
				<Button>Сохранить</Button>
				<Button onClick={handleClickCancel}>Отменить</Button>
			</div>
		</div>
	);
};

export default CreateTaskCard;
