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
                        <label htmlFor="">Location</label>
                        <select name="" id="">
                            <option value="">Azerbaijan</option>
                            <option value="">Turkey</option>
                            <option value="">Georgia</option>
                        </select>
                        <label htmlFor=""></label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Home