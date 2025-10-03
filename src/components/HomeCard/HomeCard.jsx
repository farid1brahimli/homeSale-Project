import { FaMapMarkerAlt, FaRegPaperPlane, FaBed, FaBath } from 'react-icons/fa';
import { PiRuler, PiGarageBold } from 'react-icons/pi';
import './HomeCard.scss';

const HomeCard = ({ image }) => {
    return (
        <div className="home-card">
            <div className="card-container">
            <img src={image} alt="Home Image" />
            <div className="card-info">
                <h3>Country Style House with beautiful garden and terrace</h3>
                <div className="place">
                    <div className="loc">
                        <FaMapMarkerAlt />
                        <p>Location</p>
                    </div>
                    <div className="onMap">
                        <FaRegPaperPlane />
                        <p>Show on Map</p>
                    </div>
                </div>
                <div className="arch">
                    <div className="lotSize">
                        <p>Lot Size</p>
                        <div className='roomNum'>
                            <PiRuler size={30} color='#A09EB7' />
                            <p>2561 sqft</p>
                        </div>
                    </div>
                    <div className="beds">
                          <p>Beds</p>
                        <div className='roomNum'>
                            <FaBed size={30} color='#A09EB7'/>
                            <p>9</p>
                        </div>
                    </div>
                    <div className="baths">
                          <p>Baths</p>
                        <div className='roomNum'>
                            <FaBath  size={30} color='#A09EB7'/>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="garage">
                         <p>Garage</p>
                        <div className='roomNum'>
                            <PiGarageBold  size={30} color='#A09EB7'/>
                            <p>1</p>
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="sale">
                        <p>For Sale</p>
                        <p className='price'>$345.000</p>
                    </div>
                    <button><p>View Property</p></button>
                </div>
            </div>
            </div>

        </div>

    )
}

export default HomeCard