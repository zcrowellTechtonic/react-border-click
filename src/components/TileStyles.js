import { css, jsx } from '@emotion/core'

const styles = {
    hotdog : css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(226, 226, 226);
    background-color: rgb(70, 70, 70);
    border: 3px solid rgb(43, 155, 62);
    height: 13em;
    width: 100em;
    margin: 10px;
    margin: 10px auto;
`,
    notHotdog : css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(226, 226, 226);
    background-color: rgb(70, 70, 70);
    border: 3px solid rgb(70, 70, 70);
    height: 13em;
    width: 100em;
    margin: 10px auto;
`,
petHeader : css`
   margin: 10px;
`,
noBtn : css`
   display: none;
`,
btn : css`
   background-color: white;
   border-radius: 5px;
   font-size: 1em;
`
}
export default styles