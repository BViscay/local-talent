import {Button} from "@nextui-org/react";
import useLogin from "../../hooks/useLogin";
import SelectStatusModal from "./SelectStatusModal";

export default function StatusButtons({
  estado,
  matchId,
  serviceId,
  isMyMatches,
}) {
  console.log(estado, isMyMatches)
  const {isModalOpen, handleCloseModal, handleOpenModal} = useLogin();
  return (
    <div>
      {estado === "accept" ? (
        <Button
          onClick={(estado !== 'accept' && isMyMatches) || (estado === 'qualifyUser' && !isMyMatches)  && handleOpenModal}
          className='bg-green-500/30 text-green-500 self-end'
        >
          Confirmado
        </Button>
      ) : estado === "cancel" ? (
        <Button className='bg-red-500/30 text-red-500'>Cancelado</Button>
      ) : estado === "qualifyUser" || estado === "qualifyServ" ? (
        <Button
          onClick={handleOpenModal}
          className='bg-primary-900/30 text-primary-100'
        >
          A Calificar
        </Button>
      ) : (
        <Button
          onClick={handleOpenModal}
          className='bg-red-500/30 text-red-500'
        >
          Pendiente
        </Button>
      )}
      {isModalOpen && (
        <SelectStatusModal
          onClose={handleCloseModal}
          matchId={matchId}
          serviceId={serviceId}
          isMyMatches={isMyMatches}
          estado={estado}
        />
      )}
    </div>
  );
}
