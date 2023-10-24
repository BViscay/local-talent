//eslint-disable-next-line
export default function LoginButton({ text }) {
  return (
    <div>
      <button
        type='submit'
        className='w-40 mr-2 -ml-4  text-white  font-medium rounded-sm text-lg p-1.5 text-center bg-primary-600 hover:bg-orange-900 active:bg-orange-300'
      >
        {text}
      </button>
    </div>
  );
}
