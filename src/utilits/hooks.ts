
import { useState } from 'react';

// Hook that returns an array of two elements 1- brown value if the focus on the element or not
// 2 an object of two functions onblur and onfocus that change the value of 1, depending on is the focus not an element or not
// Hook accepts two arguments 1- DOP Function for the Onblur 2 - additional function for ONFOCUS

export const useFocusedField = (obBlurFn?: (e: React.FocusEvent<any, Element>) => void, onFocusFn?: (e: React.FocusEvent<any, Element>) => void,)
	: [boolean, { onBlur: (e: React.FocusEvent<HTMLInputElement>) => void, onFocus: (e: React.FocusEvent<HTMLInputElement>) => void }] => {
	const [isActive, setIsActive] = useState(false);

	return [isActive, {
		onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
			obBlurFn !== undefined && obBlurFn(e);
			setIsActive(false);
		},
		onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
			onFocusFn !== undefined && onFocusFn(e);
			setIsActive(true);
		},
	}];
};