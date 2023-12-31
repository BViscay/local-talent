import {X} from "lucide-react";
import {useNavigate} from "react-router-dom";

const SideMenu = ({menuOpen, setMenuOpen}) => {
  const navigate = useNavigate();
  return (
    <div className='fixed left-0 top-0 w-full h-screen bg-[#266DD3] text-white'>
      <div className='flex flex-col h-full'>
        <div className='flex justify-end py-8 px-14'>
          <X
            size={32}
            className='!cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className='flex flex-col px-12'>
          <div className='w-full py-2'>
            <div
              className='w-full flex p-3 items-center rounded-lg bg-white cursor-pointer'
              onClick={() => {
                setMenuOpen(!menuOpen);
                navigate("/login");
              }}
            >
              <p className='text-[#266DD3] font-medium text-lg ml-8'>
                Iniciar Sesión
              </p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div
              className='w-full flex p-3 items-center rounded-lg cursor-pointer'
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              <p className='text-white font-medium text-lg ml-8'>Registrarse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
