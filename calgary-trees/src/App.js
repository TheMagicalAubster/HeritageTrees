import './App.css';
import React, { useEffect, useState } from 'react';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios';
import L from "leaflet"
// import 'leaflet/dist/leaflet.css'
//import Trees from './data/trees.js';
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
    axios.get("https://data.calgary.ca/resource/tfs4-3wwa.json")
    .then((response) => {
      const allTrees = response.data;
      // console.log(allTrees)
      setTrees(allTrees)
      // allTrees.map((item, index) => {
      //   console.log(item.point.coordinates[1], item.point.coordinates[0], index)
      // })
      //setTrees();
    })
    .catch(error => console.error(`Error: ${error}`));
  }

//console.log(trees[0].point)
  // console.log(marker)


return(
  <div>
    <Navbar></Navbar>
    <Container></Container>
    <MapContainer 
              center={position} 
              zoom={14} 
              scrollWheelZoom={true} 
              style= {{width: '50vw', height: '50vh', marginRight:"10em", marginLeft:"10em", }}>
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






  //console.log(treePositions[0])
//trees.data.map((item) => console.log(item.point.coordinates));
  

  // function TreeMarkers() {
  //   return treePositions.map((coordinates, index) => {
  //     return <Marker key={index} position={coordinates} icon={icon}> </Marker>
  //   });
  // }

  // if(treePositions.length > 0) {
  //   return (
  //       // trees.map((treePositions, index) => {
  //       //   // console.log(tree.point.coordinates);
  //       //   // let position = tree.point.coordinates
  //       // return(
  //       //   // <div key={index}>
  //       //   //   HAPPY TREES DANCE
  //       //   // </div>
  //       //   <div id="map" key={index}>
        //   <MapContainer 
        //       center={[51.047, -114.059]} 
        //       zoom={14} 
        //       scrollWheelZoom={true} 
        //       style= {{width: '50 vw', height: '50vh'}}>
  //       //     <TileLayer
  //       //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       //     />
  //       //     <Marker position={position}>
  //       //       <Popup>
  //       //         popup here
  //       //       </Popup>
  //       //     </Marker>
  //       //   </MapContainer>
  //       // </div>
  //      )
  // } else {
  //   return (
  //     <div>sorry, no trees yet, eh</div>
  //   )
  // }
  // //   <>
  // //     <p>Hello, werld</p>
  // //     {/* {trees.data.map((item) => {
  // //       return(<li> {item.point.coordinates}</li>)
  // //     })} */}
  // //     <p trees={trees}>  </p>
  // //     {/* <p > Trees List </p> {trees.data.map((item, index) => <ol key={index}> Tree: {item.point.coordinates} </ol>)} */}
  // //   </>


}

export default App;


// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

//   componentDidMount() {
//     axios.get("https://data.calgary.ca/resource/tfs4-3wwa.json")
//       .then(response => {
//         const data = response.data;
//         this.setState({ data })
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.map((item, index) => <TreeList key={index}{...item} />)}
//       </div>
//     )
//   }
// }

// const TreeList = (props) => (
//   <p> {props}</p>
// )

// render(<App />, document.getElementById('root'));




// function App() {

//   return (
//     <>
//     <div>
//     <div id="map"></div>
//     </div>
    // <div id="map">
    //    <MapContainer 
    //       center={[51.047, -114.059]} 
    //       zoom={14} 
    //       scrollWheelZoom={false} 
    //       style= {{width: '50 vw', height: '50vh'}}>
    //     <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker position={position}>
    //       <Popup>
    //         popup here
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>
    
//       <Trees /> 
//     </>



//   );
// }

