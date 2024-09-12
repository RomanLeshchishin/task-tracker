import { Collapse } from "antd";
import styles from "./CollapsedTaskCard.module.scss";
import TaskCard from "../TaskCard/TaskCard.tsx";
import {TaskType} from "../../../types/TaskType.ts";

interface CollapsedTaskCardProps {
	key: number;
	item: TaskType;
	border: boolean;
}

const CollapsedTaskCard = ({ key, item, border} : CollapsedTaskCardProps) => {
	return (
			<Collapse
				className={styles.collapsedCardContent}
				size={"large"}
				style={border ? {border: "none"} : {}}
				items={
				[
					{
						key: `${key}`,
						label: <TaskCard small={true} item={item} left={0} border={false}/>,
						children: item.subTasks.map((subtask, count) =>
							subtask.subTasks.length !== 0
							? <CollapsedTaskCard key={count} item={subtask} border={true}/>
							: <TaskCard small={true} item={subtask} left={23} border={false}/>
					)
					}
				]
			}
			/>
	);
};

export default CollapsedTaskCard;
