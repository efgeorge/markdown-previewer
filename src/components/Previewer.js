import "../styles/Previewer.scss";
import { useState } from "react";
import { marked } from "marked";
import Toolbar from "./Toolbar";

const Previewer = ({markedVal}) => {
    
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