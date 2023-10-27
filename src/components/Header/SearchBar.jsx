import {useState} from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "lucide-react";
import {useSelector} from "react-redux";
import {getName} from "../../redux/sliceLogin";
import axios from "axios";

const SearchBar = () => {
  const userName = useSelector(getName);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = async () => {
    try {
      const services = await axios.get(
        `http://localhost:3001/api/service/findAllService?title=${inputValue}`
      );
      console.log(services);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className='w-full flex flex-col items-start bg-white py-6 px-3'>
      <div className='flex'>
        <p className='text-md font-medium tracking-[0.15em] text-[#666C89]'>
          Hola {userName} &#128075;
        </p>
      </div>
      <h1 className='text-4xl font-bold text-[#172B4D] text-left pt-2 pb-4'>
        Que servicio estas buscando
      </h1>
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        radius='lg'
        size='lg'
        placeholder='Buscador de servicios...'
        endContent={
          <button
            onClick={handleSearch}
            className='p-4 bg-[#266DD3] h-9 w-9 flex items-center justify-center rounded-lg'
          >
            <SearchIcon
              size={20}
              className='text-white cursor-pointer flex-shrink-0'
            />
          </button>
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        classNames={{
          placeholder: "font-lg",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-sm placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "border-1",
            "border-slate-200",
            "bg-slate-200/20",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
      />
    </div>
  );
};

export default SearchBar;
