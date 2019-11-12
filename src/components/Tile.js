/** @jsx jsx */
import { jsx } from "@emotion/core";
import styles from "./TileStyles.js";

function Tile({ person }) {
  return(
  <div css={styles.hot}>
    <span css={styles.not}>{person.name}</span>
  </div>
    )
}
export default Tile;
