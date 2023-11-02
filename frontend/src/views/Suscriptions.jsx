import useSuscriptions from "../hooks/useSuscriptions";

export default function Suscriptions() {
  const { handleSilverSuscription, handleGoldSuscription } = useSuscriptions();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className="text-2xl font-bold mb-2">Nuestras suscripciones</p>
        <div className="bg-primary-100 rounded-lg p-4 mb-4">
          <p className="text-lg">
            Oro: 10 publicaciones durante 3 meses
          </p>
        </div>
        <div className="bg-primary-100 rounded-lg p-4 mb-4">
          <p className="text-lg">
            Plata: 5 publicaciones durante 2 meses
          </p>
        </div>
        <button
          onClick={handleSilverSuscription}
          className="w-36 text-white font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover-bg-cyan-900 mb-4"
        >
          Plata
        </button>
        <button
          onClick={handleGoldSuscription}
          className="w-36 text-white font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover-bg-cyan-900"
        >
          Oro
        </button>
      </div>
    </div>
  );
}
