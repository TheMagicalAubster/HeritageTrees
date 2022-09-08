import './App.css';
import React, { useEffect, useState, Text } from 'react';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';
import L from "leaflet"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';


const position = [51.047, -114.050];

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});


function App() {
  const [trees, setTrees] = useState([])

  useEffect(() => {
    getTheTrees();
  },[])

  const getTheTrees = () => {
    axios.get("https://data.calgary.ca/resource/tfs4-3wwa.json?heritage_trees=Y&$limit=600000")
    .then((response) => {
      const allTrees = response.data;
      setTrees(allTrees)
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return(
    <div>
      <Navbar className="Navbar" style= {{ height: '10vh'}}>
        <Container >Heritage Tree Marker Map</Container>
        <Container></Container>
      </Navbar>
      <MapContainer className='Map'
        center={position} 
        zoom={14} 
        scrollWheelZoom={true} 
        style= {{width: '65vw', height: '65vh', position: 'absolute', marginLeft: "17%"}}
        >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trees.length > 0 && trees.map((tree, index) => (
          <Marker key={index}
            position={[
              tree.point.coordinates[1],
              tree.point.coordinates[0]
            ]}
            icon={icon}
            >
              <Popup>
                <div>This {tree.common_name} is:</div>
                <ul>
                  <li>Status: {tree.asset_type}</li>
                  <li>Size: {tree.mature_size}</li>
                  <li>Type: {tree.asset_subtype}</li>
                </ul>
              </Popup>
            </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App;

