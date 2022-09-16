import React from 'react';

const Compare = React.lazy(() => import('./components/Compare/Compare'));
const Viewed = React.lazy(() => import('./components/Viewed/Viewed'));
const Favorites = React.lazy(() => import('./components/Favorites/Favorites'));
const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));
const About = React.lazy(() => import('./components/About/About'));
const Stock = React.lazy(() => import('./components/Stock/Stock'));
const Installment = React.lazy(() => import('./components/Installment/Installment'));
const Servise = React.lazy(() => import('./components/Servise/Servise'));
const WholesaleDropshipping = React.lazy(() => import('./components/WholesaleDropshipping/WholesaleDropshipping'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));
const Advantages = React.lazy(() => import('./components/Advantages/Advantages'));
const Cooperation = React.lazy(() => import('./components/Cooperation/Cooperation'));
const Affiliate = React.lazy(() => import('./components/Affiliate/Affiliate'));
const Vacancies = React.lazy(() => import('./components/Vacancies/Vacancies'));
const HowToBuy = React.lazy(() => import('./components/HowToBuy/HowToBuy'));
const ShippingAndPayment = React.lazy(() => import('./components/ShippingAndPayment/ShippingAndPayment'));
const Credit = React.lazy(() => import('./components/Credit/Credit'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy/PrivacyPolicy'));
const Faq = React.lazy(() => import('./components/Faq/Faq'));
const Wholesale = React.lazy(() => import('./components/Wholesale/Wholesale'));
const Dropshipping = React.lazy(() => import('./components/Dropshipping/Dropshipping'));

export interface IRouteobj {
	path: string;
	Component: React.LazyExoticComponent<() => JSX.Element>;
	linkText: string;
	componentProps?: object;
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
];