import Sidebar from "./Sidebar";

export default function Billing() {
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
        </table>
      </div>
    </div>
  );
}
