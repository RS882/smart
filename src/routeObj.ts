import React from 'react';

const Compare = React.lazy(() => import('./components/InDeveloping/Compare/Compare'));
const Viewed = React.lazy(() => import('./components/InDeveloping/Viewed/Viewed'));
const Favorites = React.lazy(() => import('./components/InDeveloping/Favorites/Favorites'));
const Catalog = React.lazy(() => import('./components/InDeveloping/Catalog/Catalog'));
const About = React.lazy(() => import('./components/InDeveloping/About/About'));
const Stock = React.lazy(() => import('./components/InDeveloping/Stock/Stock'));
const Installment = React.lazy(() => import('./components/InDeveloping/Installment/Installment'));
const Servise = React.lazy(() => import('./components/InDeveloping/Servise/Servise'));
const WholesaleDropshipping = React.lazy(() => import('./components/InDeveloping/WholesaleDropshipping/WholesaleDropshipping'));
const Contacts = React.lazy(() => import('./components/InDeveloping/Contacts/Contacts'));
const Reviews = React.lazy(() => import('./components/InDeveloping/Reviews/Reviews'));
const Advantages = React.lazy(() => import('./components/InDeveloping/Advantages/Advantages'));
const Cooperation = React.lazy(() => import('./components/InDeveloping/Cooperation/Cooperation'));
const Affiliate = React.lazy(() => import('./components/InDeveloping/Affiliate/Affiliate'));
const Vacancies = React.lazy(() => import('./components/InDeveloping/Vacancies/Vacancies'));
const HowToBuy = React.lazy(() => import('./components/InDeveloping/HowToBuy/HowToBuy'));
const ShippingAndPayment = React.lazy(() => import('./components/InDeveloping/ShippingAndPayment/ShippingAndPayment'));
const Credit = React.lazy(() => import('./components/InDeveloping/Credit/Credit'));
const PrivacyPolicy = React.lazy(() => import('./components/InDeveloping/PrivacyPolicy/PrivacyPolicy'));
const Faq = React.lazy(() => import('./components/InDeveloping/Faq/Faq'));
const Wholesale = React.lazy(() => import('./components/InDeveloping/Wholesale/Wholesale'));
const Dropshipping = React.lazy(() => import('./components/InDeveloping/Dropshipping/Dropshipping'));
const News = React.lazy(() => import('./components/InDeveloping/News/News'));
const PrivateOffice = React.lazy(() => import('./components/PrivateOffice/PrivateOffice'));

export interface IRouteobj {
	path: string;
	Component: React.LazyExoticComponent<() => JSX.Element>;
	linkText: string;
	componentProps?: object;
	childrRout?: IRouteobj[];
};
// Object for links for route         
export const routeObj: IRouteobj[] = [
	{ path: '/viewed', Component: Viewed, linkText: 'Viewed', },
	{ path: '/compare', Component: Compare, linkText: 'Compare', },
	{ path: '/favorites', Component: Favorites, linkText: 'Favorites', },
	{ path: '/catalog', Component: Catalog, linkText: 'Catalog', },
	{ path: '/about', Component: About, linkText: 'About', },
	{ path: '/stock', Component: Stock, linkText: 'Stock', },
	{ path: '/installment', Component: Installment, linkText: 'Installment', },
	{ path: '/servise', Component: Servise, linkText: 'Servise', },
	{ path: '/wholesaleDropshipping', Component: WholesaleDropshipping, linkText: 'Wholesale dropshipping', },
	{ path: '/contacts', Component: Contacts, linkText: 'Contacts', },
	{ path: '/reviews', Component: Reviews, linkText: 'Reviews', },
	{ path: '/advantages', Component: Advantages, linkText: 'Advantages', },
	{ path: '/affiliate', Component: Affiliate, linkText: 'Affiliate', },
	{ path: '/cooperation', Component: Cooperation, linkText: 'Cooperation', },
	{ path: '/vacancies', Component: Vacancies, linkText: 'Vacancies', },
	{ path: '/howToBuy', Component: HowToBuy, linkText: 'How to buy', },
	{ path: '/shippingAndPayment', Component: ShippingAndPayment, linkText: 'Shipping and payment', },
	{ path: '/credit', Component: Credit, linkText: 'Credit', },
	{ path: '/privacyPolicy', Component: PrivacyPolicy, linkText: 'Privacy policy', },
	{ path: '/faq', Component: Faq, linkText: 'faq', },
	{ path: '/wholesale', Component: Wholesale, linkText: 'Wholesale', },
	{ path: '/dropshipping', Component: Dropshipping, linkText: 'Dropshipping', },
	{ path: '/news', Component: News, linkText: 'News', },
	{ path: '/privateOffice/*', Component: PrivateOffice, linkText: 'Private office', },
];


