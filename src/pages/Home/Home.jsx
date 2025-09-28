import Header from '../../components/Header/Header';
import Welcome from '../../components/WelcomeSection/Welcome';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Welcome text1='Find your next'
                text2='dream home'
            />
            <section className='second-sec'>
                <div className="filter">
                    <form action="">
                        <div className="location">
                            <label htmlFor="">Location</label>
                            <select name="" id="">
                                <option value="">Azerbaijan</option>
                                <option value="">Turkey</option>
                                <option value="">Georgia</option>
                            </select>
                        </div>
                        <div className="prop-type">
                            <label htmlFor="">Property Type</label>
                            <select name="" id="">
                                <option value="">House</option>
                                <option value="">Resort</option>
                                <option value="">Hotel</option>
                            </select>
                        </div>
                        <div className="bedrooms">
                            <label htmlFor="">Bedrooms</label>
                            <div className="bed1">
                                <label htmlFor="">1</label>
                                <input type="radio" />
                            </div>
                             <div className="bed2">
                                <label htmlFor="">2</label>
                                <input type="radio" />
                            </div> <div className="bed1">
                                <label htmlFor="">1</label>
                                <input type="radio" />
                            </div> <div className="bed1">
                                <label htmlFor="">1</label>
                                <input type="radio" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Home