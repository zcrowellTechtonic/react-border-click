/** @jsx jsx */
import { jsx } from "@emotion/core";
import styles from "./TileStyles.js";

function Tile({ animal, border, index }) {
  console.log("Border value", border, "Index value", index)
  return(
  /* When the onClick event in our parent component happens. 
  It is sent here. The ternary checks if the current item equals it's index.
  If it does then a certain style is applied. If it does not. A default style is applied.
  */
  <div css={border === index ? styles.hot : styles.not}>
    <div>
      <p>{animal.name}</p>
    </div>
    <p>{animal.description}</p>
  </div>
    )
}
export default Tile;
