import "./App.css";
import { Route, Routes  } from "react-router-dom";
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
import Error404 from "./views/Error404";
import Loader from './components/Loader/Loader';
import useLoader from './hooks/useLoader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import useKey from './hooks/useKey';
import RecomendedServicesView from "./views/RecomendedServicesView";


function App() {
  const location = useLocation();
  const { loaderValue } = useLoader()

  const [ error404 ] = useKey('error404')
  
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/sign-up";
  const isValidatePage = location.pathname === "/validate";

  return (
      <NextUIProvider>
        <div className="w-full">
          {loaderValue && <Loader/>}
          {!isLoginPage && !isRegisterPage && !isValidatePage && !error404 && <NavBar />}

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
            <Route path='/my-services' element={<ProtectedRoute><MyServices/></ProtectedRoute>} />
            <Route path='/recomended-services' element={<ProtectedRoute><RecomendedServicesView/></ProtectedRoute>} />
            <Route path="/about" element={<About />} />
            <Route path="/suscriptions" element={<Suscriptions/>}/>
            <Route path='/billing' element={<Billing />} />
            <Route path='/modifications' element={<Modifications/>}/>
            <Route path='/active-services' element={ <ProtectedRoute><ActiveServices /></ProtectedRoute> } />
            <Route path='/editCategory' element={<ProtectedRoute><EditCategory/></ProtectedRoute>} />
            <Route path='/create-new-category' element={<ProtectedRoute><FormNewCat/></ProtectedRoute>} />
            <Route path='/consultations-claims' element={<ProtectedRoute><InboxAdmin/></ProtectedRoute>} />
            <Route path='/create-service' element={<ProtectedRoute><CreateService/></ProtectedRoute>} />
            <Route path='/matchs' element={<ProtectedRoute><Matches/></ProtectedRoute>} />
            <Route path='/notifications' element={<ProtectedRoute><Notifications/></ProtectedRoute>} />
            <Route path='/editProfile' element={<ProtectedRoute><EditeProfile/></ProtectedRoute>} />
            <Route path="/qualify" element={<ProtectedRoute><RatingMatch/></ProtectedRoute>} />
            
            <Route path='/users' element={ <ProtectedRoute><Users/></ProtectedRoute>  } />
            <Route path='/dashboard' element={<ProtectedRoute><DashboardAdmin/></ProtectedRoute>} />
            <Route path='/dashboard-admin' element={ <ProtectedRoute><DashboardAdmin/></ProtectedRoute> } />
           
            <Route path="*" element={<Error404/>}/>

          </Routes>

        </div>
      </NextUIProvider>
  );
}

export default App;
