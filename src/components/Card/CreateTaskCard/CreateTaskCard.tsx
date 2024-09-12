import {Button} from "antd";
import task from "../../../store/store.ts";
import styles from "./CreateTaskCard.module.scss";

const CreateTaskCard = () => {
	const handleClickSave = () => {
		task.setShowCreateCard(false)
		task.addTask()
	}

	const handleClickCancel = () => {
		task.setShowCreateCard(false)
		task.setName('')
		task.setDescription('')
	}

	return (
		<div className={styles.card}>
			<input placeholder={"Название задачи"} onChange={(e) => task.setName(e.target.value)} className={styles.cardInput}/>
			<input placeholder={"Добавить описание"} onChange={(e) => task.setDescription(e.target.value)} className={styles.cardInputDescr}/>
			<div className={styles.cardButtons}>
				<Button onClick={handleClickSave}>Сохранить</Button>
				<Button onClick={handleClickCancel}>Отменить</Button>
			</div>
		</div>
	);
};

export default CreateTaskCard;
