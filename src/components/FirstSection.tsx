import arrow from '../assets/arrow.svg';

const FirstSection = () => {
    return ( 
        <section className="section-1" id='main'>
            <form action="">
                <label htmlFor="main-search">How can we help?</label>
                <input type="search" id="main-search" placeholder="Search"/>
                <button type="submit" aria-label="submit search">
                    <img src={arrow} alt="search button" />
                </button>
            </form>
        </section>
     );
}
 
export default FirstSection;