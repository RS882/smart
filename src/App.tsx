import React, { FC, useEffect } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';
import { closeMenuLng, selectActivLng, selectIsLangMenu, setLanguages } from './redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { strings } from './localization/localization';
import { Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Compare from './components/Compare/Compare';
import Viewed from './components/Viewed/Viewed';
import Favorites from './components/Favorites/Favorites';
import FooterContainer from './components/Footer/FooterContainer';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Main from './components/Main/Main';
import About from './components/About/About';
import Stock from './components/Stock/Stock';
import Installment from './components/Installment/Installment';
import Servise from './components/Servise/Servise';
import Wholesale from './components/Wholesale/Wholesale';
import Contacts from './components/Contacts/Contacts';
import { ArrowFn } from './types/fnTypes';


const AppWrapper = styled(Flex)`
  min-height: 100%;
	overflow: hidden;
	position: relative;
  color:${props => props.theme.color.text.main || `#070C11`};
  line-height: 130%;
  background-color: ${props => props.theme.color.bg.main || `#fff`};
  > main {
		flex: 1 1 auto;
	}
`


const App: FC = (props) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLanguages({
      languages: strings.getAvailableLanguages(),
      activeLanguage: strings.getLanguage(),
    }))
  }, []);

  const isChangeLng = useAppSelector(selectActivLng);
  useEffect(() => {
  }, [isChangeLng]);

  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp: ArrowFn = () => {
    isMenu && dispatch(closeMenuLng());
  };


  return (
    <AppWrapper onClick={onClickApp} direction={'column'}>
      <HeaderContainer />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/viewed' element={<Viewed />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/installment' element={<Installment />} />
        <Route path='/servise' element={<Servise />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <FooterContainer />
    </AppWrapper>
  );
};

export default App;
