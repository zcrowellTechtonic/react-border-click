import { css, jsx } from '@emotion/core'

const styles = {
    hotdog : css`
     text-align: center;
     background-color: #b5b5b5;
     height: 150px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border: 4px solid #31abe8;
     margin: 5px;
`,
    notHotdog : css`
    text-align: center;
     background-color: #b5b5b5;
     border: 4px solid #b5b5b5;
     height: 150px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 5px;
`,
petHeader : css`
   margin: 10px;
`
}
export default styles