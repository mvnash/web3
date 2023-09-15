import heLogo from "img/LOGOHEVINCI.png";

const Header = (props) => {
  return (
    <>
      <img src={heLogo} alt="Logo" />
      <h1>{props.headerTitle}</h1>
    </>
  );
};

export default Header;
