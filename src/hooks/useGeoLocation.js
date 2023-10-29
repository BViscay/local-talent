import {useGeolocated} from "react-geolocated";
import {useDispatch} from "react-redux";
import {setLocation} from "../redux/sliceLogin";

const useGeoLocation = () => {
  const dispatch = useDispatch();
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {handleGeoLocation};
};

export default useGeoLocation;
