import CategoyButton from "../components/Shared/CategoyButton";
import aaIcon from "../assets/images/a-a icon.png";
import barberIcon from "../assets/images/barber-icon.png";
import beautyIcon from "../assets/images/beauty-icon.png";
import cleanIcon from "../assets/images/clean-icon.png";
import electricistIcon from "../assets/images/electricist-icon.png";
import freightIcon from "../assets/images/freight-icon.png";
import homeArticlesIcon from "../assets/images/home-articles-icon.png";
import paintIcon from "../assets/images/paint-icon.png";
import plumberIcon from "../assets/images/plumber-icon.png";

export default function CategoriesPage() {
  return (
    <div className='flex flex-col w-full h-[450px] items-center justify-center gap-10'>
      <div className='w-1 h-6 bg-primary-600'></div>
      <p className='font-Inter font-bold font text-xl'>Todas las categorías</p>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={aaIcon}
          color='#FFBC99'
          text='A/A'
          redirect='/air-conditioning'
        />
        <CategoyButton
          icon={beautyIcon}
          color='#5DD9C1'
          text='Belleza'
          redirect='/beauty'
        />
        <CategoyButton
          icon={homeArticlesIcon}
          color='#B1E5FC'
          text='Hogar'
          redirect='/home-articles'
        />
      </div>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={paintIcon}
          color='#B5EBCD'
          text='Pintura'
          redirect='/paint'
        />
        <CategoyButton
          icon={cleanIcon}
          color='#FFD88D'
          text='Limpieza'
          redirect='/cleaning'
        />
        <CategoyButton
          icon={plumberIcon}
          color='#CBEBA4'
          text='plomería'
          redirect='/plumber'
        />
      </div>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={electricistIcon}
          color='#FB9B9B'
          text='Electricidad'
          redirect='/electricity'
        />
        <CategoyButton
          icon={freightIcon}
          color='#F8B0ED'
          text='Fletes'
          redirect='/freight'
        />
        <CategoyButton
          icon={barberIcon}
          color='#AFC6FF'
          text='Barberías'
          redirect='/barber'
        />
      </div>
    </div>
  );
}
