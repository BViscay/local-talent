import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getRenderServices} from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import SearchBar from "../components/Header/SearchBar";
import RenderFilters from "../components/FilteredService/RenderFilters";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export default function SearchedServices() {
  const renderServices = useSelector(getRenderServices);
  const navigate = useNavigate();

  useEffect(() => {
    const showSwal = async () => {
      await Swal.showLoading();
      await Swal.fire({
        title: "Error",
        text: "No se encontró ningún servicio con ese nombre",
        icon: "error",
      });
      navigate("/home");
    };

    if (renderServices.length === 0) {
      showSwal();
    }
  }, [renderServices, navigate]);

  return (
    <div>
      <SearchBar />
      <RenderFilters />
      <div>
        {renderServices.length > 0 && (
          <div>
            <h2 className='border-3 border-t-transparent border-x-transparent p-1'>
              Servicios Encontrados ({renderServices.length})
            </h2>
            <div>
              {renderServices.map((service) => (
                <CardService
                  key={service.id}
                  id={service.id}
                  renderServices={service}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
