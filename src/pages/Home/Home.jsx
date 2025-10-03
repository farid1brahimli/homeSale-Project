import FilterNum from '../../components/FilterNum/FilterNum';
import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import { FaSearch } from 'react-icons/fa';
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
                    <HomeCard image={"./house.jpg"}  />
                    <HomeCard image={"./hotel2.webp"} />
                    <HomeCard image={"./resort2.jpg"} />
                    <HomeCard image={"./house2.jpg"}  />
                </div>
            </section>
            <section className='fourth-sec'>
                <div className="fourth-sec-container">
                    <img src="./yardWall.jpeg" alt="" />
                </div>
                
            </section>
        </div>
    )
}

export default Home