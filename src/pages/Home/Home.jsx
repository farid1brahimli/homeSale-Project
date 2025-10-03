import FilterNum from '../../components/FilterNum/FilterNum';
import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import { FaSearch } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import HomeCard from '../../components/HomeCard/HomeCard';
import './Home.scss';

const Home = () => {
    return (
        <div className="container">

            <div className='home'>
                <Header />
                <Welcome text1='Find your next'
                    text2='dream home'
                />
                <section className='second-sec'>
                    <div className="filter">
                        <form action="">
                            <div className="location">
                                <label htmlFor="">
                                    Location
                                </label>
                                <select name="" id="">

                                    <option value="">Azerbaijan  </option>
                                    <option value="">Turkey</option>
                                    <option value="">Georgia</option>
                                </select>
                            </div>
                            <div className="prop-type">
                                <label htmlFor="">
                                    Property Type
                                </label>
                                <select name="" id="">
                                    <option value="">House</option>
                                    <option value="">Resort</option>
                                    <option value="">Hotel</option>
                                </select>
                            </div>
                            <FilterNum classname={"Bedrooms"} />
                            <FilterNum classname={"Bathrooms"} />
                            <button className='searchBtn'>
                                <FaSearch />
                                Search
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <section className='third-sec'>
                <div id="homeCards">
                    <HomeCard image={"./resort.jpg"} />
                    <HomeCard image={"./hotel.jpg"} />
                    <HomeCard image={"./house.jpg"} />
                    <HomeCard image={"./hotel2.webp"} />
                    <HomeCard image={"./resort2.jpg"} />
                    <HomeCard image={"./house2.jpg"} />
                </div>
            </section>
            <section className='fourth-sec'>
                <div className="fourth-sec-container">
                    <img src="./yardWall.jpeg" alt="" />
                    <div className="fourth-sec-carusel">
                        <div className="carusel">

                        </div>
                    </div>
                </div>
            </section>
            <section className='fifth-sec'>
                <div className="input">
                    <img src="./send.png" alt="" />
                    <p>Join our mailing to get weekly updates on <br />
                        our exclusive deals.</p>
                        <form action="">
                            <input type="mail" placeholder='Email Address' />
                            <button><span>Subscribe!</span></button>
                        </form>
                </div>
            </section>
        </div>
    )
}

export default Home