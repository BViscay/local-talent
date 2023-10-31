import {useSelector} from "react-redux";
import {getName} from "../../redux/sliceLogin";

export default function Greet() {
  const userName = useSelector(getName);
  return (
    <div className='pl-3 pt-3'>
      <div className='flex'>
        <p className='text-xl font-medium tracking-[0.15em] text-[#666C89]'>
          Hola {userName} &#128075;
        </p>
      </div>
      <h1 className='text-3xl font-bold text-[#172B4D] text-left pt-2 pb-4'>
        Que servicio estas buscando?
      </h1>
    </div>
  );
}
