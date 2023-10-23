import { ChevronRight } from "lucide-react";
const ServCerc = () => {
  return (
    <div className='flex flex-col w-full bg-white  p-2 my-2'>
      <div className='flex items-center justify-between mx-2 mt-1'>
        <div className='w-1 h-6 bg-primary-800'></div>
        <p className='font-Inter font-bold font text-xl'>Servicios Cercanos</p>
        <button className='bg-white text-primary-958 self-start ml-3 p-1 border-1.5  rounded-[100px] font-Inter'>
          <span className='flex justify-center text-sm items-center'>
            Ver Todos <ChevronRight />
          </span>
        </button>
      </div>
      <div className='w-full flex flex-row items-start justify-start overflow-x-auto'>
        <div className='flex gap-3 max-w-screen-xl mx-auto p-4'>
          <div className='w-36 h-48 flex flex-col '>
            <img
              className='h-44 object-cover rounded-2xl'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspoaFmktd8eOMfgHYrxVmWxpPcH4wUi4MdA&usqp=CAU'
              alt=''
            />
            <p className='text-sm text-primary-959'>Casas</p>
          </div>
          <div className='w-36 h-48 flex flex-col '>
            <img
              className='h-44 object-cover rounded-2xl'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspoaFmktd8eOMfgHYrxVmWxpPcH4wUi4MdA&usqp=CAU'
              alt=''
            />
            <p className='text-sm text-primary-959'>Oficinas</p>
          </div>
          <div className='w-36 h-48 flex flex-col '>
            <img
              className='h-44 object-cover rounded-2xl'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspoaFmktd8eOMfgHYrxVmWxpPcH4wUi4MdA&usqp=CAU'
              alt=''
            />
            <p className='text-sm text-primary-959'>Albañileria</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServCerc;
