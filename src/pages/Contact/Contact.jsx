import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header"
import Welcome from "../../components/WelcomeSection/Welcome";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './Contact.scss';

const containerStyle = {
  width: "100%",
  height: "400px",
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
        <Welcome text1='Contact' />
      </div>
      <section>
        <LoadScript googleMapsApiKey="SƏNİN_API_AÇARIN">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </section>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Contact