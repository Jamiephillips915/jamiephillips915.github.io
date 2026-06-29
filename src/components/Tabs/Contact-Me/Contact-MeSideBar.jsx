import "./Contact-MeSideBar.css";
import GithubLogo from './github.png';
import LinkedinLogo from './linkedin.png';
import EmailLogo from './email.png';

function ContactMeSideBar() {
    return (
        <>
        <div>
            <div className="contactSideBarTitle">
                <p>Social Links</p>
            </div>
            <div className="horizontalLine" id="sideBarContactAlignment"></div>
            <div className="socialLinkContainer">
                <a className="socialLink" href='https://github.com/Jamiephillips915'>
                    <img src={GithubLogo} />
                </a>
                <a className="socialLink" href='https://www.linkedin.com/in/jamie-phillips-293409306/'>
                    <img src={LinkedinLogo} />
                </a>
                <a className="socialLink" href='mailto:Jamie.phillips915@gmail.com'>
                    <img src={EmailLogo} />
                </a>
            </div>
            </div>
        </>
    );
}

export default ContactMeSideBar;