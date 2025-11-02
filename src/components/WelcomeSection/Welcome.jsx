import './Welcome.scss';

const Welcome = ({ text1, text2 }) => {
    return (
        <section className='first-sec'>
            <img className='kitchen-img' src="./kitchen.webp" alt="kitchen" />
            <div className="image-overlay"></div>
            <div className="h1s">
                <h1 className='first'>{text1}</h1>
                <h1 className='second'>{text2}</h1>

            </div>
        </section>
    )
}

export default Welcome