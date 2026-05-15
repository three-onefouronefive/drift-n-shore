    import '../../css/Quote.css';
    import quoteSymbol from '../../assets/images/quote_symbol.png'
    import Footer from '../../components/Footer';

    function Home_Quote() {
        return (
            <>
                <div className='quote_wrapper'>
                    <div className='quote_quote anim-up'>
                        <img src={quoteSymbol} alt="Quote symbol" className='anim-up'></img>
                        <h1 className='anim-up'>The best kind of luxury is the kind that feels completely effortless.</h1>
                        <p className='anim-up'>— DRIFT & SHORE, EST. 2012</p>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }

    export default Home_Quote;