export const incNumber = (num) => {
	return {
		type: "INCREMENT",
		payload: num,
	};
};

export const decNumber = (num) => {
	return {
		type: "DECREMENT",
		payload: num,
	};
};

export const multiNumber = (num) => {
	return {
		type: "MULTIPLY",
		payload: num,
	};
};
export const divideNumber = (num) => {
	return {
		type: "DIVISION",
		payload: num,
	};
};
