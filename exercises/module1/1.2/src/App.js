import Header from "../src/Components/Header";
import Total from "../src/Components/Total";
import Content from "../src/Components/Content";

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = {title:'Fundamentals of React', nbExo:10}
  const exercises2 = {title:'Using props to pass data' ,nbExo:7}
  const exercises3 = {title:'State of a component',nbExo:14}
  const total = exercises1.nbExo+exercises2.nbExo+exercises3.nbExo

  return (
    <div>
      <Header headerTitle={course} />
      <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={total} />
    </div>
  )
}

export default App