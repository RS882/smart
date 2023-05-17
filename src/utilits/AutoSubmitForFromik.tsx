import React from 'react';
import { useFormikContext } from "formik";
import { useEffect } from "react";

// Automatic sending of the form (for Formik)
const AutoSubmit = ({ isSubmit = true }: { isSubmit?: boolean }) => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => {
		submitForm();
	}, [values, submitForm, isSubmit]);
	return null;
};

export default React.memo(AutoSubmit)