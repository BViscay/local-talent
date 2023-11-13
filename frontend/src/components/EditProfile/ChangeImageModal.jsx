import {useForm} from "react-hook-form";
import Input from "../Shared/Input";
export default function ChangeImageModal({onClose, handleUserImage}) {
  const {handleSubmit, register} = useForm();

  return (
    <div className='fixed  z-30 inset-0 flex items-center justify-center'>
      <div className='z-50 w-10/12 mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700'>
        <main id='content' role='main' className='w-full max-w-md mx-auto p-6'>
          <div className='mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  Cambia tu Imagen
                </h1>
              </div>
              <div className='mt-5'>
                <form
                  onSubmit={handleSubmit((data) => {
                    handleUserImage(data);
                  })}
                >
                  <div className='grid gap-y-4'>
                    <div>
                      <div className='relative'>
                        <div className='mb-3 w-[90%]'>
                          <Input
                            labelText='Actualizar Imagen'
                            type='file'
                            accept='image/jpeg,image/png,image/gif'
                            placeholder='Seleccione la nueva imagen'
                            name='image'
                            register={register}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                    >
                      Cambiar Imagen
                    </button>
                    <button
                      onClick={onClose}
                      className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary-960 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                    >
                      Volver
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='z-40 fixed inset-0 bg-black bg-opacity-80'></div>
    </div>
  );
}
