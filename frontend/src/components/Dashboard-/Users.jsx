import Sidebar from "./Sidebar";
import MenuOptionUser from "./MenuOptionUser";
import useUser from "../../hooks/admin/useUser";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const { handlerAllUsers } = useUser();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const fetchData = async () => {
      await handlerAllUsers();
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <colgroup>
            <col style={{ width: "18%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "15%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "30%" }} />
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
              <th className="px-9 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                WhatsApp
              </th>
              <th className="px-10 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 ${
                  user.status === 2 ? "line-through" : ""
                }`}
              >
                <td className="px-3 py-4 border-r border-gray-200">
                  {user.firstname}
                </td>
                <td className="px-3 py-4 border-r border-gray-200">
                  {user.lastname}
                </td>
                <td className="px-3 py-4 border-r border-gray-200">
                  {user.email}
                </td>
                <td className="px-9 py-4 border-r border-gray-200">
                  {user.whatsapp}
                </td>
                <td className="px-12 py-4">
                  <MenuOptionUser userId={user.id} status={user.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
