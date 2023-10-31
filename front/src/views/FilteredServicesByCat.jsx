import { useSelector } from "react-redux";
import { getRenderServices } from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";

export default function FilteredServicesByCat() {
  const renderServices = useSelector(getRenderServices);
  return (
    <div>
      <SearchBar />
      <h2>Servicio</h2>
      <div>
        {renderServices.map((service) => (
          <CardService renderServices={service} />
        ))}
      </div>
    </div>
  );
}
