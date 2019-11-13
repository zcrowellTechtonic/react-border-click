/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";
import Tile from "./Tile.js";
import allAnimals from "./animalsData.js";
// Our starting with an array of multiple animal objects



/* 
below is what the mock data imported from allAnimals looks like
*/



// const allAnimals = [
//   { id: 1, 
//     name: "Dog", 
//   description: "Lorem ipsum dolor amet vHS PBR&B semiotics schlitz tacos. Williamsburg umami art party chillwave asymmetrical food truck echo park venmo distillery truffaut. Kale chips retro salvia taxidermy lomo kombucha, hoodie kinfolk organic tilde pop-up yr truffaut raclette PBR&B. 90's readymade microdosing occupy migas 8-bit. Vinyl craft beer DIY tofu slow-carb try-hard. Sriracha meh PBR&B taiyaki fixie raw denim cloud bread taxidermy ugh blue bottle meggings scenester put a bird on it cliche gastropub." },
//   { id: 2, 
//     name: "Monkey", 
//   description: "Direct trade microdosing green juice, dreamcatcher tacos photo booth deep v knausgaard intelligentsia mlkshk. Venmo cronut retro, pug meggings thundercats fam dreamcatcher iPhone tattooed. Kogi austin shabby chic occupy, tumblr jianbing bicycle rights raw denim paleo marfa next level unicorn vape. Flexitarian waistcoat locavore, pug lumbersexual YOLO affogato." },
//   { id: 3, 
//     name: "Cat", 
//   description: "+1 hot chicken fingerstache street art, cred ethical retro tacos meditation letterpress pok pok everyday carry truffaut paleo. Semiotics lomo schlitz celiac shabby chic scenester flannel food truck small batch disrupt sustainable franzen deep v tumeric farm-to-table. Enamel pin blue bottle put a bird on it ugh swag waistcoat sriracha hella synth. Before they sold out cloud bread tbh organic hot chicken lumbersexual, everyday carry skateboard leggings waistcoat bicycle rights godard typewriter normcore bitters. Semiotics food truck lomo gluten-free salvia. Crucifix keffiyeh sriracha chia roof party leggings. PBR&B hexagon shaman organic venmo distillery, mlkshk lyft tote bag sriracha tattooed art party." }
// ];


// Our starting current animal
const currentAnimal = { id: 2, name: "Monkey" };
console.log("Current animal", currentAnimal)
// Using find to match our current animal to an animal object in the allAnimals array
const matchedAnimal = allAnimals.find(matched => matched.name === currentAnimal.name)
console.log("Matched animal in allAnimals", matchedAnimal);
/* 
Using Object.assign and spread operator. First we copy matchedAnimal as the first object,
then we assign the id key a new value of 4. This is to avoid the duplicate key error
while mapping through or data that is being passed to our tile component. 
*/
const assigningID = Object.assign({...matchedAnimal}, {id: 4})
console.log("Copying matched object and assigning a different ID", assigningID)
// After finding and assigning our object a new ID. We push the object into the allAnimals array
allAnimals.push(assigningID);
// Funcitonal component that has been exported and then imported into App.js
const HelloWorld = () => {
  // React hook that keeps a small bit of state for us.
  const [border, setBorder] = useState(allAnimals.length - 1);
  /*
  the length of the array that we're mapping through minus one. Length will give us the total length of
  the array starting at one. But arrays are counted starting at 0. By using the - 1 we get the true length of the 
  array.

  Example.
  const numbersArray = [1,2,3,4,5,6]
  the real location of each number in the numbersArray is [0,1,2,3,4,5]

  if you were to console log console.log(numbersArray.length) it would return 6

  if we want to LAND on the last element in an array we can use length - 1

  Example.

  numbersArray.length - 1 will be 5. Giving us the tru position of the last element in the array.
  */

  // Logging what our constant of border contains
  console.log("Index of list passed to border", border);
  return (
    // Main div holding a single version of the tile and a mapped through version
      <div>
        {/* Mapping through the allAnimals array and sending the mapped data
            in the animal prop. Also sending the index of items in the array and
            border as props.
         */}
         <h3>Example of rendering multiple tiles after mapping through array data:</h3>
        {allAnimals.map((animal, index) => (
          /* 
          As we map through we are setting the key to the id in each object. 
          This is why we assigned the object we pushed into our allAnimals array a new id.
          If react sees a duplicate id it will throw an error.

          We are setting an onClick event on the div that is holding our mapped through tile
          component. Everytime we click the div. It will set the number in border to equal the clicked
          on tiles index and send it into the tile component as a prop called border.

          This is used to check the index and apply a style.
          */
          <div key={animal.id} onClick={() => setBorder(index)}>
            <Tile
              key={animal.id}
              animal={animal}
              index={index}
              border={border}
            />
          </div>
        ))}
        {/* 
        This is an example of rendering a single tile component.
        We pass our matchedAnimal object that contains the data needed for a single tile
        instead of mapping through an array. We set border to "none" because in our tile
        component it is comparing index to border. If we send nothing for the border prop
        then they will both equal undefined which will mean they actually DO equal eachother.

        If you send no border prop the values in the console will both change to undefined which
        means the style with the border will be applied.

        Remove the border={"none"} prop and notice how the single tile will now have a blue border.
         */}
         <h3>Single tile no border: </h3>
        <Tile animal={matchedAnimal} border={"none"}></Tile>
      </div>
  );
};

export default HelloWorld;
