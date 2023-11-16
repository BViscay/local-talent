import {useNavigate} from "react-router-dom";

export default function SuscriptionModal({onClose}) {
  const navigate = useNavigate();
  return (
    <div className='absolute z-30 inset-0 flex items-center justify-center'>
      <div className='z-50  w-10/12 mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700'>
        <main id='content' role='main' className='w-full max-w-md mx-auto p-6'>
          <div className='mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  Debes contratar un plan de suscripción para seguir agregando
                  servicios
                </h1>
              </div>
              <div className='flex w-full justify-center mt-2 gap-2'>
                <button
                  onClick={() => {
                    onClose();
                    navigate("/suscriptions");
                  }}
                  className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary-960 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                >
                  Contratar
                </button>
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary-960 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='z-40 fixed inset-0 bg-black bg-opacity-80'></div>
    </div>
  );
}
