import { useContext } from "react";
import { Context as ChoiceContext } from "../../contexts/ChoiceContext";

function BadButton() {
  const { bad, increaseBad } = useContext(ChoiceContext);

  return (
    <div>
      Bad : {bad}
      <button onClick={increaseBad}>increase Bad</button>
    </div>
  );
}

export default BadButton;
