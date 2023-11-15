import { Card } from "@material-tailwind/react";
import useSuscriptions from "../../hooks/useSuscriptions";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/sliceLogin";

export default function GoldSuscription() {
  const { handleCancelSuscription } = useSuscriptions();
  const dispatch = useDispatch();
  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <Card className="w-[90%] bg-blue-200">
        <p className="text-xl font-bold mt-5 text-black ">
          Estas suscripto al Plan Gold
        </p>
        <p className="text-blue-600  text-sm self-start pl-5 mt-3">
          Actualmente cuentas con estos beneficios:{" "}
        </p>
        <ul className="flex items-start flex-col">
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">Mas Servicios</h2>
            <p className="text-blue-600 text-sm ml-1">Servicios Ilimitados</p>
          </li>
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">Mas Matches</h2>
            <p className="text-blue-600 text-sm ml-1">Matches Ilimitados</p>
          </li>
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">Mejor Posicionamiento</h2>
            <p className="text-blue-600 text-sm ml-1">
              Apareceras al principio de las busquedas
            </p>
          </li>
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">
              Aparicion en Productos Recomendados
            </h2>
            <p className="text-blue-600 text-sm ml-1">
              Tus servicios entraran en esta seccion exclusiva
            </p>
          </li>
        </ul>
        <button
          onClick={handleCancelSuscription}
          className="p-2 mb-4 rounded-xl my-2 bg-[#266DD3] text-white w-60 self-center"
        >
          Cancelar Suscripcion
        </button>
        <button
          onClick={() => dispatch(setProductId(null))}
          className="p-2 mb-4 rounded-xl my-2 bg-[#266DD3] text-white w-60 self-center"
        >
          Cambiar de Plan
        </button>
      </Card>
    </div>
  );
}
