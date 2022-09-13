import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';
import { closeMenuLng, selectIsLangMenu, } from './redux/LanguageSlice';
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
import { closePopUp, selectIsPopUp, selectLoginMessage } from './redux/LoginSlice';

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
import { delErrorMessage, selectErrorMessage, setErrorMessage } from './redux/ErrorSlice';
import LoginMessage from './components/Login/LoginForm/LoginMessage/LoginMessage';
import { selectIsPreloader, setIsFeching } from './redux/PreloaderSlice';
import LoginMessageContainer from './components/Login/LoginForm/LoginMessage/LoginMessageContainer';


const Cart = React.lazy(() => import('./components/Cart/Cart'));


interface IAppProps {
  ref: React.RefObject<HTMLDivElement>;
  appScroll?: string;

};

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

  const catchAllError = (error: PromiseRejectionEvent) => {
    dispatch(setErrorMessage(error.reason.message))
    //console.log("Error occurred: " + error.reason.message);
  };

  useEffect(() => {
    window.addEventListener('unhandledrejection', catchAllError);

    return () => {
      window.removeEventListener('unhandledrejection', catchAllError);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  //------------------------------------

  // закрываем меню выбора языка при клике на любой точке
  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp: ArrowFn = () => { isMenu && dispatch(closeMenuLng()) };

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

  const isLoginBoxOpen = useAppSelector(selectIsPopUp);
  const isFetching = useAppSelector(selectIsPreloader);

  const RouteElements: JSX.Element[] = routeObj.map((e, i) =>
    <Route key={e.linkText + i} path={e.path}
      element={WithSuspense(e.Component)({ ...e.componentProps })} />);


  const errorMessage = useAppSelector(selectErrorMessage);
  const onClickErrorPopUp = () => {
    dispatch(delErrorMessage());
    dispatch(closePopUp());
    dispatch(changeIsBodyLock(false));
    dispatch(setIsFeching(false));
  }
  const message = useAppSelector(selectLoginMessage)

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
        {errorMessage ? <LoginMessage message={errorMessage} onClickOk={onClickErrorPopUp} /> : null}
        {message ? <LoginMessageContainer /> : null}
        {isFetching ? <PreloaderContainer /> : null}
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
            <Route path='*' element={<div>404 NOT FOUND</div>} />
          </Routes>
          <FooterContainer />

        </AppWrapper>
      </StyledAppRef>
    );
  }
};





const AppContainer = () => {
  return (
    <React.StrictMode >
      <BrowserRouter basename='/smart'>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Global />
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default React.memo(AppContainer);
