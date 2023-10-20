import Descuentos from "../components/Carrousel descuentos/CarrDesc"
import ServCerc from "../components/Servicios cercanos/ServCerc";

export default function Home() {
  return <div className="flex flex-col items-center w-full min-h-screen">
    <Descuentos />
    <ServCerc />
  </div>;
}
