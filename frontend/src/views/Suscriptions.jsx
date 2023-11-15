import { useSelector } from "react-redux";
import PricingCard from "../components/CardSuscription/CardSuscription";
import { getProductId } from "../redux/sliceLogin";
import SilverSuscription from "../components/CardSuscription/SilverSuscription";
import GoldSuscription from "../components/CardSuscription/GoldSuscription";

export default function Suscriptions() {
  const userStatus = useSelector(getProductId);
  return (
    <div>
      {userStatus == null && (
        <div>
          <h1 className="mt-2 text-lg font-bold">
            Seleccione uno de los siguientes Planes
          </h1>
          <PricingCard />
        </div>
      )}
      {userStatus == 1 && <SilverSuscription />}
      {userStatus == 2 && <GoldSuscription />}
    </div>
  );
}
