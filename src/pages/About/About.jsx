import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
        <Header/>
        <Welcome text1='About Us'/>
    </div>
  )
}

export default About