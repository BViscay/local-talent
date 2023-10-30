import CategoyButton from "../Shared/CategoyButton";

const Match = ({key, title, code, content, timestamp, read}) => {
  return (
    <div id={key} className="flex">
        <CategoyButton />
        <div className="flex flex-col">
            <h1>{title}</h1>
            <p>Código de Referencia: {code}</p>
        </div>
        <hr />
        <div className="flex">
            <p>Estado</p>
        </div>
    </div>
  )
}

export default Match