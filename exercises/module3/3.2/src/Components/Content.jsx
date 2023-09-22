import Exercise from "./Exercise";

const Content = (props) => {
  const { exercises } = props;

  return (
    <>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.title}>
            <Exercise title={exercise.title} nbExo={exercise.nbExo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Content;
