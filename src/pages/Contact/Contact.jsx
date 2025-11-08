import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Welcome from "../../components/WelcomeSection/Welcome";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import "./Contact.scss";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 40.4093, // Bakı koordinatları
  lng: 49.8671,
};

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <Header />
        <Welcome text1="Contact" />
      </div>
      <section>
        <LoadScript>
          <GoogleMap className="google-map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </section>
      <section className="contact-second-sec">
        <div className="contact-form">
          <div className="get-in-touch">
            <h1>Get in Touch</h1>
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
                <input type="mail" placeholder="Email"/>
              </div>
              <input type="text" placeholder="Subject"/>
              <textarea name="" id="" placeholder="Message"></textarea>
            </form>
            <button><p>Send</p></button>
          </div>
          <div className="contact-details">
            <h1>Contact Details</h1>
            <div>
              <GoLocation className="contact-icon" />
              <p>132 Liberty Streetelit, Plano, Texas</p>
            </div>
            <div>
              <HiOutlineMail className="contact-icon" />
              <p>hello@home.com</p>
            </div>
            <div>
              <MdCall className="contact-icon" />
              <p>214-805-4428</p>
            </div>
            <p className="date1">Monday – Friday: 9 am – 5 pm</p>
            <p className="date2">Saturday: 9 am – 1pm</p>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
