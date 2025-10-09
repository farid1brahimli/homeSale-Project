import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Welcome from "../../components/WelcomeSection/Welcome";
import './Contact.scss';

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <Header />
        <Welcome text1='Contact' />
      </div>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Contact