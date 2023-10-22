import "./App.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import LoginForm from "./views/LoginForm";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import NavBar from "./components/Header/Navbar";
import SearchBar from "./components/Header/SearchBar";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <Provider store={store}>
       <NextUIProvider>
      <div className="w-full">
        {!isLoginPage && <NavBar />}
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
      </NextUIProvider>
    </Provider>
  );
}

export default App;
