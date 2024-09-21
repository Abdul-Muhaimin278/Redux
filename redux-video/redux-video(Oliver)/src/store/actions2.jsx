export const AddToCart = (item) => {
	return {
		type: "PURCHASE",
		payload: item,
	};
};

export const RemoveFromCart = (deleteItemObj) => {
	return {
		type: "REMOVE",
		payload: deleteItemObj,
	};
};
