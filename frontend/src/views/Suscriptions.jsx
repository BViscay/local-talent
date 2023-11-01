import useSuscriptions from "../hooks/useSuscriptions";

export default function Suscriptions() {
  const {handleSilverSuscription, handleGoldSuscription} = useSuscriptions();

  return (
    <div className='flex w-full gap-5 items-center justify-center'>
      <div>
        <button
          onClick={handleSilverSuscription}
          className='flex self-center items-center justify-center w-36 mr-2 -ml-4  text-white  font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900'
        >
          Plata
        </button>
      </div>
      <div>
        <button
          onClick={handleGoldSuscription}
          className='flex self-center items-center justify-center w-36 mr-2 -ml-4  text-white  font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900'
        >
          Oro
        </button>
      </div>
    </div>
  );
}
