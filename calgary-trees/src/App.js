import './App.css';
import React, { useEffect, useState } from 'react';
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
      // console.log(response)
      setTrees(allTrees)
      // allTrees.map((item, index) => {
      //   console.log(item, index)
      //   return 1;
      // })
      //setTrees();
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return(
    <div>
      <Navbar
        style= {{ height: '10vh'}}
        ></Navbar>
      <MapContainer className='Map'
        center={position} 
        zoom={14} 
        scrollWheelZoom={true} 
        style= {{width: '65vw', height: '65vh', position: 'absolute', marginLeft: "20%"}}
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
                This here is a: {tree.asset_type}
                The kind of tree it is: {tree.asset_subtype} 
                The common name is: {tree.common_name}
                This tree is bound to get: {tree.mature_size}
                The maintenance is: {tree.tree_maintenance}
                They who do that is: {tree.maintained_by}

              </Popup>
            </Marker>
        ))}


      </MapContainer>

    </div>
  )


}

export default App;

