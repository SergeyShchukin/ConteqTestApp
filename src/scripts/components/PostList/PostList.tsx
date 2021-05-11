import * as React from "react";
import { DetailsList, DetailsListLayoutMode, SelectionMode, TextField } from "office-ui-fabric-react";

import "./PostList.scss";
import { IProps } from "./IPostList";
import { IItemInfo, ItemInfo } from "../ItemInfo";
import { useBoolean } from "@fluentui/react-hooks";

export const PostList = (props: IProps) => {
	const columns = [
		{ key: "id", name: "ID", fieldName: "id", minWidth: 20, maxWidth: 20, isResizable: false },
		{ key: "userId", name: "User ID", fieldName: "userId", minWidth: 50, maxWidth: 50, isResizable: false },
		{ key: "title", name: "Название", fieldName: "title", minWidth: 100, maxWidth: 200, isResizable: true },
		{ key: "body", name: "Текст", fieldName: "body", minWidth: 200, maxWidth: 300, isResizable: true },
	];

	const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

	const [item, setItem] = React.useState<IItemInfo>();
	const handleChange = (item: IItemInfo) => {
		setItem((i) => item);
		openPanel();
	};

	const [items, setItems] = React.useState(props.items);
	const handleFilter = (ev: React.ChangeEvent<HTMLInputElement>, text: string) => {
		setItems(() => (text ? props.items.filter((i: IItemInfo) => i.title.toLowerCase().indexOf(text) > -1) : props.items));
	};

	return (
		<>
			<TextField className="filterField" label="Фильтр по названию: " onChange={handleFilter} />
			<div className="listDetails" data-is-scrollable="true">
				<DetailsList
					items={items}
					columns={columns}
					setKey="set"
					selectionMode={SelectionMode.none}
					isHeaderVisible={true}
					layoutMode={DetailsListLayoutMode.justified}
					onItemInvoked={handleChange}
				/>
			</div>
			{item && <ItemInfo info={item} isOpen={isOpen} onDismiss={dismissPanel} />}
		</>
	);
};
