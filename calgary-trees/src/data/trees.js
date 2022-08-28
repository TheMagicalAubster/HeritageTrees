import React, { Component } from 'react';
import axios from 'axios';

class Trees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://data.calgary.ca/resource/tfs4-3wwa.json")
      .then(response => {
        const data = response.data;
        this.setState({ data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='Trees'>
        {this.state.data.map((item, index) => <TreeList key={index} {...item} />)}
      </div>
    )
  }
}

const TreeList = (props) => (
  <p> 
    HI
    {props}
  </p>
)

export default Trees;





// async function getTrees() {
//   let trees = await axios.get(
//     "https://data.calgary.ca/resource/tfs4-3wwa.json"
//   );
//   // console.log(trees.data[0].asset_type);
//   // console.log(trees.data[0].asset_subtype);
//   // console.log(trees.data[0].common_name);
//   // console.log(trees.data[0].mature_size);
//   // console.log(trees.data[0].maintained_by);
//   // console.log(trees.data[0].tree_maintenance);
//   console.log(trees.data[0].point.coordinates);
// }

// getTrees();