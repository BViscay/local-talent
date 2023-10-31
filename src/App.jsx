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
import CategoriesPage from "./views/CategoriesPage";
import NumericValidation from "./views/NumericValidation";
import CreateService from "./views/CreateService";
import Matches from "./views/Matches";
import Notifications from "./views/Notifications";
import EditeProfile from "./views/EditeProfile";
import FilteredServicesByCat from "./views/FilteredServicesByCat";
import Suscriptions from "./views/Suscriptions";
import SearchedServices from "./views/SearchedServices";
import FilteredByLocation from "./views/FilteredByLocation";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/sign-up";
  const isValidatePage = location.pathname === "/validate";

  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className="w-full">
          {!isLoginPage && !isRegisterPage && !isValidatePage && <NavBar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/validate" element={<NumericValidation />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/create-service" element={<CreateService />} />
            <Route path="/matchs" element={<Matches />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/editProfile" element={<EditeProfile />} />
            <Route
              path="/filtered-services"
              element={<FilteredServicesByCat />}
            />
            <Route path="/suscriptions" element={<Suscriptions />} />
            <Route path="/searched-services" element={<SearchedServices />} />
            <Route
              path="/filtered-by-location"
              element={<FilteredByLocation />}
            />
          </Routes>
        </div>
      </NextUIProvider>
    </Provider>
  );
}

export default App;
