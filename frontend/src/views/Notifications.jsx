"use client"

import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Select, SelectItem} from "@nextui-org/react";
import { Bell } from "lucide-react";
import Notification from "../components/Notification/Notification";
import useNotifications from "../hooks/useNotifications";


export default function Notifications() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 

  const navigate = useNavigate();

  const { handleCountNotifications, handleNewsNotifications } = useNotifications();

  const mockNotifications = [
    {
      id: 1,
      title: 'Nuevo Mensaje',
      content: 'Tienes un nuevo mensaje de Juan Pérez.',
      timestamp: new Date('2023-10-30T05:00:00Z').toLocaleString('es-AR'),
      read: false,
    },
    {
      id: 2,
      title: 'Recordatorio',
      content: 'No olvides enviar tu tarea antes de mañana.',
      timestamp: new Date('2023-10-29T15:30:00Z').toLocaleString('es-AR'),
      read: true,
    },
    {
      id: 3,
      title: 'Evento Próximo',
      content: '¡Únete a nosotros en la fiesta anual de la empresa el viernes!',
      timestamp: new Date('2023-11-02T09:00:00Z').toLocaleString('es-AR'),
      read: false,
    },
    {
      id: 4,
      title: 'Nueva Solicitud de Amistad',
      content: 'Has recibido una solicitud de amistad de Ana Gómez.',
      timestamp: new Date('2023-10-28T12:45:00Z').toLocaleString('es-AR'),
      read: true,
    },
    {
      id: 5,
      title: 'Alerta de Notificación',
      content: 'Se ha actualizado la seguridad de tu cuenta.',
      timestamp: new Date('2023-10-27T07:15:00Z').toLocaleString('es-AR'),
      read: false,
    },
  ];

  useEffect(() => {
    handleCountNotifications();
    handleNewsNotifications();
  },[])

  return (
    <div className="bg-[#f9f9f9] p-4 h-screen">
      <div className="flex items-center w-full mb-2">
        <div className="bg-[#266DD3] h-5 w-1 rounded"></div>
        <h1 className="font-[900] text-xl mx-2">Notificaciones</h1>
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
      {mockNotifications.length < 1 ? 
        <div className="flex flex-col rounded-lg w-full py-24 bg-white items-center justify-center">
          <Bell 
            size="100px"
            color="#266DD3"
          />
          <h1 className="font-bold text-xl">Sin Notificaciones</h1>
          <p className="font-normal text-md py-8 text-slate-400">No tenés notificaciones</p>
          <button onClick={() => navigate("/categories")} className="bg-[#266DD3] text-white p-4 rounded-lg">Ver Servicios</button>
        </div> :
        <div className="flex flex-col rounded-lg w-full p-4 bg-white items-center justify-center">
          {isLoggedIn ? (
            <div>Estas Logeado</div>
          ) : (
            <div>¡Logeate para ver tus notificaciones!</div>
          )}
          {/* {mockNotifications.map(n => 
            <Notification 
              key={n.id}
              title={n.title}
              content={n.content}
              timestamp={n.timestamp}
              read={n.read}
            />  
          )} */}
        </div>
      }  
    </div>
  )
}
