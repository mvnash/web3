const Content = (exercises1,exercises2,exercises3) => {
    <>
    <p>
    {exercises1.title} {exercises1.nbExo}
  </p>
  <p>
    {exercises2.title} {exercises2.nbExo}
  </p>
  <p>
    {exercises3.title} {exercises3.nbExo}
  </p>
  </>
}

export default Content