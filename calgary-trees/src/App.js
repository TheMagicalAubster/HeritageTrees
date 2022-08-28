import './App.css';
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
//import 'leaflet/dist/leaflet.css'
import Trees from './data/trees.js';

const position = {Trees}

function App() {





  return (
    <>
    <div>
    </div>
    <div id="leaflet-container">
       <MapContainer 
          center={[51.047, -114.059]} 
          zoom={14} 
          scrollWheelZoom={false} 
          style= {{width: '50 vw', height: '50vh'}}>
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
    
    </>



  );
}

export default App;
