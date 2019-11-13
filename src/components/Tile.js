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
    <span css={styles.not}>{animal.name}</span>
    <span css={styles.not}>{animal.description}</span>
  </div>
    )
}
export default Tile;
