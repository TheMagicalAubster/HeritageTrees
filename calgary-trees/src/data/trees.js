import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';







async function getTrees() {
  let trees = await axios.get(
    "https://data.calgary.ca/resource/tfs4-3wwa.json"
  );
  // console.log(trees.data[0].asset_type);
  // console.log(trees.data[0].asset_subtype);
  // console.log(trees.data[0].common_name);
  // console.log(trees.data[0].mature_size);
  // console.log(trees.data[0].maintained_by);
  // console.log(trees.data[0].tree_maintenance);
  // console.log(trees.data[0].point.coordinates);
  trees.data.map((item, index) => console.log(item.point.coordinates, index));
}

getTrees();