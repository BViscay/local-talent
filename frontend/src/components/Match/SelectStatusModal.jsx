import {Button} from "@nextui-org/react";
import useMatches from "../../hooks/useMatches";
import {useNavigate} from "react-router-dom";
export default function SelectStatusModal({
  onClose,
  matchId,
  serviceId,
  isMyMatches,
}) {
  const {
    handleAcceptStatusChange,
    handleCancelOwnStatusChange,
    handleCancelStatusChange,
  } = useMatches();
  const navigate = useNavigate();

  const handleClick = () => {
    onClose();
    handleAcceptStatusChange(serviceId, matchId);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10'>
      <div className='z-50 w-[90%] max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700'>
        <div className='mt-7 bg-white rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-4 sm:p-7'>
            <div className='flex items-center justify-center mb-7'></div>
            <div className='text-center'>
              <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                Selecciona el estado de tu match
              </h1>
            </div>
            <div className='mt-5 w-full justify-center items-center gap-3 flex flex-col'>
              {!isMyMatches && (
                <div>
                  <Button
                    onClick={handleClick}
                    className='bg-green-500/30 text-green-500 font-semibold text-lg w-36'
                  >
                    Confirmar
                  </Button>
                </div>
              )}

              {isMyMatches && (
                <Button
                  onClick={() => handleCancelOwnStatusChange(matchId)}
                  className='bg-red-500/30 text-red-500 font-semibold text-lg w-36'
                >
                  Cancelar
                </Button>
              )}

              {!isMyMatches && (
                <Button
                  onClick={() => handleCancelStatusChange(matchId)}
                  className='bg-red-500/30 text-red-500 font-semibold text-lg w-36'
                >
                  Cancelar
                </Button>
              )}
              <Button
                onClick={() => navigate("/qualify")}
                className='bg-primary-900 text-primary-100 font-semibold text-lg w-36'
              >
                Calificar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='z-40 fixed inset-0 bg-black bg-opacity-80'></div>
    </div>
  );
}
