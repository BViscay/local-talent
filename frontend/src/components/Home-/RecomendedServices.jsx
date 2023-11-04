import {ChevronRight, Info} from "lucide-react";
import washMachine from "../../assets/images/wash-machine.png";

export default function RecomendedServices() {
  return (
    <div className='w-full h-[270px] p-4 pt-2 mb-0'>
      <div className='flex gap-2 items-center'>
        <div className='w-1.5 rounded-lg h-6 bg-primary-800'></div>
        <p className='font-Inter font-bold font text-xl'>
          Servicios Recomendados
        </p>
      </div>
      <div className='flex items-end justify-end bg-primary-810 h-[206px] w-full mt-2 rounded-md'>
        <div className='flex h-[206px] flex-col pt-5'>
          <p className='text-sm  self-start ml-3 font-Inter flex'>
            Reparación de Lavarropas
            <Info size={20} />
          </p>
          <button className='bg-white text-primary-951  h-[30px] w-[106px] text-center pb-2 pt-0 mt-5 rounded-[100px] font-Inter'>
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
