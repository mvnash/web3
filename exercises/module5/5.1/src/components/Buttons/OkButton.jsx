import { useContext } from "react";
import { Context as ChoiceContext } from "../../contexts/ChoiceContext";

function OkButton() {
  const { ok, increaseOk } = useContext(ChoiceContext);

  return (
    <div>
      Ok : {ok}
      <button onClick={increaseOk}>increase OK</button>
    </div>
  );
}

export default OkButton;
