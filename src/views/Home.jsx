import Descuentos from "../components/Home-/CarrDesc";
import Categories from "../components/Home-/Categories";
import RecomendedServices from "../components/Home-/RecomendedServices";
import ServCerc from "../components/Home-/ServCerc";

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full h-max pb-10 bg-primary-50'>
      <Categories />
      <ServCerc />
      <Descuentos />
      <RecomendedServices />
    </div>
  );
}
