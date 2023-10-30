export default function IndividualServiceCerc({image, category}) {
  return (
    <div className='w-36 h-48 flex flex-col '>
      <img
        className='h-44 object-cover rounded-2xl'
        src={image}
        alt=''
      />
      <p className='text-sm text-primary-959'>{category}</p>
    </div>
  );
}
