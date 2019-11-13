/** @jsx jsx */
import { jsx } from "@emotion/core";
import styles from "./AppStyles.js";
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div css={styles.mainContainer}>
      <div>
        <HelloWorld /> 
      </div>
    </div>
  );
}

export default App;
