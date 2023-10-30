"use client"
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
import {Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";


const Match = ({id, categoria, subcategoria, codigo, estado, nombre, avatar}) => {

  function obtenerIconoCategoria(categoria) {
    const iconos = {
      AA: aaIcon,
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
    <div id={id} key={id} className="flex flex-col border-1 border-[#266DD3]/10 rounded-lg my-2 py-2">
        <div className="flex items-center justify-start">
          <CategoyButton 
            icon={obtenerIconoCategoria(categoria)}
            color='#FFBC99'
            id={id}
          />
          <div className="flex flex-col ml-2">
              <h1 className=" text-left text-md text-black font-extrabold">{categoria} {subcategoria}</h1>
              <p className="text-sm text-slate-400">Código de Referencia: {codigo}</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-4">
            <p className="m-0">Estado</p>
            {estado === 'Confirmado' ? <Button className="bg-green-500/30 text-green-500 self-end">Confirmado</Button> : <Button className="bg-red-500/30 text-red-500">Pendiente</Button>}
        </div>
        <div className="flex p-4 items-center">
          <Avatar showFallback></Avatar>
          <p className="ml-2">{nombre}</p>
        </div>
    </div>
  )
}

export default Match