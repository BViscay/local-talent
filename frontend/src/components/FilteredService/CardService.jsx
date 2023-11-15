import {AiFillStar} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";

export default function CardService({renderServices, id}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMyServices = location.pathname === "/my-services";
  return (
    <div className='flex w-full h-[160px] gap-2 border-3 border-t-transparent border-x-transparent p-4 justify-center items-center'>
      <div className='w-1/3 '>
        <img
          className='w-full h-[130px] object-cover rounded-xl'
          src={renderServices.image}
          alt='Error al cargar foto'
        />
      </div>
      <div className='flex flex-col w-2/3 items-start ml-2'>
        <p className=''>{renderServices.title}</p>
        <div className='flex justify-between w-full mt-1'>
          <div className='flex w-full'>
            <p className='flex items-center justify-center mr-1'>
              <AiFillStar className='text-yellow-400 mr-1' />
              {renderServices.rating}
            </p>
            <p className='text-primary-963'>({renderServices.score})</p>
          </div>
          <p className='text-primary-963'>{renderServices.categoryId.name}</p>
        </div>
        <div className='flex w-full'>
          <p className='text-base font-inter text-primary-964 mx-1'>
            {renderServices.userId.firstName}
          </p>
          <p className='text-base font-inter text-primary-964'>
            {renderServices.userId.lastName}
          </p>
        </div>
        <div className='flex justify-between w-full mt-1'>
          <p className='text-sm text-primary-963'>Valor de referencia</p>
        </div>
        <div className='flex justify-between w-full mt-1'>
          <p className='bg-primary-965 text-sm p-1 rounded-md'>
            ${renderServices.price}
          </p>
          {!isMyServices ? (
            <button
              onClick={() => navigate(`/service/${id}`)}
              className='text-sm bg-primary-966 text-white rounded-md p-1'
            >
              Contactar
            </button>
          ) : (
            <button className='text-sm bg-primary-966 text-white rounded-md p-1'>
              Modificar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
