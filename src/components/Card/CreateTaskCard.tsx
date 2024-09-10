import {Button} from "antd";
import task from "../../store/store.ts";

const CreateTaskCard = () => {
	const isShow = task.isShowCreateCard;
	const handleClickCancel = () => {
		task.setShowCreateCard(false)
	}
	return (
		<div>
			<input/>
			<input/>
			<Button>Сохранить</Button>
			<Button onClick={handleClickCancel}>Отменить</Button>
		</div>
	);
};

export default CreateTaskCard;
