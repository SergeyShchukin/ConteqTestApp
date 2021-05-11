import * as React from "react";
import { Panel } from "office-ui-fabric-react";
import { Formik, Field, Form } from "formik";

import "./ItemInfo.scss";
import { IItemForm } from "./IItemInfo";

export const ItemInfo = (props: IItemForm) => {
	return (
		<>
			<Panel isBlocking={false} headerText={`Пост №${props.info.id}`} isOpen={props.isOpen} onDismiss={props.onDismiss} closeButtonAriaLabel="Закрыть">
				<Formik initialValues={{ id: props.info.id, userId: props.info.userId, title: props.info.title, body: props.info.body }} onSubmit={(values, actions) => {}}>
					<Form>
						<label>
							<b>ID</b>
							<Field readOnly name="id" />
						</label>
						<label>
							<b>User ID</b>
							<Field readOnly name="userId" />
						</label>
						<label>
							<b>Название</b>
							<Field readOnly rows="2" name="title" component="textarea" />
						</label>
						<label>
							<b>Текст</b>
							<Field readOnly rows="8" name="body" component="textarea" />
						</label>
					</Form>
				</Formik>
			</Panel>
		</>
	);
};
