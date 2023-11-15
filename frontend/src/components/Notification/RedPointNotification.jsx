import {useSelector} from "react-redux";
import {getNotifications} from "../../redux/sliceLogin";

export default function RedPointNotification() {
  const getMyNotifications = useSelector(getNotifications);
  const notifications = getMyNotifications?.length;
  const activeNotifications = notifications >= 1;

  return (
    activeNotifications && (
      <div className='flex justify-center items-center absolute w-[14px] h-[14px] rounded-full bg-red-600'>
        <p className='text-white text-[9px] font-bold pl-[1px]'>
          {notifications}
        </p>
      </div>
    )
  );
}
