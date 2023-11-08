import { useSelector } from "react-redux";
import logo from "../../assets/images/Logo.png";
import {
  getIsMyMatches,
  getMyMatches,
  getOwnMatches,
} from "../../redux/sliceMatches";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { Textarea } from "@nextui-org/react";

export default function RatingMatch() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const isMyMatches = useSelector(getIsMyMatches);
  const ownMatches = useSelector(getOwnMatches);
  const myMatches = useSelector(getMyMatches);
  const handleSubmit = () => {
    console.log("Comentario:", text);
    console.log("Rating:", value);
  };
  console.log(isMyMatches);
  return (
    <div className="flex flex-col items-center">
      <img className="w-[300px] h-[113px] mb-2" src={logo} alt="logo" />
      <div className="w-full flex items-center flex-col mt-2 p-3 rounded-xl">
        {isMyMatches ? (
          <div className="flex items-center flex-col">
            <p className="text-left font-Inter font-extrabold opacity-1 text-black text-3xl">
              Califica a {ownMatches[0].user.firstname}{" "}
              {ownMatches[0].user.lastname}
            </p>
          </div>
        ) : (
          <div className="flex flex-col  w-full">
            {/* <p className="text-left font-Inter font-extrabold opacity-1 text-black text-xl">
              Califica a
            </p> */}
            <p className="text-2xl font-extrabold">
              {myMatches[0].service.title}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <p>Calificar: </p>
        <Box
          sx={{
            "& .MuiRating-iconFilled": {
              fontSize: "32px",
            },
            "& > legend": { mt: 2 },
            width: "100%",
          }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              fontSize: "32px",
              padding: "5px",
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
      <div className="w-full m-2 px-4 pb-0">
        <Textarea
          variant="bordered"
          labelPlacement="outside"
          placeholder="Ingresa un comentario al prestador del servicio"
          className="col-span-12 md:col-span-6 md:mb-0"
          onValueChange={(value) => setText(value)}
          minRows={9}
        />
        <p className="text-xs mb-5 text-left w-full ml-2 text-gray-500">
          Tu calificación y tu comentario ayudan a mejorar la comunidad
        </p>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-primary-600 text-white px-3 py-4 w-24 rounded-xl text-base font-Inter"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}