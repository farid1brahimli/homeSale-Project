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
          <h1></h1>
          <h1></h1>
          <div>
            <div>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <p></p>
            </div>
             <div>
              <p></p>
            </div> <div>
              <p></p>
            </div> <div>
              <p></p>
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