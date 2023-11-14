import { List, ListItem, Card } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/sliceLogin";

export default function SilverSuscription() {
  const dispatch = useDispatch();
  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <Card className="w-[90%] bg-blue-200">
        <p className="text-xl font-bold mt-5 text-black ">
          Estas suscripto al Plan Silver
        </p>
        <p className="text-blue-600  text-sm self-start pl-4 mt-3">
          Actualmente cuentas con estos beneficios:{" "}
        </p>
        <ul className="flex items-start flex-col">
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">Mas Servicios</h2>
            <p className="text-blue-600 text-sm ml-1">3 Servicios Premium</p>
          </li>
          <li className="ml-4 flex flex-col items-start my-2">
            <h2 className="font-extrabold">Mas Matches</h2>
            <p className="text-blue-600 text-sm ml-1">20 Matches</p>
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
          onClick={() => dispatch(setProductId(null))}
          className="p-2 mb-4 rounded-xl my-2 bg-[#266DD3] text-white w-60 self-center"
        >
          Cancelar Suscripcion
        </button>
      </Card>
    </div>
  );
}
