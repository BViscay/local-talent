import {Textarea} from "@nextui-org/react";

export default function TextArea({user}) {
  const variants = ["flat", "faded", "bordered", "underlined"];

  return (
    <div>
      <div className='flex gap-2 items-center'>
        <div className='w-1 h-6 bg-primary-800'></div>
        <p className='font-Inter font-bold font text-xl'>Mensaje para {user}</p>
      </div>
      <div className='w-full grid grid-cols-12 gap-4'>
        {variants.map((variant) => (
          <Textarea
            key={variant}
            variant={variant}
            labelPlacement='outside'
            placeholder='Ingresa un comentario del servicio'
            className='col-span-12 md:col-span-6 mb-6 md:mb-0'
          />
        ))}
      </div>
    </div>
  );
}
