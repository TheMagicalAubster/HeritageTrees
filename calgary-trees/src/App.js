import './App.css';
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = [51.047, -114.063]

function App() {
  return (
    <div>
       <MapContainer 
          center={[51.047, -114.059]} 
          zoom={13} 
          scrollWheelZoom={false} 
          >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            popup here
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
