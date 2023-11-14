export default function MenuOptionUser() {
  return (
    <div style={{ position: "relative", margin: '-30px'}}>
      <div className="absolute top-0 left-12">
        <div className="border rounded overflow-hidden flex mt-2">
          <button
            className="p-2 transition-colors hover:bg-blue-200"
            onClick={() => alert("¿Desea eliminar usuario?")}
          >
            Banear
          </button>
          <button
            className="p-2 transition-colors hover:bg-blue-200"
            onClick={() => alert("¿Desea pausar usuario?")}
          >
            Pausar
          </button>
        </div>
      </div>
    </div>
  );
}