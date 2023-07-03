import "../styles/Previewer.scss";
import { useState } from "react";
import { marked } from "marked";
import Toolbar from "./Toolbar";

const Previewer = () => {
    const [markedVal, setMarkedVal] = useState(
        '# Default marked text\n' + "## This is a sub-heading...\n" + "Here is some code, `<div></div>`, between 2 backticks."
    );
    const renderer = new marked.Renderer();
    const markdown = marked(markedVal, {sanitize: true});

    return (
        <div id="previeWrapper">
            <Toolbar title={"Previewer"} />
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, { renderer: renderer })}}></div>
        </div>
    )
}

export default Previewer;