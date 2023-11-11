import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import LittleRoundedBtn from "../Shared/LittleRoundedBtn";
import aaIcon from "../../assets/images/a-a icon.png";
import beautyIcon from "../../assets/images/beauty-icon.png";
import barberIcon from "../../assets/images/barber-icon.png";
import cleanIcon from "../../assets/images/clean-icon.png";
import electricistIcon from "../../assets/images/electricist-icon.png";
import freightIcon from "../../assets/images/freight-icon.png";
import homeArticlesIcon from "../../assets/images/home-articles-icon.png";
import paintIcon from "../../assets/images/paint-icon.png";
import plumberIcon from "../../assets/images/plumber-icon.png";

export default function Modifications() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col w-full mt-5 h-[450px] items-center justify-center pt-2 gap-10">
        <div className="w-1.5 rounded-lg h-6 bg-primary-800"></div>
        <div className="flex w-full h-screen items-center justify-center gap-12">
          <LittleRoundedBtn 
            icon={aaIcon} 
            color="#FFBC99" 
            id="1" 
            redirect='/editCategory'
            text="A/A" 
          />
          <LittleRoundedBtn
            icon={beautyIcon}
            color="#5DD9C1"
            id="2"
            redirect='/editCategory'
            text="Belleza"
          />
          <LittleRoundedBtn
            icon={homeArticlesIcon}
            color="#B1E5FC"
            id="3"
            redirect='/editCategory'
            text="Hogar"
          />
        </div>
        <div className="flex w-full h-screen items-center justify-center gap-12">
          <LittleRoundedBtn
            icon={paintIcon}
            color="#B5EBCD"
            id="4"
            redirect='/editCategory'
            text="Pintura"
          />
          <LittleRoundedBtn
            icon={cleanIcon}
            color="#FFD88D"
            id="5"
            redirect='/editCategory'
            text="Limpieza"
          />
          <LittleRoundedBtn
            icon={plumberIcon}
            color="#CBEBA4"
            id="6"
            redirect='/editCategory'
            text="plomería"
          />
        </div>
        <div className="flex w-full h-screen items-center justify-center gap-12">
          <LittleRoundedBtn
            icon={electricistIcon}
            color="#FB9B9B"
            id="7"
            redirect='/editCategory'
            text="Electr."
          />
          <LittleRoundedBtn
            icon={freightIcon}
            color="#F8B0ED"
            id="8"
            redirect='/editCategory'
            text="Fletes"
          />
          <LittleRoundedBtn
            icon={barberIcon}
            color="#AFC6FF"
            id="9"
            redirect='/editCategory'
            text="Barberías"
          />
        </div>
        <div className="w-1/2 flex justify-end items-center p-4">
          <Link
            to="/create-new-category"
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Create new category service
          </Link>
        </div>
      </div>
    </div>
  );
}
