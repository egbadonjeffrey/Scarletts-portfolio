import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/mobile-preview/Header";
import Screens from "../components/mobile-preview/Screens";
import TransitionEffect from "../components/TransitionEffect";
import Loading from "../image/Screens/kickshub-mocks/loading-screen.png";
import Signup from "../image/Screens/kickshub-mocks/signup-screen.png";
import Login from "../image/Screens/kickshub-mocks/login-screen.png";
import Home from "../image/Screens/kickshub-mocks/home-screen.png";
import OutOfStock from "../image/Screens/kickshub-mocks/out-of-stock-image.png";
import SingleProduct from "../image/Screens/kickshub-mocks/single-product-main.png";
import Cart from "../image/Screens/kickshub-mocks/cart-main.png";
import Address from "../image/Screens/kickshub-mocks/add-address-page.png";
import PaymentMethod from "../image/Screens/kickshub-mocks/payment-method-main.png";
import ShowTotal from "../image/Screens/kickshub-mocks/show-total01.png";
import ShowTotal2 from "../image/Screens/kickshub-mocks/show-total.png";
import OrderModal from "../image/Screens/kickshub-mocks/show-order-modal.png";
import ConfirmDetails from "../image/Screens/kickshub-mocks/show-payment-and-total01.png";
import ConfirmDetails2 from "../image/Screens/kickshub-mocks/show-payment-and-total.png";
import PayFinal from "../image/Screens/kickshub-mocks/pay-later-screen.png";

const ScreensMocks = [
  {
    title: "LOADING",
    image: Loading,
  },
  {
    title: "SIGN UP",
    image: Signup,
  },
  {
    title: "LOGIN",
    image: Login,
  },
  {
    title: "HOME",
    image: Home,
  },
  {
    title: "SINGLE PRODUCT",
    image: SingleProduct,
  },
  {
    title: "OUT OF STOCK",
    image: OutOfStock,
  },
  {
    title: "CART",
    image: Cart,
  },
  {
    title: "ADDRESS FORM",
    image: Address,
  },
  {
    title: "PAYMENT METHOD",
    image: PaymentMethod,
  },
  {
    title: "SHOW TOTAL 1",
    image: ShowTotal,
  },
  {
    title: "SHOW TOTAL 2",
    image: ShowTotal2,
  },
  {
    title: "ORDER MODAL",
    image: OrderModal,
  },
  {
    title: "CONFIRM DETAILS 1",
    image: ConfirmDetails,
  },
  {
    title: "CONFIRM DETAILS 2",
    image: ConfirmDetails2,
  },
  {
    title: "PAY FINAL",
    image: PayFinal,
  },
];

const KicksHub = () => {
  return (
    <>
      <TransitionEffect />
      <Container>
        <HeaderComponent title="Kicks Hub (Expo)" />
        <Screens ScreensMocks={ScreensMocks} />
      </Container>
    </>
  );
};

export default KicksHub;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  z-index: -1;
`;
