import { logger } from "@utils/logger";

const url = "https://jsonplaceholder.typicode.com/posts";

export const getRequestPosts = async () => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Request failed(${response.status}): ${response.statusText}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		logger.error(error);
		return null;
	}
};
