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
  width: "50vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: -26.9187,
  lng: -49.066,
};

export function MapaVisual(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(async () => {
      try {
        const res = await fetch("http://localhost:3000/alertas", {
            method: "GET"
        });

        if (res.ok) {
            const alertas = await res.json();
            for (let alerta of alertas) {
              let marker = {};
              const { local } = alerta;
              const [lat,lng] = local.split(" ");
              marker = {
                lat: lat,
                lng: lng,
                time: "teste",
              };
              markers.push(marker)
            }
            console.log(alertas)
        }
    } catch (error) {
        console.log(error);
    }
      
      // Atribuir ao vetor de markers a localização
    }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    console.log(markers)
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
      >
        {markers.map((marker) => (
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
        ))}

        {selected ? (
          <InfoWindow            
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                Alert
              </h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

