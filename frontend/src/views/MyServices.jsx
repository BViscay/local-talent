import {useEffect} from "react";
import useFilters from "../hooks/useFilters";

export default function MyServices() {
  const {handleFilterOwnServices} = useFilters();

  useEffect(() => {
    handleFilterOwnServices();
  }, []);

  return <div>MyServices</div>;
}
