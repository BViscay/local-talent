import {useSelector} from "react-redux";
import {getMyServices} from "../redux/sliceFilters";
import CardService from "../components/FilteredService/CardService";

export default function MyServices() {
  const myServices = useSelector(getMyServices);

  return (
    <div>
      <div className='flex items-center pl-5 mt-1'>
        <div className='w-1.5 rounded-lg h-6 bg-primary-600'></div>
        <h1 className='font-[900] text-2xl mx-2'>Mis Servicios</h1>
      </div>
      <div>
        {myServices.map((service) => (
          <CardService key={service.id} renderServices={service} />
        ))}
      </div>
    </div>
  );
}
