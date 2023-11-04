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

import useFilters from "../hooks/useFilters";

export default function CategoriesPage() {
  const {handleFilterByCategory} = useFilters();

  return (
    <div className='flex flex-col w-full mt-5 h-[450px] items-center justify-center pt-2 gap-10'>
      <div className='w-1.5 rounded-lg h-6 bg-primary-800'></div>
      <p className='font-Inter font-bold font text-xl'>Todas las categorías</p>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={aaIcon}
          color='#FFBC99'
          handleFilterByCategory={handleFilterByCategory}
          id='1'
          text='A/A'
        />
        <CategoyButton
          icon={beautyIcon}
          color='#5DD9C1'
          handleFilterByCategory={handleFilterByCategory}
          id='2'
          text='Belleza'
          redirect='/beauty'
        />
        <CategoyButton
          icon={homeArticlesIcon}
          color='#B1E5FC'
          handleFilterByCategory={handleFilterByCategory}
          id='3'
          text='Hogar'
          redirect='/home-articles'
        />
      </div>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={paintIcon}
          color='#B5EBCD'
          handleFilterByCategory={handleFilterByCategory}
          id='4'
          text='Pintura'
          redirect='/paint'
        />
        <CategoyButton
          icon={cleanIcon}
          color='#FFD88D'
          handleFilterByCategory={handleFilterByCategory}
          id='5'
          text='Limpieza'
          redirect='/cleaning'
        />
        <CategoyButton
          icon={plumberIcon}
          color='#CBEBA4'
          handleFilterByCategory={handleFilterByCategory}
          id='6'
          text='plomería'
          redirect='/plumber'
        />
      </div>
      <div className='flex w-full h-screen items-center justify-center gap-12'>
        <CategoyButton
          icon={electricistIcon}
          color='#FB9B9B'
          handleFilterByCategory={handleFilterByCategory}
          id='7'
          text='Electricidad'
          redirect='/electricity'
        />
        <CategoyButton
          icon={freightIcon}
          color='#F8B0ED'
          handleFilterByCategory={handleFilterByCategory}
          id='8'
          text='Fletes'
          redirect='/freight'
        />
        <CategoyButton
          icon={barberIcon}
          color='#AFC6FF'
          handleFilterByCategory={handleFilterByCategory}
          id='9'
          text='Barberías'
          redirect='/barber'
        />
      </div>
    </div>
  );
}
