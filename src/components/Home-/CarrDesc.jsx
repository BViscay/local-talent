import { ChevronRight, Info } from "lucide-react";
const Descuentos = () => {
  const descuentos = [
    "Descuento en Instalacion de A/A",
    "Descuento en Limpieza",
    "Descuento en Barberia",
    "Descuento servicio de Fletes",
  ];

  return (
    <div className='w-full bg-white flex flex-row items-start justify-start overflow-x-auto p-3 my-1'>
      <div className='max-w-screen-xl mx-auto p-1'>
        <div className='flex items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <div className='p-2 w-72 h-40 flex flex-col justify-center items-center bg-primary-952 shadow rounded-xl'>
            <p className='text-sm self-start ml-3 font-Inter flex'>
              {descuentos[0]}{" "}
              <span>
                {" "}
                <Info size={20} />
              </span>
            </p>
            <p className='font-inter text-5xl self-start ml-3 my-3 text-gray-600 font-semibold'>
              10% off
            </p>
            <button className='bg-gray-100 text-primary-953 self-start ml-3 p-2 rounded-[100px] font-Inter'>
              <span className='flex justify-center text-sm items-center'>
                Ver Todos <ChevronRight />
              </span>
            </button>
          </div>
          <div className='p-4 w-72 h-40 flex flex-col justify-center items-center bg-primary-950 shadow rounded-xl'>
            <p className='text-sm  self-start ml-3 font-Inter flex'>
              {descuentos[1]} <Info size={20} />
            </p>
            <p className='text-5xl self-start ml-3 my-3 text-gray-600 font-semibold'>
              15% off
            </p>
            <button className='bg-white text-primary-951 self-start ml-3 p-2 rounded-[100px] font-Inter'>
              <span className='flex justify-center text-sm items-center'>
                Ver Todos <ChevronRight />
              </span>
            </button>
          </div>
          <div className='p-4 w-72 h-40 flex flex-col justify-center items-center bg-primary-954 shadow rounded-xl'>
            <p className='text-sm ml-3 self-start flex font-Inter'>
              {descuentos[2]}
              <Info size={20} />
            </p>
            <p className='text-5xl self-start ml-3 my-3 text-gray-600 font-semibold'>
              20% off
            </p>
            <button className='bg-gray-100 text-primary-955 self-start ml-3 p-1 rounded-[100px] font-Inter'>
              <span className='flex justify-center text-sm items-center'>
                Ver Todos <ChevronRight />
              </span>
            </button>
          </div>
          <div className='p-4 w-72 h-40 flex flex-col justify-center items-center bg-primary-956 shadow rounded-xl'>
            <p className='text-sm self-start flex font-Inter ml-3'>
              {descuentos[3]}
              <Info size={20} />
            </p>
            <p className='text-5xl self-start ml-3 my-3 text-gray-600 font-semibold'>
              10% off
            </p>
            <button className='bg-gray-100 text-primary-957 self-start ml-3 p-2 rounded-[100px] font-Inter'>
              <span className='flex justify-center text-sm items-center'>
                Ver Todos <ChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descuentos;
