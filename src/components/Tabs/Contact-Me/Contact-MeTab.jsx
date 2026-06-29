import './Contact-MeTab.css';
import EarthGif from './earthspin.gif';

function ContactMeTab() {
    return (
        <>
            <div>
                <div className='contactContainer'>
                    <div className='contactOverText'>
                        <p>Lets Connect.</p>
                    </div>
                    <a href='mailto:jamie.phillips915@gmail.com' className='contactEmailAddress'>
                        <p>jamie.phillips915@gmail.com</p>
                    </a>
                    <div className='contactEmailAddressSubtitle'>
                        <p>Feel free to shoot me an email!</p>
                    </div>
                </div>
                <div className='earthGif'>
                    <img src={EarthGif} />
                </div>

            </div>
        </>
    );
}

export default ContactMeTab;