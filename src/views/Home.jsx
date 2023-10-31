
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getLocation} from "../redux/sliceLogin";

import useLogin from "../hooks/useLogin";
import useGeoLocation from "../hooks/useGeoLocation";
import useFilters from "../hooks/useFilters";

import Descuentos from "../components/Home-/CarrDesc";
import Categories from "../components/Home-/Categories";
import RecomendedServices from "../components/Home-/RecomendedServices";
import ServCerc from "../components/Home-/ServCerc";
import SearchBar from "../components/Header/SearchBar";
import Greet from "../components/Header/Greet";

export default function Home() {

  const {handleTokenLogin} = useLogin();
  const {handleGeoLocation} = useGeoLocation();
  const {handleFilterByLocation, handleAllServices} = useFilters();
  const location = useSelector(getLocation);


  useEffect(() => {
    const fetchData = async () => {
      await handleGeoLocation();
      await handleAllServices();
    };
    handleTokenLogin();
    fetchData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (location) {
      handleFilterByLocation(location);
    }
  }, [location, handleFilterByLocation]);

  return (
    <div className="flex flex-col items-center w-full h-max pb-10 bg-primary-50">
      <Greet />
      <SearchBar />
      <Categories />
      <ServCerc />
      <Descuentos />
      <RecomendedServices />
    </div>
  );
}
