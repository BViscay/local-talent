import Sidebar from './Sidebar';
import useServices from '../../hooks/admin/useServices';
import { useEffect } from 'react';

export default function ActiveServices() {
  const { services, getServices , handleDelete  } = useServices()

  useEffect( () => { getServices() } ,[])

    return (
    <div className="flex h-screen">
        <Sidebar />
      <div className="w-full">
        <div className="flex justify-between bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
          <div className="w-1/4 px-3 py-3">Servicio</div>
          <div className="w-1/4 px-3 py-3">Categoria</div>
          <div className="w-1/4 px-3 py-3">Email</div> 
          <div className='text-center'>Borrar</div> 
        </div>
        <div className="bg-white">
          { services.legth === 0
              ? <h3>No hay servicios</h3>
              : services.map( service => (
                  <div className="flex justify-between border-b divide-x divide-gray-200" key={service.id}>
                    <h3 className="w-1/4 px-3 py-4 text-left">{service.title}</h3>
                    <h3 className="w-1/4 px-3 py-4 text-left">{service.category.name}</h3>
                    <h3 className="w-1/4 px-3 py-4 text-left">{service.user.email}</h3>
                    <button
                      className='text-center px-4'  
                      onClick={() => handleDelete(service.id)}
                    >❌</button>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}
