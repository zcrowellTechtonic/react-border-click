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
  <div css={border === index ? styles.hotdog : styles.notHotdog}>
      <h4 css={styles.petHeader}>{animal.name}</h4>
    <p>{animal.description}</p>
    <button 
    onClick={() => alert(index)}
    disabled={border === index ? true : false}
    css={border === 'none' ? styles.noBtn : styles.btn}
    >Button</button>
  </div>
    )
}
export default Tile;
