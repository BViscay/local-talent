import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import useFilters from "../hooks/useFilters";
//import {TextArea} from "../components/ServiceDetail/TextArea";

export default function ServiceDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {handleFilterByServiceId, detailService} = useFilters();
  console.log(detailService);

  useEffect(() => {
    handleFilterByServiceId(id);
    //eslint-disable-next-line
  }, []);

  return (
    <div className='w-full min-h-full'>
      {detailService.title && (
        <div className='w-full'>
          <img
            src={detailService[0].image}
            alt='service-image'
            className='w-full h-[280px] fixed mt-0 ml-0 object-cover'
          />
          <p>{detailService[0].rating}</p>
          <p>{detailService[0].title}</p>
        </div>
      )}
      {/* <TextArea /> */}
      <div className='w-full flex gap-3 justify-center'>
        <button className='w-32 text-white  font-medium rounded-xl text-lg p-1.5 text-center bg-primary-958 hover:bg-cyan-900 active:bg-orange-300'>
          Guardar
        </button>
        <button
          onClick={() => navigate("/matchs")}
          className='w-32 text-white  font-medium rounded-xl text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900 active:bg-orange-300'
        >
          Conectar
        </button>
      </div>
    </div>
  );
}
