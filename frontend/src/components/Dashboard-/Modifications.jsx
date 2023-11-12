import Sidebar from "./Sidebar";

export default function Modifications() {
  return (
    <div className="flex h-screen">
      <Sidebar />
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-gray-800">Modificar Servicios</h1>
      {/* <Link to="/create-new-category" className="text-blue-600 hover:underline focus:outline-none">
        Create new category service
      </Link> */}
    </div>
    <div className="flex h-full">
      <div className="w-1/2 pr-4 h-full overflow-y-auto">
        {/* <div className="border-r border-gray-200 pr-4">
          {categorias.map((servicio, index) => (
            <p className="mb-4" key={index}>{servicio.name}</p>
          ))}
        </div> */}
      </div>
      <div className="w-1/2">
        {/* <div className="pl-4">
          {categorias.map((servicio, index) => (
            <Link
              title="Editar"
              key={index}
              className="block mb-4 flex items-center text-blue-600 hover:underline focus:outline-none"
            >
              <Pencil size={23} strokeWidth={2.2} color="#266DD3" className="mr-2" />
              editar
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  </div>
  )
}
