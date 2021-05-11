export interface IItemInfo {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface IItemForm {
	info: IItemInfo;
	isOpen: boolean;
	onDismiss: () => void;
}
