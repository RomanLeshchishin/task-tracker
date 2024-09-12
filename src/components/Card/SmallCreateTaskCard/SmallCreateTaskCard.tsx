import task from "../../../store/store.ts";
import styles from "./SmallCreateTaskCard.module.scss";
import {Button} from "antd";

interface SmallCreateTaskCardProps {
	id: string;
	setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallCreateTaskCard = ({ id, setShowCard } : SmallCreateTaskCardProps) => {
	const handleClickSave = (e) => {
		e.stopPropagation()
		setShowCard(false)
		task.addSubTask(id)
	}

	const handleClickCancel = (e) => {
		e.stopPropagation()
		setShowCard(false)
		task.setName('')
		task.setDescription('')
	}

	return (
		<div className={styles.card}>
			<div className={styles.cardInputBlock}>
				<input
					placeholder={"Название задачи"}
					onChange={(e) => task.setName(e.target.value)}
					className={styles.cardInput}
				/>
				<input
					placeholder={"Добавить описание"}
					onChange={(e) => task.setDescription(e.target.value)}
					className={styles.cardInputDescr}
				/>
			</div>
			<div className={styles.cardButtons}>
				<Button onClick={handleClickSave}>Сохранить</Button>
				<Button onClick={handleClickCancel}>Отменить</Button>
			</div>
		</div>
	);
};

export default SmallCreateTaskCard;
