const Exercise = (props) => {
  const { title, nbExo } = props;

  return (
    <p>
      {title} {nbExo}
    </p>
  );
};

export default Exercise;
