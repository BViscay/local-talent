export default function NumberInput({ type, name, register }) {
  return (
    <input
      className='w-14 h-[70px] rounded-2xl font-bold text-2xl bg-primary-961 text-center focus:bg-white focus:border-2 focus:border-primary-963'
      maxLength='1'
      type={type}
      name={name}
      {...register(name)}
    />
  );
}
