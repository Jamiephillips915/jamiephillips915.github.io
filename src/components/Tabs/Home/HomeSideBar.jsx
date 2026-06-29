import './HomeSideBar.css';
import GithubLogo from './github.png';
import LinkedinLogo from './linkedin.png';
import EmailLogo from './email.png';
import CV from './CV.pdf';



function HomeSideBar({ SetScreen }) {
    return (
        <>
                <div className="sideBarPhotoDiv">
                    <div className="sideBarPhoto">
                    </div>
                </div>
                <div className="sideBarNameDiv">
                    <p className="sideBarName">Jamie Phillips</p>
                    <p className="sideBarTitle">Aspiring Data Scientist @ University of Edinburgh</p>
                </div>
                <div className="sideBarSocialDiv">
                    <div className="sideBarSocialButtonsDiv">
                        <div>
                            <a className="socialButton" href='https://github.com/Jamiephillips915'>
                                <img src={GithubLogo} alt='Github Logo' />
                            </a>
                        </div>
                        <div>
                            <a className="socialButton" href='https://www.linkedin.com/in/jamie-phillips-293409306/'>
                                <img src={LinkedinLogo} alt='Linkedin Logo' />
                            </a>
                        </div>
                        <div>
                            <a className="socialButton" href='mailto:Jamie.phillips915@gmail.com' >
                                <img src={EmailLogo} alt='Email Logo' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sideBarButtonDiv">
                    <div>
                        <a className="sideBarButton" href={CV} download='Jamie-Phillips-CV.pdf'>
                            <p>Download my CV</p>
                        </a>
                    </div>
                    <div>
                        <a className="sideBarButton" onClick={(e) => { e.preventDefault(); SetScreen('Contact Me') }}>
                            <p>Contact Me</p>
                        </a>
                    </div>
                </div>
        </>
    );
}

export default HomeSideBar;