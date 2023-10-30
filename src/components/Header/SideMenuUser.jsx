import {
  Wallet,
  X,
  MapPin,
  Phone,
  Calendar,
  Bell,
  LogOut,
  PencilLine,
} from "lucide-react";
import {Avatar} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {getName, getLastName, getMail} from "../../redux/sliceLogin";
import useLogin from "../../hooks/useLogin";
import {useNavigate} from "react-router-dom";

const SideMenuUser = ({menuOpen, setMenuOpen}) => {
  const navigate = useNavigate();
  const name = useSelector(getName);
  const lastName = useSelector(getLastName);
  const mail = useSelector(getMail);
  const {handleLogout} = useLogin();
  const editProfile = () => {
    navigate("/editProfile");
    setMenuOpen(!menuOpen);
  };

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
          <div className='w-full flex pb-10 gap-4'>
            <Avatar
              className='w-16 h-16'
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
            />
            <div className='flex flex-col justify-center items-start'>
              <p className='text-xl font-medium'>
                {name} {lastName}
              </p>
              <p className='text-lg font-normal text-slate-300'>{mail}</p>
              <div className='flex items-center justify-center'>
                <button onClick={editProfile} className='text-sm font-normal'>
                  Editar
                </button>
                <PencilLine size={16} />
              </div>
            </div>
          </div>
          <div className='w-full py-2'>
            <div className='w-full flex p-3 items-center gap-2 bg-white rounded-lg cursor-pointer'>
              <Calendar
                size={28}
                strokeWidth={2.2}
                className='text-slate-800'
              />
              <p className='text-[#266DD3] font-medium text-lg'>
                Dashboard Admin
              </p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div
              onClick={() => navigate("suscriptions")}
              className='w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer'
            >
              <Wallet size={28} strokeWidth={2.2} />
              <p className='text-white font-medium text-lg'>Suscripciones</p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div className='w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer'>
              <MapPin size={28} strokeWidth={2.2} />
              <p className='text-white font-medium text-lg'>Dirección</p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div className='w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer'>
              <Bell size={28} strokeWidth={2.2} />
              <p className='text-white font-medium text-lg'>Notificaciones</p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div className='w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer'>
              <Phone size={28} strokeWidth={2.2} />
              <p className='text-white font-medium text-lg'>Soporte</p>
            </div>
          </div>
          <div className='w-full py-2'>
            <div className='w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer'>
              <LogOut size={28} strokeWidth={2.2} />
              <p
                className='text-white font-medium text-lg'
                onClick={() => handleLogout()}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuUser;
