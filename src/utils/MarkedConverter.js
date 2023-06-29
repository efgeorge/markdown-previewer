import { useState } from "react";
import { marked } from "marked";

// export const MarkedConverter = () => {
//     const [markedVal, setMarkedVal] = useState(
//         '# Default marked text'
//     )
//     return <div id="converter" dangerouslySetInnerHTML={createMarkUp(markedVal)}></div>
// }

// export const createMarkUp = (val) => {
//     return { __html: marked(val) }
// }


// TODO: pass markedVal as props from App.js
const MarkedConverter = (props) => {
    const [markedVal, setMarkedVal] = useState(
        '# Default marked text\n' + "## This is a sub-heading...\n" + "Here is some code, `<div></div>`, between 2 backticks."
    );
    const renderer = new marked.Renderer();
    const markdown = marked(markedVal, {sanitize: true});
    return (
        <div>
            <div id="converter" dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}}></div>
        </div>
    );
}

export default MarkedConverter;