import LittleRoundedBtn from "../Shared/LittleRoundedBtn";
import aaIcon from "../../assets/images/a-a icon.png";
import beautyIcon from "../../assets/images/beauty-icon.png";
import homeArticlesIcon from "../../assets/images/home-articles-icon.png";
import arrowFoward from "../../assets/images/arrow-foward.png";

export default function Categories() {
  return (
    <div className='flex justify-center w-full h-[110px] mt-3'>
      <div className='flex gap-10'>
        <LittleRoundedBtn
          icon={aaIcon}
          color='#FFBC99'
          text='A/A'
          redirect='/air-conditioning'
        />
        <LittleRoundedBtn
          icon={beautyIcon}
          color='#5DD9C1'
          text='Belleza'
          redirect='/beauty'
        />
        <LittleRoundedBtn
          icon={homeArticlesIcon}
          color='#B1E5FC'
          text='Hogar'
          redirect='/home-articles'
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
