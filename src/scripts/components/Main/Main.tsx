import * as React from "react";

import { ErrorMessage } from "@components/ErrorMessage";
import { Loading } from "@components/Loading";

import { IProps } from "./IMain";

import { getRequestPosts } from "../../services/services";
import { PostList } from "@components/PostList";

export const Main = (props: IProps) => {
	const [posts, getPosts] = React.useState([]);

	React.useEffect(() => {
		getRequestPosts().then((result) => getPosts(result));
	}, []);

	if (posts == null) return <ErrorMessage message="Произошла ошибка, проверьте консоль" />;
	if (posts.length == 0) return <Loading label="Загрузка" />;
	return <PostList items={posts} />;
};
