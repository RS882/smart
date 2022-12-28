import React from 'react';

const News = React.lazy(() => import('../InDeveloping/News/News'));
const GeneralInformation = React.lazy(() => import('../PrivateOffice/GeneralInformation'));
const PersonalData = React.lazy(() => import('../PrivateOffice/PersonalData'));
const ChangePasswort = React.lazy(() => import('../PrivateOffice/ChangePasswort'));

export const routePrivOff = [
	{ path: '', Component: GeneralInformation, linkText: 'General information', },
	{ path: 'generalInformation', Component: GeneralInformation, linkText: 'General information', },
	{ path: 'personalData', Component: PersonalData, linkText: 'Personal data', },
	{ path: 'shoppingHistory', Component: News, linkText: 'Shopping history', },
	{ path: 'favorites', Component: News, linkText: 'Favorites', },
	{ path: 'changePassword', Component: ChangePasswort, linkText: 'Change password', },
];