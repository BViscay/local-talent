import {useSelector} from "react-redux";
import {getRenderServices} from "./sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";
import useFilters from "../hooks/useFilters";

export default function FilteredServicesByCat() {
  const renderServices = useSelector(getRenderServices);
  const { handleFilterByServiceId } = useFilters();
  
  return (
    <div>
      <SearchBar />
      <div>
        {renderServices.map((service) => (
          <CardService
            key={service.id}
            id={service.id}
            handleFilterByServiceId={handleFilterByServiceId}
            renderServices={service}
          />
        ))}
      </div>
    </div>
  );
}
