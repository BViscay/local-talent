import Sidebar from "./Sidebar";
import useSubUser from "../../hooks/admin/useSubUser";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Billing() {
  const { handlerUserSub } = useSubUser();
  const userSub = useSelector((state) => state.userSub.userSub);

  useEffect(() => {
    const fetchData = async () => {
      await handlerUserSub();
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="w-full border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "13%" }} />
        </colgroup>
        <thead>
          <tr>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Plan
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              {/* <FilterPlanes /> */}
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {userSub && userSub.sales ? (
            userSub.sales.map((sale, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-3 py-4 border-r border-gray-200">
                  {sale.user.firstname}
                </td>
                <td className="px-3 py-4 border-r border-gray-200">
                  {sale.user.lastname}
                </td>
                <td className="px-3 py-4 border-r border-gray-200">
                  {sale.user.email}
                </td>
                <td className="px-3 py-4 border-r border-gray-200">
                  {sale.product.description}
                </td>
                <td className="px-3 py-4">
                  {/* No se le añade el borde a la columna de FilterPlanes */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-3 py-4 text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);
}