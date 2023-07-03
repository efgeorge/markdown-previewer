import './App.scss';
import { useState } from "react";
import Previewer from './components/Previewer';
import Typefield from './components/Typefield';

function App() {
  const [markedVal, setMarkedVal] = useState(
    '# Default marked text\n' + "## This is a sub-heading...\n" + "Here is some code, `<div></div>`, between 2 backticks."
);
  return (
    <div className="App">
      <Typefield setMarkedVal={setMarkedVal} markedVal={markedVal}/>
      <Previewer markedVal={markedVal}/>
    </div>
  );
}

export default App;
