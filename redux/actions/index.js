import unsplash from "../../unsplash.config";

export const setImageList = imageList => {
	return {
		type: "SET_IMAGE_LIST",
		payload: imageList
	}
}

export const setCurrentImage = image => {
	return {
		type: "SET_CURRENT_IMAGE",
		payload: image
	}
}

export const getImageList = ( ) => async dispatch => {
	function onSuccess(res) {
		dispatch({ type: "IMAGE_LIST_FETCHED", payload: res });
		return res;
	}

	function onError(err) {
		dispatch({ type: "IMAGE_LIST_FAILED", payload: err })
	}

	try {
		const res = await fetch(unsplash.photosAPI, {
			headers: {
				"Accept-Version": unsplash.version,
				"Authorization": unsplash.authorization
			}
		})

		const data = await res.json();
		return onSuccess(
			data.map(imageItem => {
				return {
					id: imageItem.id,
					username: imageItem.user.username,
					preview: imageItem.urls.small,
					fullView: imageItem.urls.full
				}
			})
		)
	}
	catch (error) {
		return onError(error)
	}
}