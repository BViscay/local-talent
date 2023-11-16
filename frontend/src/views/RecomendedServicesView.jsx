import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAllServices} from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";
import RenderFilters from "../components/FilteredService/RenderFilters";
import Swal from "sweetalert2";

export default function RecomendedServicesView() {
  const renderServices = useSelector(getAllServices);
  const navigate = useNavigate();
  const filteredServices = renderServices.filter(
    (service) => service.user.productId !== null
  );

  useEffect(() => {
    const showSwal = async () => {
      await Swal.showLoading();
      await Swal.fire({
        title: "Error",
        text: "No se encontró ningún servicio recomendado para tu zona",
        icon: "error",
      });
      navigate("/home");
    };

    if (filteredServices.length === 0) {
      showSwal();
    }
  }, [filteredServices, navigate]);

  return (
    <div>
      <div className='flex items-center pl-3 mt-2'>
        <div className='w-1.5 rounded-lg h-6 bg-primary-600'></div>
        <h1 className='font-[900] text-2xl mx-2'>Recomendados</h1>
      </div>
      <RenderFilters />
      <div>
        {filteredServices.length > 0 && (
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
