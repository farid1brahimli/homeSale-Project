import Header from "../../components/Header/Header"
import Welcome from "../../components/WelcomeSection/Welcome";
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
        <Header/>
        <Welcome text1='Contact'/>
    </div>
  )
}

export default Contact