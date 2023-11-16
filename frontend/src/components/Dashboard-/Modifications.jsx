import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useCategories from "../../hooks/admin/useCategories";
import LittleRoundedBtn from "../Shared/LittleRoundedBtn";

export default function Modifications() {
  const { handlerCategories } = useCategories();

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    const fetchData = async () => {
      await handlerCategories();
    };
    fetchData();
  },[]);
    

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full mt-5 items-center justify-start pt-2 gap-10">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
          {categories.map((category) => (
            <LittleRoundedBtn
              key={category.id}
              icon={category.icon}
              id={category.id}
              redirect={`/editCategory/`}
              text={category.name}
              className="flex-basis-1/3"
            />
          ))}
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
