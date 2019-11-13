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
     border: 3px solid dodgerblue;
     color: white;
     margin: 5px;
`,
    not : css`
    text-align: center;
     background-color: grey;
     border: 3px solid grey;
     height: 150px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    margin: 5px;
`
}
export default styles