import {Checkbox} from "antd";
import styles from "./TaskCard.module.scss";
import {DeleteTwoTone, PlusOutlined} from "@ant-design/icons";
import {TaskType} from "../../../types/TaskType.ts";
import task from "../../../store/store.ts";
import SmallCreateTaskCard from "../SmallCreateTaskCard/SmallCreateTaskCard.tsx";
import {useState} from "react";

interface TaskCardProps {
	small: boolean;
	item: TaskType;
	left: number;
	border: boolean;
}

const TaskCard = ({ item, small, left, border } : TaskCardProps) => {
	const [showSmallCreateCard, setShowSmallCreateCard] = useState(false);

	const handleClickPlus = (e: any) => {
		e.stopPropagation()
		setShowSmallCreateCard(true)
	}

	const handleClickCheckbox = (e: any) => {
		e.stopPropagation()
		task.completeTask(item.id)
	}

	const handleClickDelete = (e: any) => {
		e.stopPropagation()
		task.deleteTask(item.id)
	}

	return (
		<div className={small ? styles.smallTaskCard : styles.taskCard} style={border ? {border:"none"}:{}}>
			<div className={small ? styles.smallTaskCardMainBlock : styles.taskCardMainBlock} style={small ? {marginLeft:`${left}px`} : {}}>
				<p className={small ? styles.smallTaskContent : styles.taskContent}>{item.name}</p>
				<div className={small ? styles.smallTaskRightBlock : styles.taskRightBlock}>
					<div className={small ? styles.smallTaskButtons : styles.taskButtons}>
						<PlusOutlined
							onClick={handleClickPlus}
							style={{color: "#4096ff"}}/>
						<Checkbox onClick={handleClickCheckbox} checked={item.isCompleted}/>
					</div>
					<DeleteTwoTone onClick={handleClickDelete} twoToneColor={"red"}/>
				</div>
			</div>
			{showSmallCreateCard && <SmallCreateTaskCard id={item.id} setShowCard={setShowSmallCreateCard}/>}
		</div>
	);
};

export default TaskCard;
