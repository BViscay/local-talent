import { useSelector } from "react-redux";
import { getName } from "../redux/sliceLogin";
import Sidebar from "../components/Dashboard-/Sidebar";

export default function DashboardAdmin() {
  const userName = useSelector(getName);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full">
        <div className="mt-8 mx-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 ml-4">
            Hola {userName} 👋
          </h1>
          <p className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider mb-4">
            Here are all your Relik analytics overviews
          </p>
          <div className="grid grid-cols-2 gap-4">{/* Otros contenidos */}</div>
        </div>
      </div>
    </div>
  );
}
