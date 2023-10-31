import CreateServiceForm from "../components/CreateService/CreateServiceForm";

export default function CreateService() {
  return (
    <div className='w-full h-[950px] pt-4 pb-5'>
      <h1 className='text-4xl font-bold text-[#172B4D] text-left pt-2 pl-3 pb-4'>
        Crear un servicio
      </h1>
      <CreateServiceForm />
    </div>
  );
}
