import FilterNum from '../../components/FilterNum/FilterNum';
import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import { FaSearch } from 'react-icons/fa';
import DoneIcon from '@mui/icons-material/Done';
import HomeCard from '../../components/HomeCard/HomeCard';
import './Home.scss';
import Footer from '../../components/Footer/Footer';

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
                        <input type="mail" placeholder='Email address' />
                        <button><span>Subscribe!</span></button>
                    </form>
                </div>
            </section>
            <section className='sixth-sec'>
                <div className="sixth-sec-skills">
                    <div className='sixth-sec-text'>
                        <h1 className='firstH1'>Why choose homes?</h1>
                        <h1 className='secondH1'>Because we we are the best in
                            the business.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id est nec nisl tristique dignissim semper sed diam. Donec vulputate neque in massa hendrerit, non dignissim ipsum varius. Mauris dignissim libero ipsum, nec molestie nulla molestie at. Nam imperdiet hendrerit finibus. Sed porttitor ultricies sagittis. Nullam lobortis nec quam vitae venenatis.</p>
                    </div>
                    <div className='sixth-sec-done'>
                        <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                         <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Praesent tincidunt diam in ante faucibus tristique.</p>
                        </div>
                         <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Vivamus id nisl sed mi varius lobortis.</p>
                        </div>
                         <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Suspendisse sit amet erat placerat, molestie neque id.</p>
                        </div>
                         <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Fusce pretium libero sit amet ipsum posuere pretium.</p>
                        </div>
                        <div>
                            <DoneIcon style={{ color: 'green', fontWeight: 'bold', fontSize: '32px' }} />
                            <p>Praesent tincidunt diam in ante faucibus tristique.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='seventh-sec'>
                <p>Don’t forget to view us on Github <a href="https://github.com/farid1brahimli">@farid1brahimli</a></p>
            </section>
            <section className='eighth-sec'>
                <img src="./resort2.jpg" alt="house" />
                <img src="./house.jpg" alt="house" />
                <img src="./hotel.jpg" alt="house" />
                <img src="./resort.jpg" alt="house" />
                <img src="./house2.jpg" alt="house" />
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home