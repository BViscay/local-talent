import {
  Wallet,
  X,
  MapPin,
  Phone,
  PlusCircle,
  LogOut,
  FileSpreadsheet,
  PencilLine,
  BarChartHorizontal,
  HelpCircle,
} from "lucide-react";
import { Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";
import {
  getName,
  getLastName,
  getMail,
  getImage,
  getRol,
} from "../../redux/sliceLogin";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const SideMenuUser = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const name = useSelector(getName);
  const lastName = useSelector(getLastName);
  const mail = useSelector(getMail);
  const image = useSelector(getImage);
  const rol = useSelector(getRol);
  const { handleLogout } = useLogin();
  const editProfile = () => {
    navigate("/editProfile");
    setMenuOpen(!menuOpen);
  };
  const isAdmin = rol === "admin";

  return (
    <div className="fixed left-0 top-0 w-full h-screen bg-[#266DD3] text-white">
      <div className="flex flex-col h-full">
        <div className="flex justify-end py-8 px-14">
          <X
            size={32}
            className="!cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="flex flex-col px-12">
          <div className="w-full flex pb-10 gap-4">
            <Avatar
              className="w-16 h-16"
              src={
                image
                  ? image
                  : "https://i.pravatar.cc/150?u=a042581f4e29026024d"
              }
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl font-medium">
                {name} {lastName}
              </p>
              <p className="text-lg font-normal text-slate-300">{mail}</p>
              <div className="flex items-center justify-center">
                <button onClick={editProfile} className="text-sm font-normal">
                  Editar
                </button>
                <PencilLine size={16} />
              </div>
            </div>
          </div>

          {isAdmin && (
            <div className="w-full py-2">
              <div className="w-full flex p-3 items-center gap-2 bg-primary-100 rounded-lg cursor-pointer">
                <BarChartHorizontal
                  onClick={() => {
                    navigate("/dashboard-admin");
                    setMenuOpen(!menuOpen);
                  }}
                  size={28}
                  strokeWidth={2.2}
                  className="text-primary-600"
                />
                <p className="text-[#266DD3] font-extrabold text-lg">
                  Dashboard Admin
                </p>
              </div>
            </div>
          )}

          <div className="w-full py-2">
            <div
              onClick={() => {
                navigate("/create-service");
                setMenuOpen(!menuOpen);
              }}
              className="w-full flex p-3 items-center gap-2 bg-white rounded-lg cursor-pointer"
            >
              <PlusCircle
                size={28}
                strokeWidth={2.2}
                className="text-primary-600"
              />
              <p className="text-[#266DD3] font-extrabold text-lg">
                Crear Servicio
              </p>
            </div>
          </div>

          <div className="w-full py-2">
            <div
              onClick={() => {
                navigate("/my-services");
                setMenuOpen(!menuOpen);
              }}
              className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer"
            >
              <FileSpreadsheet size={28} strokeWidth={2.2} />
              <p className="text-white font-medium text-lg">Mis Servicios</p>
            </div>
          </div>

          <div className="w-full py-2">
            <div
              onClick={() => {
                navigate("/suscriptions");
                setMenuOpen(!menuOpen);
              }}
              className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer"
            >
              <Wallet size={28} strokeWidth={2.2} />
              <p className="text-white font-medium text-lg">Suscripciones</p>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/my-location");
              setMenuOpen(!menuOpen);
            }}
            className="w-full py-2"
          >
            <div className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer">
              <MapPin size={28} strokeWidth={2.2} />
              <p className="text-white font-medium text-lg">Dirección</p>
            </div>
          </div>

          <div className="w-full py-2">
            <div className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer">
              <Phone size={28} strokeWidth={2.2} />
              <p className="text-white font-medium text-lg">Soporte</p>
            </div>
          </div>

          <div className="w-full py-2">
            <div
              onClick={() => {
                navigate("/about");
                setMenuOpen(!menuOpen);
              }}
              className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer"
            >
              <HelpCircle size={28} strokeWidth={2.2} />
              <p className="text-white font-medium text-lg">Quienes Somos?</p>
            </div>
          </div>

          <div className="w-full py-2">
            <div className="w-full flex p-3 items-center gap-2 rounded-lg cursor-pointer">
              <LogOut size={28} strokeWidth={2.2} />
              <p
                className="text-white font-medium text-lg"
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
