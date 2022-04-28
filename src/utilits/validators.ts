
export const validatePassword = (value: string) => {
	let error: string | undefined = undefined;
	if (!value) {
		error = 'Required';
	}
	return error;
};

export const validateLength = (value: string) => {
	let error: string | undefined = undefined;
	if (!value) {
		error = 'Required';
	} if (value.length > 20) {
		error = 'Must be 20 characters or less';
	}
	return error;
};

export const validateEmail = (value: string) => {
	let error: string | undefined = undefined;
	if (!value) {
		error = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Invalid email address/phone number';
	}
	return error;
};

export const validateTel = (value: string) => {
	let error: string = '';
	if (!value) {
		error = 'Required';
	} else if (!/(?<!\d)\d{10}(?!\d)/i.test(value)) {
		error = 'Invalid email address/phone number';
	}
	return error;
};

export const validateTelAndForamt = (value: string) => {
	let error: string = '';
	if (!value) {
		error = 'Required';
	} else if (!(/(?<!\d)\d{10}(?!\d)/i.test(value) || /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/i.test(value))) {
		error = 'Invalid email address/phone number';
	}
	return error;
};

export const validateEmailOrTel = (value: string) =>
	(validateEmail(value) !== undefined) ? validateTelAndForamt(value) : undefined;