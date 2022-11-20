import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';


// Automatic sending of the form (for Formik)
const AutoSubmit = () => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => { submitForm() }, [values, submitForm]);
	return null;
};

export default AutoSubmit;