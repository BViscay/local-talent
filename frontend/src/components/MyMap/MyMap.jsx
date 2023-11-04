import {useSelector} from "react-redux";
import {getLocation} from "../../redux/sliceLogin";
import {Map} from "@googlemaps/react-wrapper";
import {MAPS_API_KEY} from "../../services/Google";

export default function MyMap() {
  const location = useSelector(getLocation);

  const options = {
    center: {lat: location.latitude, lng: location.longitude},
    zoom: 10,
  };
  return (
    <div>
      <Map apiKey={MAPS_API_KEY} options={options}>
        {/* <Marker position={{lat: location.latitude, lng: location.longitude}} /> */}
      </Map>
    </div>
  );
}
