import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="container footer">
          <Logo />
          <p className="scans footer_para">
            made by RAJKUMAR with <i className="fa-solid fa-heart"></i>{" "}
            completed in {year}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
