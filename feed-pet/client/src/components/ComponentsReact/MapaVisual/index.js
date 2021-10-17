import React from "react";
import Button from '@material-ui/core/Button';
import "./styles.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import { Link } from "react-router-dom";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
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
            let lista = []
            for (let alerta of alertas) {
              const { tipo_animal, nome, avatar } = alerta.animal;
              let marker = {};
              const { local } = alerta;
              const [lat,lng] = local.split(" ");
              marker = {
                nome: nome,
                avatar: avatar,
                id_animal: alerta.id_animal,
                lat: +lat,
                lng: +lng,
                time: alerta.dataDesaparecimento,
                tipo: tipo_animal
              };
              console.log(tipo_animal)
              lista.push(marker)
            }
            setMarkers(lista)
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

  function catOrDog(tipo_animal){
      if (tipo_animal==="Cachorro") {
        return 'https://i.imgur.com/cF0FVK0.png'
      }
      else {
        return 'https://i.imgur.com/16GoOln.png'
      }
  }
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
              url: catOrDog(marker.tipo),  
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
            <div class="animalAvatar"><h2>
                {selected.nome}</h2>
              <img src={selected.avatar} /></div>
              <p>
                Desapareceu as {selected.time}</p>
                
                <Button size="small" color="primary">
                <Link to={`/perfil/${selected.id_animal}`} id={selected.id_animal} activeClassName="selected" className="link-drop">Perfil do animal</Link>
                </Button>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

