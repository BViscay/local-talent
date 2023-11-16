import {useSelector} from "react-redux";
import {getProductId} from "../../redux/sliceLogin";
import {getMyServices} from "../../redux/sliceFilters";
import {useNavigate} from "react-router-dom";
import {PlusCircle} from "lucide-react";
import useLogin from "../../hooks/useLogin";
import SuscriptionModal from "./SuscriptionModal";

export default function CreateServiceBtn({menuOpen, setMenuOpen}) {
  const navigate = useNavigate();
  const suscription = useSelector(getProductId);
  const myServices = useSelector(getMyServices);
  const {isModalOpen, handleCloseModal, handleOpenModal} = useLogin();
  const silver = suscription === 1;
  const numberOfServices = myServices.length;

  const handleClick = () => {
    navigate("/create-service");
    setMenuOpen(!menuOpen);
  };

  if (suscription === null && numberOfServices > 1) {
    return (
      <div className='w-full py-2'>
        <div
          onClick={handleOpenModal}
          className='w-full flex p-3 items-center gap-2 bg-white rounded-lg cursor-pointer'
        >
          <PlusCircle
            size={28}
            strokeWidth={2.2}
            className='text-primary-600'
          />
          <p className='text-[#266DD3] font-extrabold text-lg'>
            Crear Servicio
          </p>
        </div>
        {isModalOpen && <SuscriptionModal onClose={handleCloseModal} />}
      </div>
    );
  } else if (silver && numberOfServices >= 3) {
    return (
      <div className='w-full py-2'>
        <div
          onClick={handleOpenModal}
          className='w-full flex p-3 items-center gap-2 bg-white rounded-lg cursor-pointer'
        >
          <PlusCircle
            size={28}
            strokeWidth={2.2}
            className='text-primary-600'
          />
          <p className='text-[#266DD3] font-extrabold text-lg'>
            Crear Servicio
          </p>
        </div>
        {isModalOpen && <SuscriptionModal onClose={handleCloseModal} />}
      </div>
    );
  } else {
    return (
      <div className='w-full py-2'>
        <div
          onClick={handleClick}
          className='w-full flex p-3 items-center gap-2 bg-white rounded-lg cursor-pointer'
        >
          <PlusCircle
            size={28}
            strokeWidth={2.2}
            className='text-primary-600'
          />
          <p className='text-[#266DD3] font-extrabold text-lg'>
            Crear Servicio
          </p>
        </div>
        {isModalOpen && <SuscriptionModal onClose={handleCloseModal} />}
      </div>
    );
  }
}
