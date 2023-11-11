import Sidebar from './Sidebar';

export default function ActiveServices() {
  return (
    <div className="flex h-screen">
        <Sidebar />
      <div className="w-full">
        <div className="flex justify-between bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
          <div className="w-1/4 px-3 py-3">Name</div>
          <div className="w-1/4 px-3 py-3">Quantity</div> 
        </div>
     
      </div>
    </div>
  )
}
