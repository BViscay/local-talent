import { Textarea } from "@nextui-org/react";

export default function TextArea({setValue}) {
  
  return (
    <div className='w-11/12 mt-5 p-5 shadow-xl bg-slate-100 rounded-xl h-max justify-center items-center'>
      <div>
        <div className='flex gap-2 pl-1 items-center'>
          <div className='w-1.5 rounded-lg h-6 bg-primary-600'></div>
          <p className='font-Inter font-bold text-lg'>
            Mensaje para el prestador
          </p>
        </div>
        <div className='w-full grid grid-cols-12 gap-4'>
          <Textarea
            variant='bordered'
            labelPlacement='outside'
            placeholder='Ingresa un comentario al prestador del servicio'
            className='col-span-12 md:col-span-6 mb-6 md:mb-0'
            onValueChange={setValue}
            minRows={9}

          />
        </div>
      </div>
    </div>
  );
}
