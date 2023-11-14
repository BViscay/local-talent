import { List, ListItem, Card } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/sliceLogin";

export default function GoldSuscription() {
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
        <List>
          <ListItem className=" text-blue-600 "> 5 Servicios Premium</ListItem>
          <ListItem className=" text-blue-600  "> Matches Ilimitados</ListItem>
          <ListItem className=" text-blue-600  ">
            Mejor Posicionamiento
          </ListItem>
          <ListItem className=" text-blue-600  ">
            Aparicion en Productos Recomendados
          </ListItem>
        </List>
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
