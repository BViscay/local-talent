import LittleRoundedBtn from "../Shared/LittleRoundedBtn";
import aaIcon from "../../assets/images/a-a icon.png";
import beautyIcon from "../../assets/images/beauty-icon.png";
import homeArticlesIcon from "../../assets/images/home-articles-icon.png";
import arrowFoward from "../../assets/images/arrow-foward.png";
import useFilters from "../../hooks/useFilters";

export default function Categories() {
  const {handleFilterByCategory} = useFilters();

  return (
    <div className='flex justify-center w-full h-max mt-1 py-1 bg-white'>
      <div className='flex gap-10'>
        <LittleRoundedBtn
          icon={aaIcon}
          color='#FFBC99'
          handleFilterByCategory={handleFilterByCategory}
          id='1'
          text='A/A'
        />
        <LittleRoundedBtn
          icon={beautyIcon}
          color='#5DD9C1'
          handleFilterByCategory={handleFilterByCategory}
          id='2'
          text='Belleza'
        />
        <LittleRoundedBtn
          icon={homeArticlesIcon}
          color='#B1E5FC'
          handleFilterByCategory={handleFilterByCategory}
          id='3'
          text='Hogar'
        />
        <LittleRoundedBtn
          icon={arrowFoward}
          color='#EAEDED'
          text='Todos'
          redirect='/categories'
        />
      </div>
    </div>
  );
}
