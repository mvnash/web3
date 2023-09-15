import Exercise from "./Exercise";

const Content = (props) => {
  const { exercises1, exercises2, exercises3 } = props;

  return (
    <>
      <Exercise title={exercises1.title} nbExo={exercises1.nbExo} />
      <Exercise title={exercises2.title} nbExo={exercises2.nbExo} />
      <Exercise title={exercises3.title} nbExo={exercises3.nbExo} />
    </>
  );
};

export default Content;
