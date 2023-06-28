import { useState } from "react";
import { marked } from "marked";

export const MarkedConverter = () => {
    const [markedVal, setMarkedVal] = useState(
        '# Default marked text'
    )
    return (
        <div id="converter" dangerouslySetInnerHTML={createMarkUp(markedVal)}></div>
    )
}

export const createMarkUp = (val) => {
    return { __html: marked(val) }
}