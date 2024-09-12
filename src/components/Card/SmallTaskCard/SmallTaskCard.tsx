import {Checkbox} from "antd";
import styles from "./SmallTaskCard.module.scss";

const SmallTaskCard = () => {
	return (
		<div className={styles.taskCard}>
			<p className={styles.taskContent}>ewfuiouow</p>
			<Checkbox onClick={(event) => {event.stopPropagation();}}/>
		</div>
	);
};

export default SmallTaskCard;
