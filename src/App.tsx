import React, { FC, Suspense, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Flex from './components/Flex';
import { closeMenuLng, selectActivLng, selectIsLangMenu, setLanguages } from './redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { strings } from './localization/localization';
import { Route, Routes } from 'react-router-dom';
import { ArrowFn } from './types/fnTypes';
import { selectIsBodyLock, selectModalOpacity, selectScrollWidth, setScrollWidth } from './redux/ModalSlice';
import store from './redux/store';
import DropDownMenu from './components/Header/DropDownMenu/DropDownMenuContainer';
import ModalContainer from './components/Modal/ModalContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import HeaderBottomContainer from './components/Header/HeaderBottomContainer/HeaderBottomContainer';



// const ModalContainer = React.lazy(() => import('./components/Modal/ModalContainer'));
// const DropDownMenu = React.lazy(() => import('./components/Header/DropDownMenu/DropDownMenuContainer'));
// const HeaderBottomContainer = React.lazy(() => import('./components/Header/HeaderBottomContainer/HeaderBottomContainer'));
// const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));
const Main = React.lazy(() => import('./components/Main/Main'));
const Compare = React.lazy(() => import('./components/Compare/Compare'));
const Viewed = React.lazy(() => import('./components/Viewed/Viewed'));
const Favorites = React.lazy(() => import('./components/Favorites/Favorites'));
const FooterContainer = React.lazy(() => import('./components/Footer/FooterContainer'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
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

interface IAppProps {
  ref: React.RefObject<HTMLDivElement>;
  appScroll?: string;

}

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
`;

const StyledAppRef = styled.div.attrs(props => ({ ref: props.ref, })) <IAppProps>`
  /* padding-right: ${props => props.appScroll};
  border: 1px solid #000; */
`;

const App: FC = (props) => {

  const dispatch = useAppDispatch();
  //заносим в стейт данные о языках
  useEffect(() => {
    dispatch(setLanguages({
      languages: strings.getAvailableLanguages(),
      activeLanguage: strings.getLanguage(),
    }))
  }, []);
  const appRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // определяем ширину полосы прокрутки и диспачим ее в стейт
    const elem = appRef.current;
    if (elem !== null) {
      elem.style.overflowY = `scroll`;
      dispatch(setScrollWidth(elem.offsetWidth - elem.clientWidth));
      elem.style.overflowY = `auto`;
    };
  }, []);
  //------------------------------------
  // ререндерим при смене языка
  const isChangeLng = useAppSelector(selectActivLng);
  useEffect(() => {
  }, [isChangeLng]);
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

  // // получаем значение ширины полосы прокрутки
  // const scrollWidth: number = useAppSelector(selectScrollWidth);
  // //+ убираем сдивиг при пропадении полосу прокрутки
  // const appScroll: string = `${isBodyLock ? scrollWidth : 0}px`;
  // // document.body.style.paddingRight = `${isBodyLock ? scrollWidth : 0}px`;

  console.log(store.getState());
  return (
    <StyledAppRef ref={appRef} >

      <AppWrapper onClick={onClickApp} direction={'column'}>
        <DropDownMenu title={strings.header.dropMenu.title} />
        <ModalContainer opacity={modalOpacity} />
        <HeaderContainer />
        <HeaderBottomContainer strings={strings.header.bottomBtn} />
        <Suspense fallback={<div>Загрузка...</div>}>
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
            <Route path='/wholesaleDropshipping' element={<WholesaleDropshipping />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/advantages' element={<Advantages />} />
            <Route path='/cooperation' element={<Cooperation />} />
            <Route path='/affiliate' element={<Affiliate />} />
            <Route path='/vacancies' element={<Vacancies />} />
            <Route path='/howToBuy' element={<HowToBuy />} />
            <Route path='/shippingAndPayment' element={<ShippingAndPayment />} />
            <Route path='/credit' element={<Credit />} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/wholesale' element={<Wholesale />} />
            <Route path='/dropshipping' element={<Dropshipping />} />
          </Routes>
          <FooterContainer />
        </Suspense>
      </AppWrapper>
    </StyledAppRef>
  );
};


export default App;
