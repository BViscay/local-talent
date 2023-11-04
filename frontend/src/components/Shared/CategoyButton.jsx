export default function CategoyButton({
  icon,
  color,
  text,
  id,
  handleFilterByCategory,
}) {
  const handleClick = () => {
    handleFilterByCategory(id);
  };

  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <div className='flex flex-col items-center justify-center w-20 h-max'>
      <div
        onClick={handleClick}
        className='w-[90px] h-[90px] flex items-center justify-center rounded-full shadow-lg'
        style={buttonStyle}
      >
        <img src={icon} alt='' className="'w-[45px] h-[45px]" />
      </div>
      <div className='mt-2'>{text}</div>
    </div>
  );
}
