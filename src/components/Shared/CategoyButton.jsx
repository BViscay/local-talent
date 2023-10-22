import { useNavigate } from "react-router-dom";

export default function CategoyButton({ icon, color, text, redirect }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirect);
  };

  const buttonStyle = {
    backgroundColor: color, 
  };

  return (
    <div className='flex flex-col items-center justify-center w-20 h-28'>
      <div
        onClick={handleClick}
        className='w-20 h-20 flex items-center justify-center rounded-full'
        style={buttonStyle}
      >
        <img src={icon} alt='' />
      </div>
      <div>{text}</div>
    </div>
  );
}
