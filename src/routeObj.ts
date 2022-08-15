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
	component: React.LazyExoticComponent<() => JSX.Element>;
	linkText: string
};
//             
export const routeObj: IRouteobj[] = [
	{ path: '/viewed', component: Viewed, linkText: 'Viewed', },
	{ path: '/compare', component: Compare, linkText: 'Compare', },
	{ path: '/favorites', component: Favorites, linkText: 'Favorites', },
	{ path: '/catalog', component: Catalog, linkText: 'Catalog', },
	{ path: '/about', component: About, linkText: 'About', },
	{ path: '/stock', component: Stock, linkText: 'Stock', },
	{ path: '/installment', component: Installment, linkText: 'Installment', },
	{ path: '/servise', component: Servise, linkText: 'Servise', },
	{ path: '/wholesaleDropshipping', component: WholesaleDropshipping, linkText: 'Wholesale dropshipping', },
	{ path: '/contacts', component: Contacts, linkText: 'Contacts', },
	{ path: '/reviews', component: Reviews, linkText: 'Reviews', },
	{ path: '/advantages', component: Advantages, linkText: 'Advantages', },
	{ path: '/affiliate', component: Affiliate, linkText: 'Affiliate', },
	{ path: '/cooperation', component: Cooperation, linkText: 'Cooperation', },
	{ path: '/vacancies', component: Vacancies, linkText: 'Vacancies', },
	{ path: '/howToBuy', component: HowToBuy, linkText: 'How to buy', },
	{ path: '/shippingAndPayment', component: ShippingAndPayment, linkText: 'Shipping and payment', },
	{ path: '/credit', component: Credit, linkText: 'Credit', },
	{ path: '/privacyPolicy', component: PrivacyPolicy, linkText: 'Privacy policy', },
	{ path: '/faq', component: Faq, linkText: 'faq', },
	{ path: '/wholesale', component: Wholesale, linkText: 'Wholesale', },
	{ path: '/dropshipping', component: Dropshipping, linkText: 'Dropshipping', },
];