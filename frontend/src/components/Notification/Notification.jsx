import {useNavigate} from "react-router-dom";
import useNotifications from "../../hooks/useNotifications";

const Notification = ({id, refId, type, timestamp, status}) => {
  const {handleReadOneNotification} = useNotifications();
  const navigate = useNavigate();

  let message = "";
  if (type === 1) {
    message += "Hicieron match con tu servicio";
  }

  const changeNotificationStatus = () => {
    handleReadOneNotification(id);
    navigate("/matchs");
  };

  return (
    <a
      onClick={changeNotificationStatus}
      id={refId}
      className={`w-full flex flex-col p-2 rounded-lg border my-2 items-start ${
        status === 1
          ? "bg-white border-slate-200"
          : "bg-[#226DD3]/10 border-[#266DD3]/50"
      }`}
    >
      <h1
        className={`text-md ${
          status === 1
            ? "text-slate-600 font-thin"
            : "text-black font-extrabold"
        }`}
      >
        Nueva notificación
      </h1>
      <p className='text-left text-sm text-slate-500 pt-2 pb-1'>{message}</p>
      <p className='text-xs text-slate-400'>{timestamp.substring(0, 10)}</p>
    </a>
  );
};

export default Notification;
