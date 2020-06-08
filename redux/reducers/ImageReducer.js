const INITIAL_STATE = {
	imageList: [],
	currentImage: {}
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case "SET_IMAGE_LIST":
			return {
				...state,
				imageList: action.payload
			}

		case "SET_CURRENT_IMAGE":
			return {
				...state,
				currentImage: action.payload
			}

		case "IMAGE_LIST_FETCHED":
			return {
				...state,
				imageList: action.payload
			}

		case "IMAGE_LIST_FAILED":
			return state

		default: {
			return state
		}
	}
}