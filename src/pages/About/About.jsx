import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <div className='about'>
        <Header />
        <Welcome text1='About Us' />
      </div>
      <section className='about-second-sec'>
        <div className='left-text'>
          <h1>Welcome to homes. The place where you can find your dream.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo aliquam lacus ultrices, a feugiat urna blandit. Vivamus consequat purus eu risus tempor, sit amet rutrum justo aliquet. Donec nec orci non eros aliquet blandit eu sed magna. Cras semper lacus tempus nisl pretium, eu pretium dolor sollicitu-din. Nunc porttitor, libero a efficitur interdum, ex mi ornare quam, at tempor tortor dui ac mi.</p>
          <button>View our Listings</button>
        </div>
        <div className='right-imgs'>
          <img className='a' src="./about-top.jpeg" alt="" />
          <img className='b' src="./about-bottom.avif" alt="" />
          <img className='c' src="./about-right.jpeg" alt="" />
        </div>
      </section>
      <section className='about-third-sec'>
        <div className="third-container">
          <h1 className='meet'>Meet out team</h1>
          <h1 className='branch'>They are the best in the branch</h1>
          <div className='images'>
            <div>
              <img src="./aboutMaria3.png" alt="" />
              <h1>Will Smith</h1>
              <p>Realtor</p>
            </div>
            <div>
              <img src="./aboutMaria1.png" alt="" />
              <h1>Maria Smith</h1>
              <p>Director</p>
            </div>
            <div>
              <img src="./aboutMaria2.png" alt="" />
              <h1>Will Smith</h1>
              <p>Realtor</p>
            </div>
          </div>
          <div className='skills'>
            <div className='skill'>
              <img src="./aboutIcon1.png" alt="" />
              <div>
                <p>350</p>
                <p>Apartments Sold</p>
              </div>
            </div>
            <div className='skill'>
              <img src="./aboutIcon2.png" alt="" />
              <div>
                <p>1278</p>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className='skill'>
              <img src="./aboutIcon3.png" alt="" />
              <div>
                <p>25</p>
                <p>Years of experience</p>
              </div>
            </div>
            <div className='skill'>
              <img src="./aboutIcon4.png" alt="" />
              <div>
                <p>17</p>
                <p>Awards Wone</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About