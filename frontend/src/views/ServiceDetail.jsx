import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useFilters from "../hooks/useFilters";
import {useSelector} from "react-redux";
import {getDetailServices} from "../redux/sliceFilters";
import TextArea from "../components/ServiceDetail/TextArea";
import useMatches from "../hooks/useMatches";
import {AiFillStar} from "react-icons/ai";

export default function ServiceDetail() {
  const {id} = useParams();
  const detailService = useSelector(getDetailServices);
  const {handleFilterByServiceId} = useFilters();
  const {handleUserMatch} = useMatches();

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFilterByServiceId(id).then(() => {
      setLoading(false);
    });
    //eslint-disable-next-line
  }, [id]);

  return (
    <div className='flex flex-col w-full h-full items-center'>
      {loading ? (
        <div className='flex justify-center items-center h-32'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900'></div>
        </div>
      ) : (
        <div className='w-full'>
          <img
            src={detailService.image}
            alt='service-image'
            className='w-full h-[280px] absolute mt-0 ml-0 object-cover -z-10'
          />
          <div className='flex flex-col z-20 mt-[110px] pl-5'>
            <div className='bg-primary-953 w-16 rounded-xl z-10'>
              <p className='flex items-center justify-center mr-1 pt-0.5 pb-0.5 text-primary-50'>
                <AiFillStar className='text-primary-50 mr-1' />
                {detailService.rating}
              </p>
            </div>
            <div className='w-max bg-black mt-2 opacity-70 p-3 rounded-xl'>
              <p className='text-left font-Inter text-white font-extrabold opacity-1 text-3xl'>
                {detailService.user.firstname} {detailService.user.lastname}
              </p>
              <p className='text-left font-Inter text-white font-bold text-lg'>
                {detailService.title}
              </p>
            </div>
          </div>
        </div>
      )}

      <TextArea setValue={setValue} />

      <div className='w-full flex gap-3 justify-center mt-40 mb-5'>
        <button className='w-32 text-white font-medium rounded-xl text-lg p-1.5 text-center bg-primary-958 hover:bg-cyan-900 active-bg-orange-300'>
          Guardar
        </button>
        <button
          onClick={() => handleUserMatch(id, value)}
          className='w-32 text-white font-medium rounded-xl text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900 active:bg-orange-300'
        >
          Conectar
        </button>
      </div>
    </div>
  );
}
