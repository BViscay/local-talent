import {BsWhatsapp} from "react-icons/bs";
//eslint-disable-next-line
const ContactButton = ({phoneNumber, service}) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola me estoy comunicando por el servicio: ${service}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className='flex justify-center items-center w-12 h-12 text-white text-3xl bg-green-500 rounded-full mr-5'
    >
      <BsWhatsapp />
    </button>
  );
};

export default ContactButton;
