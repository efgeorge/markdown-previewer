import "../styles/Previewer.scss";
import MarkedConverter from "../utils/MarkedConverter";
import Toolbar from "./Toolbar";

const Previewer = () => {
    return (
        <div id="previeWrapper">
            <Toolbar title={"Previewer"} />
            <div id="preview">
                <MarkedConverter />
            </div>
        </div>
    )
}

export default Previewer;