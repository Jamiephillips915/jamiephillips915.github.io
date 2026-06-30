import { useEffect, useState, useRef } from 'react';
import './HomeTab.css';
import GithubLogo from './github.png';
import LinkLogo from './link.png';
import PythonLogo from './python.png';
import ReactLogo from './react.png';
import PandasLogo from './pandas.png';
import HTMLLogo from './HTML.png';
import CSSLogo from './CSS.png';
import MatplotlibLogo from './matplotlib.png';
import GitLogo from './git.png';

function FeaturedProjectItem({ title, description, skillTags, Link, Github }) {
    const [hoverStatus, SetHover] = useState(false);

    const hoverTimeoutRef = useRef(null);

    const skillImage = {
        'Python': PythonLogo,
        'React': ReactLogo,
        'Pandas': PandasLogo,
        'HTML': HTMLLogo,
        'CSS': CSSLogo,
        'Matplotlib': MatplotlibLogo,
        'Git': GitLogo
    }

    function handleHoverOn() {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }

        hoverTimeoutRef.current = setTimeout(() => {
            SetHover(true);
        }, 400);
    }

    function handleHoverOff() {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        SetHover(false);
    }

    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            };
        };
    }, []);

    function SkillTagRenderer({ skillTags }) {
        return (
            (skillTags.map((tag) => {
                return (
                    <div className='skillTag'>
                        <div className='skillTagImage'>
                            <img src={skillImage[tag]} />
                        </div>
                        <div className='skillTagTitle'>
                            <p>{tag}</p>
                        </div>
                    </div>
                );
            }))
        );
    }


    if (hoverStatus === true) {
        return (
            <div className='featuredProjectsItem' onMouseEnter={() => { handleHoverOn(true) }} onMouseLeave={() => { handleHoverOff(false) }}>
                <div className='hoverTitle'>
                    <p>{title}</p>
                </div>
                <div className='itemHorizontalLine'></div>
                <div className='hoverLinkRow'>
                    {(() => {
                        if (Link === true) {
                            return (
                                <div className='hoverLinkContainer'>
                                    <div className='hoverLinkPhoto'>
                                        <img src={LinkLogo} />
                                    </div>
                                    <div className='hoverLinkTitle'>
                                        <p>Live Link</p>
                                    </div>
                                </div>
                            );
                        }
                    })()}
                    {(() => {
                        if (Github === true) {
                            return (
                                <a className='hoverLinkContainer'>
                                    <div className='hoverLinkPhoto'>
                                        <img src={GithubLogo} />
                                    </div>
                                    <div className='hoverLinkTitle'>
                                        <p>Github</p>
                                    </div>
                                </a>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='featuredProjectsItem' onMouseEnter={() => { handleHoverOn(true) }} onMouseLeave={() => { handleHoverOff(false) }}>
                <div className="featuredProjectsItemTitle">
                    <p>{title}</p>
                </div>
                <div className="featuredProjectsItemDescription">
                    <p>{description}</p>
                </div>
                <div className="itemHorizontalLine"></div>
                <div className="featuredProjectsItemTags">
                    <SkillTagRenderer skillTags={skillTags} />
                </div>
            </div>
        );
    }
}

function HomeTab() {
    return (
        <>
            <div>
                <div className="introductionDiv">
                    <div className="introductionSubtitleDiv">
                        <p>Hello! I'm,</p>
                    </div>
                    <div className="introductionTitleDiv">
                        <p><u style={{ textDecorationThickness: "clamp(0.05vh, 0.05em, 3px)", textDecorationColor: "purple" }}>Jamie Phillips.</u></p>
                    </div>
                    <div className="introductionUndertextDiv">
                        <p>2nd Year CS Student @ The University of Edinburgh.</p>
                    </div>
                </div>
                <div className="aboutMeDiv">
                    <div className="aboutMeTitleDiv">
                        <p>About Me</p>
                    </div>
                    <div className="aboutMeContentDiv">
                        <p>
                            I am a 2nd year Computer Science student at the University of Edinburgh,
                            specialising in Data Science and analytics, including predictive modelling, such as
                            machine learning, and converting messy distributed datasets into an efficient
                            pipeline. <br /> <br />
                            I prefer using my initiative to create comprehensive projects rather
                            than simply working out of textbooks, since it allows me to follow
                            professional practices and workflows, including working with often
                            complex and incomplete datasets and deriving pattens from it, which means
                            applying python and associated libraries in an efficient manner, as
                            code if often only as good as the planning behind it.<br /><br />
                            Currently I am looking for an internship to further develop my foundation
                            of data science knowledge and so that I can contribute to real world
                            issues.
                        </p>
                    </div>
                </div>
                <div className="testimonialsDiv">
                    <div className="testimonialsHeaderDiv">
                        <p>Endorsements</p>
                    </div>
                    <div className="testimonialsSubtitleDiv">
                        <p>
                            Don't just take my word alone for my competency, here are some Testimonies:
                        </p>
                    </div>
                    <div className="testimonialsHolderDiv">
                        <div></div>
                        <div className="testimonialItem">
                            <div className="testimonialTitleItemDiv">
                                <div className="testimonialPhotoItemDiv">
                                    <div></div>
                                </div>
                                <div className="testimonialNameItemDiv">
                                    <p>Sundeep Ganger</p>
                                </div>
                            </div>
                            <div className="testimonialTextItem">
                                <p>
                                    Jamie is intelligent and diligent. He excelled in
                                    A Level Computer Science, earning an A* for his
                                    coursework. He has strong problem-solving skills,
                                    helps peers, and demonstrates a deep understanding
                                    of and passion for the subject. <br /> <br />
                                    - Computer Science Educator
                                </p>
                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="testimonialTitleItemDiv">
                                <div className="testimonialPhotoItemDiv">
                                    <div></div>
                                </div>
                                <div className="testimonialNameItemDiv">
                                    <p>Ashley Radford</p>
                                </div>
                            </div>
                            <div className="testimonialTextItem">
                                <p>
                                    Jamie demonstrated outstanding capabilities and
                                    dedication in his Programming Project, excelling in
                                    Unity and C#. His meticulous attention to detail and
                                    effective time management ensured high-quality,
                                    innovative solutions tailored to user needs. <br /> <br />
                                    - Computer Science Educator
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="featuredProjects">
                    <div className="featuredProjectsTitle">
                        <p>Featured Projects</p>
                    </div>
                    <div className="featuredProjectsContainer">
                        <FeaturedProjectItem title={"Edinburgh Digitisation Analysis"} description={"Built a geospatial pipeline to process 3,700+ longitudinal data points using Pandas and GeoPandas. Utilized piecewise regression to model structural contraction trends, uncovering a 3x acceleration in digital banking shifts."} skillTags={["Python", "Pandas", "Matplotlib"]} Link={true} Github={false} />
                        <FeaturedProjectItem title={""} description={""} skillTags={[]} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeTab;