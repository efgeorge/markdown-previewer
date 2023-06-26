import "../styles/Typefield.scss";
import Toolbar from "./Toolbar";

const Typefield = () => {
    return (
        <div id="editorWraper">
            <Toolbar title={"Editor"} />
            <textarea id="editor"></textarea>
        </div>
    )
}

export default Typefield;