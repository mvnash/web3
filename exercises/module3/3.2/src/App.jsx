import Content from "Components/Content";
import Header from "Components/Header";
import Total from "Components/Total";

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = { title: "Fundamentals of React", nbExo: 10 };
  const exercises2 = { title: "Using props to pass data", nbExo: 7 };
  const exercises3 = { title: "State of a component", nbExo: 14 };
  const total = exercises1.nbExo + exercises2.nbExo + exercises3.nbExo;
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header headerTitle={course} />
      <Content exercises={exercises} />
      <Total total={total} />
    </div>
  );
};

export default App;
