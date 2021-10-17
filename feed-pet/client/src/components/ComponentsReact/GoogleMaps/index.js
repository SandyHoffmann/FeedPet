import React from "react";
import iconLocal from "../../../assets/local.png"

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "50vh",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: -26.9187,
  lng: -49.066,
};

export function MapaInterativo(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [marker, setMarker] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(async () => {
      try {
        const res = await fetch("http://localhost:3000/alertas", {
            method: "GET"
        });

        if (res.ok) {
            const alertas = await res.json();
            for (let alerta of alertas) {
              const { local } = alerta
              const { lat, lgn } = local.split("");
              console.log(`${lat} ${lgn}`);
            }
            console.log(alertas)
        }
    } catch (error) {
        console.log(error);
    }
      
      // Atribuir ao vetor de markers a localização
    }, []);

    React.useEffect(async () => {
      props.funcao(marker);
    }, [marker]);

  const onMapClick = React.useCallback((e) => {
    setMarker(() => 
      ({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      }),
    );
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  // Função de enviar formulário
  // const { lat, lng } selected.getPosition();
  // `${lat} ${lng}`  

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClick}
      >
        {marker && (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {              
              setSelected(marker); 
            }}

            icon={{
              url: iconLocal,  
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        )}

      </GoogleMap>
    </div>
  );
}

