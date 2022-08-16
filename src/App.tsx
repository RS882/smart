import React, { FC, Suspense, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';
import { closeMenuLng, selectIsLangChange, selectIsLangMenu, } from './redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { strings } from './localization/localization';
import { Route, Routes } from 'react-router-dom';
import { ArrowFn } from './types/fnTypes';
import { changeIsBodyLock, selectIsBodyLock, selectModalOpacity, selectScrollWidth } from './redux/ModalSlice';
import DropDownMenu from './components/Header/DropDownMenu/DropDownMenuContainer';
import ModalContainer from './components/Modal/ModalContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import HeaderBottomContainer from './components/Header/HeaderBottomContainer/HeaderBottomContainer';
import { loadLanguage, setLanguages, setScrollWidth } from './redux/Thunk/thunkInitApp';
import { initializatedSuccess, selectInitializated, setIsRetina } from './redux/AppSlice';
import PreloaderContainer from './components/Preloader/PreloaderContainer';
import { isRetina } from './utilits/functions';
import LoginContainer from './components/Login/LoginContainer';
import { selectIsPopUp } from './redux/LoginSlice';
import { selectIsFetching } from './redux/ItemSlice';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { routeObj } from './routeObj';
import { Global } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FooterContainer from './components/Footer/FooterContainer';
import WithSuspense from './components/HOC/WithSuspense';
import Main from './components/Main/Main'
const Cart = React.lazy(() => import('./components/Cart/Cart'));


interface IAppProps {
  ref: React.RefObject<HTMLDivElement>;
  appScroll?: string;

}

const AppWrapper = styled(Flex)`
  min-height: 100%;
	overflow: hidden;
	position: relative;
  color:${props => props.theme.color.text.main || `#070C11`};
  font-size: ${props => props.theme.font.size || `16px`};
  line-height: 130%;
  background-color: ${props => props.theme.color.bg.main || `#fff`};
  > main {
		flex: 1 1 auto;
	}
`;

const StyledAppRef = styled.div.attrs(props => ({ ref: props.ref, })) <IAppProps>`
   /* width: ${props => `calc(100% - ${props.appScroll})`}; */
   padding-right: ${props => props.appScroll};
   height: 100%;

`;

const App: FC = () => {

  const dispatch = useAppDispatch();
  //заносим в стейт данные о языках
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([
      dispatch(changeIsBodyLock(true)),
      dispatch(setLanguages(strings)),
      dispatch(loadLanguage(strings)),
      dispatch(setScrollWidth(appRef)),
      dispatch(setIsRetina(isRetina())),
    ])
      .then(() => {
        setTimeout(() => dispatch(initializatedSuccess()), 500);
      })
      .then(() => dispatch(changeIsBodyLock(false)))
  }, []);


  //------------------------------------

  // закрываем меню выбора языка при клике на любой точке
  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp: ArrowFn = () => {
    isMenu && dispatch(closeMenuLng());
  };

  // прозрачность модальго окна
  const modalOpacity: string = useAppSelector(selectModalOpacity)
  // лочим страницу если isBodyLock true( сработало модальное окно) 
  const isBodyLock: boolean = useAppSelector(selectIsBodyLock);
  document.body.style.overflow = isBodyLock ? 'hidden' : 'auto';

  // получаем значение ширины полосы прокрутки
  const scrollWidth: number = useAppSelector(selectScrollWidth);
  //+ убираем сдивиг при пропадении полосу прокрутки
  const appScroll: string = `${isBodyLock ? scrollWidth : 0}px`;


  const initialazatedApp = useAppSelector(selectInitializated);
  const isLangChange = useAppSelector(selectIsLangChange);
  const isLoginBoxOpen = useAppSelector(selectIsPopUp);
  const isFetching = useAppSelector(selectIsFetching);

  const RouteElements: JSX.Element[] = routeObj.map((e, i) =>
    <Route key={e.linkText + i} path={e.path}
      element={WithSuspense(e.Component)({ ...e.componentProps })} />);

  if (!initialazatedApp) {
    // console.log(store.getState());
    return (
      <div ref={appRef}>
        <PreloaderContainer />
      </div>
    )

  } else {
    console.log(store.getState());
    return (
      <StyledAppRef appScroll={appScroll}>
        {isLangChange || isFetching ? <PreloaderContainer /> : null}
        <AppWrapper onClick={onClickApp} direction={'column'}>
          {isLoginBoxOpen ? <LoginContainer /> : null}
          <DropDownMenu />
          <ModalContainer opacity={modalOpacity} />
          <HeaderContainer appScroll={appScroll} />
          <HeaderBottomContainer appScroll={appScroll} />
          {/* <Breadcrumbs /> */}
          <Routes>
            <Route index element={<Main />} />
            <Route path='/cart' element={WithSuspense(Cart)({ rrr: '1234' })} />
            {RouteElements}
          </Routes>
          <FooterContainer />

        </AppWrapper>
      </StyledAppRef>
    );
  }
};





const AppContainer = () => {
  return (
    <>
      <React.StrictMode >
        <BrowserRouter basename='/smart'>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Global />
              <App />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
    </>
  );
};

export default React.memo(AppContainer);
