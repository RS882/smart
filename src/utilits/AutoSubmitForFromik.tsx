import React from 'react';
import { useFormikContext } from "formik";
import { useEffect } from "react";

// Automatic sending of the form (for Formik)
const AutoSubmit = () => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => {
		submitForm();
	}, [values, submitForm]);
	return null;
};

export default React.memo(AutoSubmit)