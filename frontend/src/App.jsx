import "./App.css";
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
import ServiceDetail from "./views/ServiceDetail";
import FilteredByLocation from "./views/FilteredByLocation";
import MyMap from "./components/MyMap/MyMap";
import MyServices from "./views/MyServices";
import DashboardAdmin from "./views/DashboardAdmin";
import ActiveServices from "./components/Dashboard-/ActiveServices";
import Modifications from "./components/Dashboard-/Modifications";
import Users from "./components/Dashboard-/Users";
import Billing from "./components/Dashboard-/Billing";
import InboxAdmin from "./components/Dashboard-/ImboxAdmin";
import RatingMatch from "./components/RatingMatch/RatingMatch";
import FormNewCat from "./components/Dashboard-/FormNewCat";
import EditCategory from "./components/Dashboard-/EditCategory";
import About from "./views/About";
import Loader from './components/Loader/Loader';
import useLoader from './hooks/useLoader';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  const location = useLocation();
  const { loaderValue } = useLoader()

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/sign-up";
  const isValidatePage = location.pathname === "/validate";


  return (
      <NextUIProvider>
        <div className="w-full">
          {loaderValue && <Loader/>}
          {!isLoginPage && !isRegisterPage && !isValidatePage && <NavBar />}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/validate' element={<NumericValidation />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path='/my-location' element={<MyMap />} />
            <Route path="/filtered-services" element={<FilteredServicesByCat />}/>
            <Route path="/searched-services" element={<SearchedServices />} />
            <Route path="/filtered-by-location" element={<FilteredByLocation />}/>
            <Route path="/about" element={<About />} />
            
            <Route path="/suscriptions" element={<Suscriptions/>}/>
            <Route path='/users' element={<Users/>} />
            <Route path='/billing' element={<Billing />} />
            <Route path='/modifications' element={<Modifications/>}/>
            
            <Route path='/dashboard-admin' element={ <ProtectedRoute><DashboardAdmin/></ProtectedRoute> } />
            <Route path='/active-services' element={ <ProtectedRoute><ActiveServices /></ProtectedRoute> } />
            <Route path='/editCategory' element={<ProtectedRoute><EditCategory/></ProtectedRoute>} />
            <Route path='/create-new-category' element={<ProtectedRoute><FormNewCat/></ProtectedRoute>} />
            <Route path='/consultations-claims' element={<ProtectedRoute><InboxAdmin/></ProtectedRoute>} />
            <Route path='/dashboard' element={<ProtectedRoute><DashboardAdmin/></ProtectedRoute>} />
            <Route path='/create-service' element={<ProtectedRoute><CreateService/></ProtectedRoute>} />
            <Route path='/my-services' element={<ProtectedRoute><MyServices/></ProtectedRoute>} />
            <Route path='/matchs' element={<ProtectedRoute><Matches/></ProtectedRoute>} />
            <Route path='/notifications' element={<ProtectedRoute><Notifications/></ProtectedRoute>} />
            <Route path='/editProfile' element={<ProtectedRoute><EditeProfile/></ProtectedRoute>} />
            <Route path="/qualify" element={<ProtectedRoute><RatingMatch/></ProtectedRoute>} />
            
          </Routes>
        </div>
      </NextUIProvider>
  );
}

export default App;
