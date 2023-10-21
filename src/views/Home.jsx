import Descuentos from "../components/Home-/CarrDesc"
import ServCerc from "../components/Home-/ServCerc"

export default function Home() {
  return <div className="flex flex-col items-center w-full min-h-screen bg-primary-50">
    <ServCerc />
    <Descuentos />
  </div>;
}
