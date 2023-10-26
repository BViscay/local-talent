import { useState,useEffect } from "react";

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
    }
   return (
    <div>
      {showButton ? (
         <div className="w-full rounded-xl mt-2 bg-primary-961">
         <button onClick={handleClick} className="w-full h-full p-4 text-base text-primary-962 font-medium">Reenviar</button>
       </div>
      ) : (
        <div className="w-full rounded-xl mt-2">Reenviar código en {timer} segundos</div>
      )}
    </div>
  );
}
