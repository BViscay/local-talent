import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setLocation} from "../redux/sliceLogin";

const useGeoLocation = () => {
  const dispatch = useDispatch();
  const {coords, isGeolocationAvailable, isGeolocationEnabled} =
    useGeolocated();

  const handleGeoLocation = () => {
    if (isGeolocationAvailable && isGeolocationEnabled) {
      const location = {
        latitude: coords.latitude,
        longitude: coords.longitude
      }
      dispatch(setLocation(location));
    }
  };
  return {handleGeoLocation};
};

export default useGeoLocation;
