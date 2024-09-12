import {Checkbox} from "antd";
import styles from "./TaskCard.module.scss";

interface TaskCardProps {
	small: boolean;
	left?: number;
}

const TaskCard = ({ small } : TaskCardProps) => {
	return (
		<div className={small ? styles.smallTaskCard : styles.taskCard}>
			<p className={small ? styles.smallTaskContent : styles.taskContent}>ewfuiouow</p>
			<Checkbox onClick={(event) => {event.stopPropagation();}}/>
		</div>
	);
};

export default TaskCard;
