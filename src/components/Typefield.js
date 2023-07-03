import "../styles/Typefield.scss";
import Toolbar from "./Toolbar";

const Typefield = ({markedVal, setMarkedVal}) => {
    let handleInput = (event) => {
        setMarkedVal(event.target.value);
    }
    return (
        <div id="editorWraper">
            <Toolbar title={"Editor"} />
            <textarea id="editor" type="text" onChange={handleInput}>{markedVal}</textarea>
        </div>
    )
}

export default Typefield;