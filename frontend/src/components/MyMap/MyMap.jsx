import {useSelector} from "react-redux";
import {getLocation} from "../../redux/sliceLogin";
import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import {MAPS_API_KEY} from "../../services/Google";

export default function MyMap() {
  const location = useSelector(getLocation);

  const {isLoaded} = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API_KEY,
  });

  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  const containerStyle = {
    width: "350px",
    height: "350px",
  };

  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-8'>
      <div className='flex w-full items-start pl-4'>
        <div className='w-1.5 rounded-lg h-6 bg-primary-600'></div>
        <p className='font-Inter font-bold font text-xl items-start ml-2'>
          Mi Ubicación
        </p>
      </div>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
