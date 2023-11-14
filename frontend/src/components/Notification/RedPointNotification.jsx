import {useSelector} from "react-redux";
import {getCountNotifications} from "../../redux/sliceLogin";

export default function RedPointNotification() {
  const notifications = useSelector(getCountNotifications);
  const activeNotifications = notifications?.newNotifications >= 1;

  return (
    activeNotifications && (
      <div className='flex justify-center items-center absolute w-[14px] h-[14px] rounded-full bg-red-600'>
        <p className='text-white text-[9px] font-bold pl-[1px]'>
          {notifications.newNotifications}
        </p>
      </div>
    )
  );
}
