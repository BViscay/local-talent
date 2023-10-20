// crear 3 descuentos
const Descuentos = () => {
  // Contenido de tus descuentos
  const descuentos = [
    "Descuento 1",
    "Descuento 2",
    "Descuento 3",
    "Descuento 4",
  ];

  return (
    <div className="w-full flex flex-row items-start justify-start overflow-x-auto p-3">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto">
          {descuentos.map((descuento, index) => (
            <div key={index} className="p-4 w-72 h-40 flex justify-center items-center bg-white shadow rounded-xl">
              <p className="text-lg font-semibold">{descuento}</p>
              <p className="text-sm text-gray-600">Descripción del descuento</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descuentos