import {useEffect} from "react";
import Descuentos from "../components/Home-/CarrDesc";
import Categories from "../components/Home-/Categories";
import RecomendedServices from "../components/Home-/RecomendedServices";
import ServCerc from "../components/Home-/ServCerc";
import useLogin from "../hooks/useLogin";
import SearchBar from "../components/Header/SearchBar";

export default function Home() {
  const {handleTokenLogin} = useLogin();

  useEffect(() => {
    handleTokenLogin();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='flex flex-col items-center w-full h-max pb-10 bg-primary-50'>
      <SearchBar/>
      <Categories />
      <ServCerc />
      <Descuentos />
      <RecomendedServices />
    </div>
  );
}
