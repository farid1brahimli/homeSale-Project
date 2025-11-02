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
                            <FaMapMarkerAlt className='placeIcon' />
                            <p>Location</p>
                        </div>
                        <div className="onMap">
                            <FaRegPaperPlane className='placeIcon' />
                            <p>Show on Map</p>
                        </div>
                    </div>
                    <div className="arch">
                        <div className="lotSize">
                            <p>Lot Size</p>
                            <div className='roomNum'>
                                <PiRuler className='arcIcon' />
                                <p>2561 sqft</p>
                            </div>
                        </div>
                        <div className="beds">
                            <p>Beds</p>
                            <div className='roomNum'>
                                <FaBed className='arcIcon' />
                                <p>9</p>
                            </div>
                        </div>
                        <div className="baths">
                            <p>Baths</p>
                            <div className='roomNum'>
                                <FaBath className='arcIcon' />
                                <p>2</p>
                            </div>
                        </div>
                        <div className="garage">
                            <p>Garage</p>
                            <div className='roomNum'>
                                <PiGarageBold className='arcIcon' />
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="sale">
                            <p>For Sale</p>
                            <p className='price'>$345,000</p>
                        </div>
                        <button><p>View Property</p></button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomeCard