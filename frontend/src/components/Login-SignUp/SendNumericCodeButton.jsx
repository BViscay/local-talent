import useRegister from "../../hooks/useRegister";
import { useForm } from "react-hook-form";
import NumberInput from "./NumberInput";

export default function SendNumericCodeButton() {
  const { handleSubmit, register } = useForm();

  const { handleValidate } = useRegister();

  return (
    <div className='flex flex-col w-full my-2 items-center'>
      <div className='flex justify-around w-full p-1'>
        <form
          onSubmit={handleSubmit((data) => {
                      handleValidate(data);
          })}
          className='flex flex-col items-center w-full'
        >
          <div className='flex w-full gap-2 items-center justify-center'>
            <NumberInput type='text' name='firstDigit' register={register} />
            <NumberInput type='text' name='secondDigit' register={register} />
            <NumberInput type='text' name='thirdDigit' register={register} />
            <NumberInput type='text' name='fourDigit' register={register} />
            <NumberInput type='text' name='fiveDigit' register={register} />
            <NumberInput type='text' name='sixDigit' register={register} />
          </div>
          <div className='w-4/5 rounded-xl mt-5 bg-primary-600'>
            <button
              type='submit'
              className='w-4/5 h-full p-4 text-base text-white font-bold'
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
