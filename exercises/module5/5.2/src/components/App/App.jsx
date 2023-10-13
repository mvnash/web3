import { useContext } from "react";
import { Context as OpinionContext } from "../../contexts/OpinionContext";
function App() {
  const { sortedOpinions, increaseOpinion } = useContext(OpinionContext);

  return (
    <div className="App">
      <ul>
        {sortedOpinions?.map((opinion) => (
          <div>
            <li key={opinion.id}>
              {opinion.title} - {opinion.vote}
            </li>
            <button onClick={increaseOpinion(opinion.id)}>Vote</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
