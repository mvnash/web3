import { useContext } from "react";
import { Context as ChoiceContext } from "../../contexts/ChoiceContext";

function GoodButton() {
  const { good, increaseGood } = useContext(ChoiceContext);

  return (
    <div>
      Good : {good}
      <button onClick={increaseGood}>increase Good</button>
    </div>
  );
}

export default GoodButton;
