import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';
import { closeMenuLng, selectIsLangMenu, } from './redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { strings } from './localization/localization';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { setIsCartPage } from './redux/CartSlice';


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

  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We initiate a statement
    Promise.all([
      dispatch(changeIsBodyLock(true)),// Block scrolling the screen
      dispatch(setLanguages(strings)),//Install the language
      dispatch(loadLanguage(strings)),//We load languages
      dispatch(setScrollWidth(appRef)),// set the size of the scroll strip
      dispatch(setIsRetina(isRetina())),// Determine the Retina display
    ])
      .then(() => {
        setTimeout(() => dispatch(initializatedSuccess()), 500);
      })
      .then(() => dispatch(changeIsBodyLock(false)))// We unlock the screen scroll
  }, []);

  const catchAllError = (error: PromiseRejectionEvent) => {
    // We transmit error messages to stat
    dispatch(setErrorMessage(error.reason.message))
    //console.log("Error occurred: " + error.reason.message);
  };

  useEffect(() => {
    // Catch the rampant load errors
    window.addEventListener('unhandledrejection', catchAllError);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  //------------------------------------

  // Close the language selection menu when clicking on any point
  const isMenu = useAppSelector(selectIsLangMenu);
  const onClickApp: ArrowFn = () => { isMenu && dispatch(closeMenuLng()) };

  // The transparency of the modal window
  const modalOpacity: string = useAppSelector(selectModalOpacity)
  // Block the page scrolling if the isbodyLock true (the modal window worked)
  const isBodyLock: boolean = useAppSelector(selectIsBodyLock);
  document.body.style.overflow = isBodyLock ? 'hidden' : 'auto';

  // Get the width of the scroll strip
  const scrollWidth: number = useAppSelector(selectScrollWidth);
  //+ Remove the shift when disappeared the scroll strip
  const appScroll: string = `${isBodyLock ? scrollWidth : 0}px`;

  // You initialized the application?
  const initialazatedApp = useAppSelector(selectInitializated);
  //Login window open?
  const isLoginBoxOpen = useAppSelector(selectIsPopUp);
  // Data downloads?
  const isFetching = useAppSelector(selectIsPreloader);

  // We form a block from route windows of windows
  const RouteElements: JSX.Element[] = routeObj.map((e, i) =>
    <Route key={e.linkText + i} path={e.path}
      element={WithSuspense(e.Component)({ ...e.componentProps })} />);

  // We give out a message about processed errors
  const errorMessage = useAppSelector(selectErrorMessage);

  // Close the error message window
  const onClickErrorPopUp = () => {
    dispatch(delErrorMessage());
    dispatch(closePopUp());
    dispatch(changeIsBodyLock(false));
    dispatch(setIsFeching(false));
  };
  //Registration message, login
  const message = useAppSelector(selectLoginMessage)

  // If the basket is open, we report this in stat
  const path = useLocation().pathname
  useEffect(() => {
    dispatch(setIsCartPage(path === '/cart'))
  }, [path]);

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
          {/* drop-down menu */}
          <DropDownMenu />
          <ModalContainer opacity={modalOpacity} />
          <HeaderContainer appScroll={appScroll} />
          {/* Part of the Header menu with a decrease in the screen exchange is visible below */}
          <HeaderBottomContainer appScroll={appScroll} />
          {/* <Breadcrumbs /> */}
          <Routes>
            <Route index element={<Main />} />
            <Route path='/cart' element={WithSuspense(Cart)({})} />
            {RouteElements}
            {/* Page 404 */}
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
