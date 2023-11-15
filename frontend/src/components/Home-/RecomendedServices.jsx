import {ChevronRight} from "lucide-react";
import washMachine from "../../assets/images/wash-machine.png";

export default function RecomendedServices() {
  return (
    <div className='w-full max-w-xl h-[270px] p-4 pt-2 mb-0'>
      <div className='flex gap-2 items-center'>
        <div className='w-1.5 rounded-lg h-6 bg-primary-800'></div>
        <p className='font-Inter font-bold font text-xl text-left'>
          Servicios Recomendados
        </p>
      </div>
      <div className='flex bg-primary-810 h-[206px] w-full mt-2 rounded-md'>
        <div className='flex h-[206px] flex-col pt-5 justify-start items-start'>
          <p className='text-sm text-left mt-5 pl-3 font-Inter flex'>
            Los mejores prestadores, a un click de distancia
          </p>
          <button className='bg-white text-primary-966  h-[30px] w-[106px] text-center ml-3 pb-2 pt-0 mt-10 rounded-[100px] font-Inter'>
            <span className='flex justify-center h-[30px] w-[106px] text-sm items-center'>
              Ver Todos <ChevronRight />
            </span>
          </button>
        </div>
        <img className='rounded-r-md' src={washMachine} alt='' />
      </div>
    </div>
  );
}
