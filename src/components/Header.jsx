import logo from "../assets/test-app-logo.png";

const Header = () => {
  return (
    <>
      <header className="container">
        <img src={logo} alt={logo} className="logo" />
        <div className="header-content">
          <p>
            Test di Programmazione Frontend Developer React
            <br />
            <a href="mailto: me.tahmasebi92@gmail.com" className="email">
              ✉ Mehdi Tahmasebi
            </a>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
