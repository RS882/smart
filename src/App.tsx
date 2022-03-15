import React, { FC, useEffect } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';

import { closeMenuLng, selectActivLng, selectIsLangMenu, setLanguages } from './redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { strings } from './localization/localization';
import { ArrowFn } from './components/types';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, Routes } from 'react-router-dom';
import Compare from './components/Compare/Compare';
import Viewed from './components/Viewed/Viewed';
import Favorites from './components/Favorites/Favorites';
import FooterContainer from './components/Footer/FooterContainer';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Main from './components/Main/Main';

interface IAppWrapper {
  onClickApp?: ArrowFn;
};

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


const App: FC<IAppWrapper> = (props) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLanguages({
      languages: strings.getAvailableLanguages(),
      activeLanguage: strings.getLanguage(),
    }))
  });

  const isChangeLng = useAppSelector(selectActivLng);
  useEffect(() => {
  }, [isChangeLng]);

  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp = () => {
    isMenu && dispatch(closeMenuLng());
  }


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
      </Routes>

      <FooterContainer />
    </AppWrapper>
  );
};

export default App;
