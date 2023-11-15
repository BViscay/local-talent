import Sidebar from './Sidebar';
import useServices from '../../hooks/admin/useServices';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ActiveServices() {
  const {handlerServices} = useServices();
  const services = useSelector(state => state.services.services); 

  useEffect(() => {
    const fetchData = async () => {
      await handlerServices();
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
        <Sidebar />
      <div className="w-full">
        <div className="flex justify-between bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
          <div className="w-1/4 px-3 py-3">Name</div>
          <div className="w-1/4 px-3 py-3">Quantity</div> 
        </div>
        <div className="bg-white">
          {services.map((service, index) => (
            <div className="flex justify-between border-b divide-x divide-gray-200" key={index}>
              <div className="w-1/4 px-3 py-4">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
