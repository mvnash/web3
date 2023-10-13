import { useContext } from "react";
import { Context as ChoiceContext } from "../../contexts/ChoiceContext";
import BadButton from "../Buttons/BadButton";
import GoodButton from "../Buttons/GoodButton";
import OkButton from "../Buttons/OkButton";

function App() {
  const {resetAll} = useContext(ChoiceContext);

  return (
    <div className="App">
      <ul>
        <li>
          <GoodButton />
        </li>
        <li>
          <OkButton/>
        </li>
        <li>
          <BadButton/>
        </li>
      </ul>
      <button onClick={resetAll}>Reset ALL</button>
    </div>
  );
}

export default App;
