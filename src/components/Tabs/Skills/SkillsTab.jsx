import "./SkillsTab.css";
import ReactLogo from './react.png';
import PythonLogo from './python.png';
import JavascriptLogo from './javascript.png';
import HTMLLogo from './HTML.png';
import CSSLogo from './CSS.png';
import PandasLogo from './pandas.png'
import MatplotlibLogo from './matplotlib.png'
import GitLogo from './git.png';


function SkillsTab() {
    return (
        <>
            <div>
                <div className="skillsTitle">
                    <p><u>Skills</u></p>
                </div>
                <div className="skillsContainer">
                    <div className="skillsSection">
                        <div className="sectionTitle">
                            <p>Languages</p>
                        </div>
                        <div className="sectionRow">
                            <div className="sectionItem">
                                <img src={PythonLogo} alt="Python Logo" />
                            </div>
                            <div className="sectionItem">
                                <img src={HTMLLogo} alt="HTML Logo" />
                            </div>
                        </div>
                        <div className="sectionRow">
                            <div className="sectionItem">
                                <img src={JavascriptLogo} alt="Javascript Logo" />
                            </div>
                            <div className="sectionItem">
                                <img src={CSSLogo} alt="CSS Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="skillsSection">
                        <div className="sectionTitle">
                            <p>Libraries & Frameworks</p>
                        </div>
                        <div className="sectionRow">
                            <div className="sectionItem">
                                <img src={ReactLogo} alt='React Logo' />
                            </div>
                            <div className="sectionItem">
                                <img src={MatplotlibLogo} alt='Matplotlib Logo' />
                            </div>
                        </div>
                        <div className="sectionRow">
                            <div className="sectionItem">
                                <img src={PandasLogo} alt='React Logo' />
                            </div>
                        </div>
                    </div>
                    <div className="skillsSection">
                        <div className="sectionTitle">
                            <p>Tools & Databases</p>
                        </div>
                        <div className="sectionRow">
                            <div className="sectionItem">
                                <img src={GitLogo} alt="Git Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsTab;