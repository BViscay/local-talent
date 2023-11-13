import Sidebar from "./Sidebar";

export default function InboxAdmin() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-2 text-left w-1/4">Nombre</th>
              <th className="p-2 text-left w-1/4">Email</th>
              <th className="p-2 text-left w-1/4">Mensaje</th>
              <th className="p-2 text-left w-1/4">Acciones</th>
            </tr>
          </thead>
          {/* Aquí van los elementos de la tabla */}
        </table>
        {/* Aquí iría el resto del contenido de la página junto a la tabla */}
      </div>
    </div>
  );
}


