import { css, jsx } from '@emotion/core'

const styles = {
    hot : css`
     text-align: center;
     background-color: grey;
     height: 150px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border: 4px solid dodgerblue;
     margin: 5px;
     cursor: pointer;
`,
    not : css`
    text-align: center;
     background-color: grey;
     border: 4px solid grey;
     height: 150px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 5px;
     cursor: pointer;

`
}
export default styles