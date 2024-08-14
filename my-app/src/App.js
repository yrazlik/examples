//import logo from './logo.svg';
import "./App.css";

import Render from "./1_basic_render/Render";
import ClassComponentWithProps from "./3_props/ClassComponentWithProps";
import ClassComponent from "./2_class_component/ClassComponent";
import ClassComponentWithState from "./4_state/ClassComponentWithState";
import CounterWithState from "./5_counter_with_state/CounterwithState";
import {
  ArrowFunctionComponentWithProps,
  FunctionalComponent,
  FunctionalComponentWithProps,
} from "./6_functional_component/FunctionalComponent";
import ProductPage from "./7_composition/ProductPage";
import ConditionalRendering from "./7_conditional_rendering/ConditionalRendering";
import HttpRequest from "./99_axios/HttpRequest";
import HttpRequestAsyncAwait from "./99_axios/HttpRequestAsyncAwait";
import { NewClassComponent as MyClassComponent } from "./2_class_component/NewClassComponent";
import UseState from "./8_use_state/UseState";
import {
  ButtonWithText,
  DifferentPropsExample,
  HelloWorld,
  HelloWorldArrow,
  HelloWorldArrowWithBody,
  HelloWorldArrowWithJsonProps,
  HelloWorldArrowWithProps,
  HelloWorldWithProps,
} from "./6_functional_component/MyFunctionalComponent";
import NewFunctionalComponent from "./6_functional_component/NewFunctionalComponent";
import FunctionalComponentWithState from "./8_use_state/FunctionalComponentWithState";
import SalePage from "./example/SalePage";
import Timer from "./9_use_effect/UseEffect";
import Form from "./9_use_effect/UseEffect2";
import Game from "./9_use_effect/UseEffect3";
import CounterWithoutUseCallback from "./10_use_callback/WithoutUseCallback";
import CounterWithUseCallback from "./10_use_callback/WithUseCallback";
import ItemList from "./10_use_callback/UseCallback";
import {
  ArrayLengthWithoutUseMemo,
  ArrayLengthWithUseMemo,
} from "./11_use_memo/UseMemo";
import { FocusInput, TextboxText } from "./12_use_ref/UseRef";
import LoginPage from "./13_use_context/LoginPage";
import Status from "./13_use_context/Status";
//import { UserProvider } from "./13_use_context/UserContext";
import { ForLoop, ProductView } from "./14_lists_forms/ListsForms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./15_router/UserContext";
import Login from "./15_router/Login";
import ForgotPassword from "./15_router/ForgotPassword";
import Home from "./15_router/Home";
import ThemeSwitcher from "./16_local_session_storage/ThemeSwitcher";
import SessionTokenManager from "./16_local_session_storage/SessionTokenManager";
import React, { Suspense } from "react";
import {
  LazyLoadedComponent,
  Spinner,
} from "./17_suspense/LazyLoadedComponent";
import { AntDesign } from "./AntDesign";

function App() {
  const showAlert = () => {
    alert("Clickeddddddd");
  };

  const onClickButton = () => {
    alert("Click");
  };

  return (
    <>
      {/* {/* <Render></Render>*/}
      {/* <ClassComponent /> */}
      {/*<MyClassComponent
        buttonName="From Props"
        data={{ name: "Yasin", surname: "Razlık" }}
        onButtonClick={showAlert}
      />*/}
      {/* <ClassComponentWithProps name="Yasin" /> */}
      {/* <ClassComponentWithState /> */}
      {/* <CounterWithState /> */}
      {/* <FunctionalComponent /> */}
      {/*<HelloWorld />*/}
      {/*<HelloWorldWithProps message="Message" />*/}
      {/*<HelloWorldArrow />*/}
      {/*<HelloWorldArrowWithBody></HelloWorldArrowWithBody>*/}
      {/* <HelloWorldArrowWithProps message="msg" />*/}
      {/*<HelloWorldArrowWithJsonProps data={{ name: "Yasin" }} />*/}
      {/* <DifferentPropsExample name="Y" surname="R" />*/}
      {/* <ButtonWithText
        surname="ABC"
        name="Ali"
        onButtonClicked={onClickButton}
      />*/}
      {/* <FunctionalComponentWithProps name="Ali" age="20" /> */}
      {/* <ArrowFunctionComponentWithProps message="props message" /> */}

      {/*<ProductPage
        product={{
          name: "Iphone",
          description: "This is a phone",
          price: "599$",
          imageUrl: "./iphone.jpeg",
        }}
      /> */}

      {/* <ConditionalRendering /> */}
      {/* <FunctionalComponentWithState /> */}
      {/*  <ConditionalRendering isLoggedIn={true} userName={"yrazlik"} /> */}
      {/*<HttpRequest />
      {/* <HttpRequestAsyncAwait />*/}
      {/* <UseState /> */}
      {/* <SalePage />*/}
      {/* <Timer />*/}
      {/*<Form />*/}
      {/* <Game />*/}
      {/*<CounterWithoutUseCallback />*/}
      {/*<CounterWithUseCallback />*/}
      {/*<ItemList />*/}
      {/*<ArrayLengthWithoutUseMemo />*/}
      {/*<ArrayLengthWithUseMemo />*/}
      {/*<FocusInput />*/}
      {/*<TextboxText />*/}
      {/*<UserProvider>
        <div>
          <LoginPage />
          <Status />
        </div>
      </UserProvider>*/}
      {/* <ForLoop elements={[1, 2, 3, 4, 5]} /> */}

      {/*
      <ProductView
        products={[
          {
            image: "./iphone.jpeg",
            title: "IPhone",
            price: "599",
          },
          {
            image: "./samsung.webp",
            title: "Samsung",
            price: "450",
          },
          {
            image: "./motorola.jpeg",
            title: "Motorola",
            price: "400",
          },
          {
            image: "./nokia.jpg",
            title: "Nokia",
            price: "200",
          },
          {
            image: "./huawei.jpeg",
            title: "Huawei",
            price: "350",
          },
        ]}
      />*/}

      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>

      {/* {/*<ThemeSwitcher />*/}
      {/*  <SessionTokenManager />*/}
      {/* <Suspense fallback={<Spinner />}>
        <LazyLoadedComponent />
      </Suspense>*/}
      {/* <AntDesign />*/}
    </>
  );
}

export default App;
