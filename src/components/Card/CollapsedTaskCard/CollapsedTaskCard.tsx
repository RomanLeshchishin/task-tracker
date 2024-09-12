import { Collapse } from "antd";
import styles from "./CollapsedTaskCard.module.scss";
import TaskCard from "../TaskCard/TaskCard.tsx";

const CollapsedTaskCard = () => {
	return (
			<Collapse
				className={styles.collapsedCardContent}
				size={"large"}
				items={
				[
					{
						key: '1',
						label:
							<TaskCard small={true}/>,
						children:
							<TaskCard small={true}/>,
					}
				]
			}
			/>
	);
};

export default CollapsedTaskCard;
