import { useSelector } from "react-redux";
import { getFilterByName } from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";

export default function SearchedServices() {
  const renderServices = useSelector(getFilterByName);
  return (
    <div>
      <SearchBar />
      <h2>Servicio</h2>
      <div>
        {renderServices.map((service) => (
          <CardService key={service.id} renderServices={service} />
        ))}
      </div>
    </div>
  );
}
