import {useSelector} from "react-redux";
import {getNearServices} from "../../redux/sliceFilters";
import { isLogged } from "../../redux/sliceLogin";
import useFilters from "../../hooks/useFilters";

import {ChevronRight} from "lucide-react";
import IndividualServiceCerc from "./IndividualServiceCerc";

const ServCerc = () => {
  const nearServices = useSelector(getNearServices);
  const isLoggedIn = useSelector(isLogged);
  const {handleFilterByServiceId} =useFilters()
  const activateSpinner = nearServices.length;

  return (
    <div className='flex flex-col w-full bg-white items p-2 my-2'>
      <div className='flex items-center justify-between mx-2 mt-1'>
        <div className='w-1 h-6 bg-primary-800'>
          <div className='w-52'>
            <p className='font-Inter font-bold font text-xl items-start ml-2'>
              Servicios Cercanos
            </p>
          </div>
        </div>
        <button className='bg-white text-primary-958 self-start ml-3 p-1 border-1.5  rounded-[100px] font-Inter'>
          <span className='flex justify-center text-sm items-center'>
            Ver Todos <ChevronRight />
          </span>
        </button>
      </div>

      {activateSpinner ? (
        <div className='w-full flex flex-row gap-3 h-52 overflow-x-auto pl-3 pt-3'>
          {nearServices.length &&
            nearServices.map((service) => (
              <IndividualServiceCerc
                key={service.id}
                id = {service.id}
                image={service.image}
                category={service.categoryName}
                handleFilterByServiceId = {handleFilterByServiceId}
              />
            ))}
        </div>
      ) : (
        <div className='flex justify-center items-center h-32'>
          {isLoggedIn ? (
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900'></div>
          ) : (
            <p className='font-Inter font text-xl text-gray-400'>
              Debes loguearte para ver tus servicios cercanos
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default ServCerc;
