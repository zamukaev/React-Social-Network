export const required = (value) => {
	if (value) return undefined;
	return 'Field is required!!!'
}
export const maxLengthCreator = (maxLength, minLength = null) => (value) => {
	if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
	else if (minLength && value.length < minLength) return `Min length is ${minLength} symbols `;
	return undefined;
}