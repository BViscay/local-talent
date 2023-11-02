import { useState, useEffect } from "react";

export default function ResendCode() {
  const [timer, setTimer] = useState(20);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      setShowButton(true);
    }
  }, [timer]);
  const handleClick = () => {
    setTimer(20);
    setShowButton(false);
  };
  return (
    <div className='flex w-full items-center justify-center'>
      {showButton ? (
        <div className='w-4/5 rounded-xl mt-2 bg-primary-400'>
          <button
            onClick={handleClick}
            className='w-4/5 h-full p-4 text-base text-white font-medium'
          >
            Reenviar
          </button>
        </div>
      ) : (
        <div className='w-full rounded-xl mt-2'>
          Reenviar código en {timer} segundos
        </div>
      )}
    </div>
  );
}
