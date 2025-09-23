import Header from '../../components/Header/Header';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <section className='first-sec'>
                <img className='kitchen-img' src="./kitchen.webp" alt="kitchen" />
                <div className="image-overlay"></div>
                <div className="h1s">
                    <h1 className='first'>Find your next</h1>
                    <h1 className='second'>dream home.</h1>
                </div>
            </section>
        </div>
    )
}

export default Home