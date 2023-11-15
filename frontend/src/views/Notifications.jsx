import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Select, SelectItem } from "@nextui-org/react";
import { Bell } from "lucide-react";
import Notification from "../components/Notification/Notification";
import useNotifications from "../hooks/useNotifications";
import { getNotifications, isLogged } from "../redux/sliceLogin";

export default function Notifications() {
  const isLoggedIn = useSelector(isLogged);
  const newNotifications = useSelector(getNotifications);

  const { handleCountNotifications, handleNewsNotifications } =
    useNotifications();

  useEffect(() => {
    handleNewsNotifications();
    handleCountNotifications();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#f9f9f9] p-4 min-h-screen">
      <div className="flex items-center justify-between w-full px-5 mb-2">
        <div className="flex items-center justify-center">
          <div className="bg-[#266DD3] h-5 w-1 rounded"></div>
          <h1 className="font-extrabold text-xl mx-2">Notificaciones</h1>
        </div>
        <div className="w-1/3">
          <Select
            radius="md"
            size="sm"
            variant="bordered"
            color="primary"
            label="Orden"
            className="max-w-xs"
          >
            <SelectItem>Nuevas</SelectItem>
            <SelectItem>Todas</SelectItem>
          </Select>
        </div>
      </div>
      {isLoggedIn ? (
        newNotifications && newNotifications.length > 0 ? (
          <div className="flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center">
            {newNotifications.map((notification) => (
              <Notification
                id={notification.id}
                key={notification.id}
                refId={notification.refId}
                type={notification.type}
                timestamp={notification.createdAt}
                status={notification.status}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center">
            <div className="flex">
              <Bell className="mr-2" />
              No tienes notificationes
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center">
          <div>Porfavor logeate para ver tus notificaciones</div>
        </div>
      )}
    </div>
  );
}
