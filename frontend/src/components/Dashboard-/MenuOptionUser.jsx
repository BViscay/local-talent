import useUser from '../../hooks/admin/useUser';

export default function MenuOptionUser({ userId, status }) {
  const { handlerDisableUserById, handlerEnableUserById } = useUser();

  const handleDisableClick = () => {
    if (window.confirm("¿Desea deshabilitar usuario?")) {
      handlerDisableUserById(userId);
    }
  };

  const handleEnableClick = () => {
    if (window.confirm("¿Desea habilitar usuario?")) {
      handlerEnableUserById(userId);
    }
  };

  return (
    <div style={{ position: "relative", margin: "-30px" }}>
      <div className="absolute top-0 left-12">
        <div className="border rounded overflow-hidden flex mt-2">
          {status === 1 && (
            <button
              className="p-2 transition-colors hover:bg-blue-200"
              onClick={handleDisableClick}
            >
              Disable
            </button>
          )}
          {status === 2 && (
            <button
              className="p-2 transition-colors hover:bg-blue-200"
              onClick={handleEnableClick}
            >
              Enable
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
