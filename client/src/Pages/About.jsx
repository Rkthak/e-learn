import About_card from "../Components/About_card";

const About = () => {
  return (
    <>
      <div className="about container">
        <div className="page-header">
          <h2>about</h2>
          <div className="about_container">
            <div className="about_img">
              <figure>
                <img src="/kname.jpeg" alt="kname picture" />
                <figcaption className="figcap">
                  kodifyre code with ease
                </figcaption>
              </figure>
            </div>

            <div className="about_content">
              <p className="scans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                libero ab perspiciatis tenetur mollitia delectus excepturi quis.
                Ea quam facere, accusantium nostrum culpa rem eligendi quae
                dolore ratione aliquam aut architecto tempore harum placeat,
                quas quia vel, natus id corrupti et ipsam! Maiores, eligendi.
                Suscipit praesentium soluta quod dolore ducimus? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Laboriosam,
                maiores.
              </p>

              <div className="course">
                  <About_card />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
