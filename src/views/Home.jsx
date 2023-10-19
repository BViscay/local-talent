import CarrDesc from "../components/Carrousel descuentos/CarrDesc"
import ServCerc from "../components/Servicios cercanos/ServCerc";

export default function Home() {
  return <div className="flex flex-col">
    <CarrDesc />
    <ServCerc />
  </div>;
}
