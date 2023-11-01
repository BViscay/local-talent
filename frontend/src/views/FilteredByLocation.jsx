import { useSelector } from "react-redux";
import { getNearServices } from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";

export default function FilteredByLocation() {
  const renderServices = useSelector(getNearServices);
  return (
    <div>
      <SearchBar />
      <p>Servicios cercanos ({renderServices.length})</p>
      <div>
        {renderServices.map((service) => (
          <CardService renderServices={service} />
        ))}
      </div>
    </div>
  );
}
