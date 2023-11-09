import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  FolderOpen,
  Wrench,
  Users,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { Button } from "@nextui-org/react";

export default function Sidebar() {
  const navigate = useNavigate();

  const [activeRoute, setActiveRoute] = useState("");

  return (
    <div className="h-screen w-1/5 p-4">
      <div className="mb-4 space-y-4">
        <p className="text-sm text-gray-500 pl-1 -ml-20">DASHBOARD</p>
      </div>

      <div className="flex flex-col space-y-4">
        <Button
          onClick={() => {
            navigate("/dashboard-admin");
            setActiveRoute("dashboard-admin");
          }}
          variant="flat"
          className={`${
            activeRoute === "dashboard-admin"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <Home size={30} strokeWidth={2.2} color="#266DD3" className="mr-2" />
          <span
            className={`text-gray-500 ${
              activeRoute === "/dashboard-admin"
                ? "text-gray-900"
                : "hover:text-gray-900"
            }`}
          >
            Home
          </span>
        </Button>

        <Button
          onClick={() => {
            navigate("/active-services");
            setActiveRoute("active-services");
          }}
          variant="flat"
          className={`${
            activeRoute === "active-services"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <FolderOpen
            size={30}
            strokeWidth={2.2}
            color="#266DD3"
            className="mr-2"
          />
          <span
            className={`text-gray-500 ${
              activeRoute === "/active-services"
                ? "text-gray-900"
                : "hover:text-gray-900"
            }`}
          >
            Services Actives
          </span>
        </Button>

        <Button
          onClick={() => {
            navigate("/modifications");
            setActiveRoute("modifications");
          }}
          variant="flat"
          className={`${
            activeRoute === "modifications"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <Wrench
            size={30}
            strokeWidth={2.2}
            color="#266DD3"
            className="mr-2"
          />
          <span
            className={`text-gray-500 ${
              activeRoute === "/modifications"
                ? "text-gray-900"
                : "hover:text-gray-900"
            }`}
          >
            Modifications
          </span>
        </Button>

        <Button
          onClick={() => {
            navigate("/users");
            setActiveRoute("users");
          }}
          variant="flat"
          className={`${
            activeRoute === "users"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <Users size={30} strokeWidth={2.2} color="#266DD3" className="mr-2" />
          <span
            className={`text-gray-500 ${
              activeRoute === "/users" ? "text-gray-900" : "hover:text-gray-900"
            }`}
          >
            Users
          </span>
        </Button>

        <Button
          onClick={() => {
            navigate("/billing");
            setActiveRoute("billing");
          }}
          variant="flat"
          className={`${
            activeRoute === "billing"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <CreditCard
            size={30}
            strokeWidth={2.2}
            color="#266DD3"
            className="mr-2"
          />
          <span
            className={`text-gray-500 ${
              activeRoute === "/billing"
                ? "text-gray-900"
                : "hover:text-gray-900"
            }`}
          >
            Billing
          </span>
        </Button>

        <Button
          onClick={() => {
            navigate("/consultations-claims");
            setActiveRoute("consultations-claims");
          }}
          variant="flat"
          className={`${
            activeRoute === "consultations-claims"
              ? "bg-blue-200"
              : "bg-primary-100 text-black"
          } flex items-center justify-start w-full`}
        >
          <HelpCircle
            size={30}
            strokeWidth={2.2}
            color="#266DD3"
            className="mr-2"
          />
          <span
            className={`text-gray-500 ${
              activeRoute === "/consultations-claims"
                ? "text-gray-900"
                : "hover:text-gray-900"
            }`}
          >
            Consultations/Claims
          </span>
        </Button>
      </div>
    </div>
  );
}
