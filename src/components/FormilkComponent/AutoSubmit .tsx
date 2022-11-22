import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';


// Automatic sending of the form (for Formik)
const AutoSubmit1 = () => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => {
		console.log('submit');

		submitForm()

	}, [values, submitForm]);
	return null;
};

export default AutoSubmit1;