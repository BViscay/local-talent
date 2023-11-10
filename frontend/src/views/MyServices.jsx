import { useEffect } from "react";
import useFilters from "../hooks/useFilters";
import { useSelector } from "react-redux";
import { getMyServices } from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";

export default function MyServices() {
  const { handleFilterOwnServices } = useFilters();
  const myServices = useSelector(getMyServices);
  useEffect(() => {
    handleFilterOwnServices();
  }, []);

  return (
    <div>
      <div className="mt-3 text-xl font-bold">Mis Servicios</div>
      <div>
        {myServices.map((service) => (
          <CardService key={service.id} renderServices={service} />
        ))}
      </div>
    </div>
  );
}
