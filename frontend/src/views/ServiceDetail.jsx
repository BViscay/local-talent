import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import useFilters from "../hooks/useFilters";
//import {TextArea} from "../components/ServiceDetail/TextArea";

export default function ServiceDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {handleFilterByServiceId, detailService} = useFilters();

  useEffect(() => {
    if (!detailService.id) {
      handleFilterByServiceId(id);
    }
  }, [id, detailService.id, handleFilterByServiceId]);

  return (
    <div className='w-full min-h-full'>
      {detailService.name && (
        <div className='w-full'>
          <img
            src={detailService.image}
            alt='service-image'
            className='w-full h-[280px] fixed mt-0 ml-0 object-cover'
          />
          <p>{detailService.rating}</p>
          <p>{detailService.name}</p>
        </div>
      )}
      {/* <TextArea /> */}
      <div>
        <button>Guardar</button>
        <button onClick={() => navigate("/matchs")}>Conectar</button>
      </div>
    </div>
  );
}
