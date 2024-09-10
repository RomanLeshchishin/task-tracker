import {makeAutoObservable} from "mobx";

class Task {
	isShowCreateCard = false


	constructor() {
		makeAutoObservable(this)
	}

	setShowCreateCard(isShowCreateCard: boolean) {
		this.isShowCreateCard = isShowCreateCard;
	}
}

export default new Task();
