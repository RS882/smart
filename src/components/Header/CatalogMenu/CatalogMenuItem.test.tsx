import { create } from 'react-test-renderer';
import React from 'react';
import CatalogMenuItem from './CatalogMenuItem';

describe('Catalog menu Item - test component', () => {
	const component = create(<CatalogMenuItem iconClass='test' menuItem={{ test: 'test' }}
		onClickCatalogItem={() => { }} />)
	const instance = component.root;

	test('The component is created ', () => {
		expect(instance).not.toBeNull()
	});

	test('The element with the desired class will find', () => {
		// eslint-disable-next-line testing-library/await-async-query
		const className = instance.findAllByType('div');
		expect(className.filter(e => e.props.className && e.props.className.includes('test')).length).not.toBe(0)
	});
});