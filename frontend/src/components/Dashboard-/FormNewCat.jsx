import { Link } from "react-router-dom";
import Input from "../Shared/Input";
import { X } from "lucide-react";

const FormNewCat = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="max-w-md p-4 bg-white shadow-md rounded-md flex flex-col items-center">
        <div className="self-end mb-4">
          <Link title="cancel" to="/modifications">
            <X />
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-4">Create new category service</h1>
        <form className="space-y-1 w-full h-max pb-5 mb-4l">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-gray-700 font-semibold mb-1">
              Name
            </label>
            <Input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="icon" className="text-gray-700 font-semibold mb-1">
              Icon image
            </label>
            <Input
              type="file"
              id="icon"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
          </div>
          <button
            title="Crear nueva categoria"
            type="submit"
            className="w-40 text-white font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900"
          >
            Crear Categ. →
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormNewCat;