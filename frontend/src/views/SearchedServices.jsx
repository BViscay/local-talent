import { useSelector } from "react-redux";
import { getRenderServices } from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";
import RenderFilters from "../components/FilteredService/RenderFilters";

export default function SearchedServices() {
  const renderServices = useSelector(getRenderServices);
  return (
    <div>
      <SearchBar />
      <RenderFilters />
      <h2 className="border-3 border-t-transparent border-x-transparent p-1">
        Servicios Encontrados ({renderServices.length})
      </h2>
      <div>
        {renderServices.map((service) => (
          <CardService key={service.id} renderServices={service} />
        ))}
      </div>
    </div>
  );
}
