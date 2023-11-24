import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import useSuscriptions from "../../hooks/useSuscriptions";
const CheckIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className='h-3 w-3 text-white'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 9-13.5'
      />
    </svg>
  );
};

const PricingCard = () => {
  const {handleSilverSuscription, handleGoldSuscription} = useSuscriptions();
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <Card
        variant='gradient'
        className='w-full max-w-[20rem] p-8 bg-[#172B4D] mt-4'
      >
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center'
        >
          <Typography
            variant='small'
            color='white'
            className='font-bold uppercase text-[#e3e4e5] text-xl'
          >
            Silver
          </Typography>
          <Typography
            variant='h1'
            color='white'
            className='mt-6 flex justify-center gap-1 text-7xl font-normal'
          >
            <span className='mt-2 text-4xl text-[#e3e4e5]'>$</span>
            <p className='text-[#e3e4e5]'>100</p>{" "}
            <span className='self-end text-4xl text-white'>/mes</span>
          </Typography>
        </CardHeader>
        <CardBody className='p-0'>
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                3 Servicios Premium
              </Typography>
            </li>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                20 Matches
              </Typography>
            </li>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                Mejor Posicionamiento
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className='mt-12 p-0'>
          <Button
            size='md'
            color='white'
            className='hover:scale-[1.02] focus:scale-[1.02] active:scale-100'
            ripple={false}
            fullWidth={true}
            onClick={handleSilverSuscription}
          >
            Suscribirme
          </Button>
        </CardFooter>
      </Card>
      <Card
        variant='gradient'
        className='w-full max-w-[20rem] p-8 bg-[#172B4D] my-4'
      >
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center'
        >
          <Typography
            variant='small'
            color='white'
            className='font-bold text-xl uppercase text-[#efb810]'
          >
            Gold
          </Typography>
          <Typography
            variant='h1'
            color='white'
            className='mt-6 flex justify-center gap-1 text-7xl font-normal'
          >
            <span className='mt-2 text-4xl text-[#efb810]'>$</span>
            <p className='text-[#efb810]'>250</p>{" "}
            <span className='self-end text-4xl'>/mes</span>
          </Typography>
        </CardHeader>
        <CardBody className='p-0'>
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                Servicios Premium Ilimitados
              </Typography>
            </li>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                Matches Ilimitados
              </Typography>
            </li>
            <li className='flex items-center gap-4'>
              <span className='rounded-full border border-white/20 bg-white/20 p-1'>
                <CheckIcon />
              </span>
              <Typography className='font-normal text-white'>
                Mejor Posicionamiento
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className='mt-12 p-0'>
          <Button
            size='md'
            color='white'
            className='hover:scale-[1.02] focus:scale-[1.02] active:scale-100'
            ripple={false}
            fullWidth={true}
            onClick={handleGoldSuscription}
          >
            Suscribirme
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PricingCard;
