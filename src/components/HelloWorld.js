/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import styles from "./HelloWorldStyles.js";
import Tile from "./Tile.js";
// Simple array to get us started and start seeing what we can do
const peopleArray = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Person" },
  { id: 3, name: "Cat" }
];
// Funcitonal component that has been exported and then imported into App.js
function HelloWorld() {
// React hook that keeps a small bit of state for us
  const [border, setBorder] = useState(null);
// Logging what our constant of border contains
  console.log("Index of list passed to border", border);

  return (
    peopleArray.map((person, index) => (
    <div
      key={person.id}
      onClick={() => setBorder(index)}
      css={border === index ? styles.hotdog : styles.notHotdog}
    >
        {/* 
        Tile component gets imported, peopleArray is mapped through and mapped data is sent into Tile component 
        */}
      <Tile key={person.id} person={person} />

    </div>)
  ));
  
}

export default HelloWorld;
