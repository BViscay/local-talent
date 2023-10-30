import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setLocation} from "../redux/sliceLogin";
import useFilters from "./useFilters";

const useGeoLocation = () => {
  const dispatch = useDispatch();
  const {handleFilterByLocation} = useFilters();
  const {isGeolocationAvailable, isGeolocationEnabled} = useGeolocated();

  const handleGeoLocation = async () => {
    if (isGeolocationAvailable && isGeolocationEnabled) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        dispatch(setLocation(location));
        handleFilterByLocation(location);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {handleGeoLocation};
};

export default useGeoLocation;
