import {AiFillStar} from "react-icons/ai"
export default function CardService({renderServices}) {
    
  return (
    <div className="flex w-full h-[160px] gap-2 border-3 border-t-transparent border-x-transparent p-4">
        <div className="w-1/3 ">
            <img className='w-full h-[120px] object-cover rounded-xl' src={renderServices.image} alt="Error al cargar foto" />
        </div>
        <div className="flex flex-col w-2/3 items-start justify-center ml-2">
          <div className="flex">
            <p className="flex items-center justify-center mr-1"><AiFillStar className="text-yellow-400 mr-1"/>{renderServices.rating}</p>
            <p className="text-primary-963">(30)</p>
          </div>
            <p className="text-base font-inter text-primary-964">Juan Perez</p>
            <p className="text-sm text-primary-963">Valor de referencia</p>
            <div className="flex justify-between w-full mt-1">
            <p className="bg-primary-965 text-sm p-1 rounded-md">${renderServices.price}</p>
            <button className="text-sm bg-primary-966 text-white rounded-md p-1">Contactar</button>
            </div>
        </div>
    </div>
  )
}
