import {useNavigate} from "react-router-dom";

export default function IndividualServiceCerc({image, category, id}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/service/${id}`)}
      className='min-w-[140px] h-48 flex flex-col mt-2 mb-2'
    >
      <img className='h-44 object-cover rounded-2xl' src={image} alt='' />
      <p className='font-Inter text-lg text-primary-960'>{category}</p>
    </div>
  );
}
