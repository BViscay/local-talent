"use client";
import CategoyButton from "../Shared/CategoyButton";
import aaIcon from "../../assets/images/a-a icon.png";
import barberIcon from "../../assets/images/barber-icon.png";
import beautyIcon from "../../assets/images/beauty-icon.png";
import cleanIcon from "../../assets/images/clean-icon.png";
import electricistIcon from "../../assets/images/electricist-icon.png";
import freightIcon from "../../assets/images/freight-icon.png";
import homeArticlesIcon from "../../assets/images/home-articles-icon.png";
import paintIcon from "../../assets/images/paint-icon.png";
import plumberIcon from "../../assets/images/plumber-icon.png";
import {Avatar} from "@nextui-org/react";
import ContactButton from "./ContactButton";
import StatusButtons from "./StatusButtons";

const Match = ({
  matchId,
  serviceId,
  titulo,
  categoria,
  codigo,
  estado,
  nombre,
  apellido,
  avatar,
  whatsapp,
  isMyMatches,
}) => {
  function obtenerIconoCategoria(categoria) {
    const iconos = {
      "A/A": aaIcon,
      Barberia: barberIcon,
      Belleza: beautyIcon,
      Limpieza: cleanIcon,
      Electricidad: electricistIcon,
      Fletes: freightIcon,
      Hogar: homeArticlesIcon,
      Pintura: paintIcon,
      Plomeria: plumberIcon,
    };

    return iconos[categoria];
  }

  return (
    <div
      id={matchId}
      key={matchId}
      className='flex w-full flex-col border-1 border-[#266DD3]/10 shadow-md rounded-xl my-2 p-4'
    >
      <div className='flex items-center justify-start mb-1'>
        <CategoyButton
          icon={obtenerIconoCategoria(categoria)}
          color='#FFBC99'
          matchId={matchId}
        />
        <div className='flex flex-col ml-2'>
          <h1 className='ml-2 text-left text-md text-black font-extrabold'>
            {categoria}
          </h1>
          <h1 className='ml-2 text-left text-md text-black font-extrabold'>
            {titulo}
          </h1>
          <p className='ml-2 text-sm text-left text-slate-400'>
            Código: #{codigo}
          </p>
        </div>
      </div>
      <hr />
      <div className='flex justify-between items-center p-4'>
        <p className='m-0'>Estado</p>
        <StatusButtons
          estado={estado}
          matchId={matchId}
          serviceId={serviceId}
          isMyMatches={isMyMatches}
        />
      </div>
      <div className='flex p-4 items-center justify-between'>
        <div className='flex items-center'>
          <Avatar className='z-0' src={avatar}></Avatar>
          <p className='ml-2'>
            {nombre} {apellido}
          </p>
        </div>
        {!!whatsapp && estado !== "create" && estado !== "cancel" && (
          <ContactButton phoneNumber={whatsapp} service={titulo} />
        )}
      </div>
    </div>
  );
};

export default Match;
