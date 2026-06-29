import { useState, useRef, useEffect } from 'react';
import './ProjectsTab.css'
import GithubLogo from './github.png';
import LinkLogo from './link.png';
import PythonLogo from './python.png';
import ReactLogo from './react.png';
import PandasLogo from './pandas.png';
import HTMLLogo from './HTML.png';
import CSSLogo from './CSS.png';
import MatplotlibLogo from './matplotlib.png';
import GitLogo from './git.png';
import AnalysisDoc from './fds-project-option-2.pdf';

function FilterRenderer({ activeFilter, skilltags, title, description, Link, Github, LinkInput }) {
    for (let i = 0; i < skilltags.length; i++) {
        if (activeFilter == skilltags[i]) {
            return (
                <ProjectItem title={title} description={description} skilltags={skilltags} Link={Link} Github={Github} LinkInput={LinkInput} />
            );
        }
        else if (activeFilter === 'All') {
            return (
                <ProjectItem title={title} description={description} skilltags={skilltags} Link={Link} Github={Github} LinkInput={LinkInput} />
            );
        }
    }

    return null;
}

function ProjectItem({ title, description, skilltags, Link, Github, LinkInput }) {
    const [hoverState, SetHover] = useState(false);

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

    function SkillTagRenderer({ skilltags }) {
        return (
            (skilltags.map((tag) => {
                const isInteger = Number.isInteger(tag);

                return (
                    <div className='skillTag'>
                        {!isInteger && (
                            <>
                                <div className='skillTagImage'>
                                    <img src={skillImage[tag]} alt={tag} />
                                </div>
                                <div className='skillTagTitle'>
                                    <p>{tag}</p>
                                </div>
                            </>
                        )}
                        {isInteger && (
                            <>
                                <div className='skillTagTitle' style={{ width: '100%' }}>
                                    <p>{tag}</p>
                                </div>
                            </>
                        )}
                    </div>
                );
            }))
        );
    }

    if (hoverState) {
        return (
            <div className='projectItem' onMouseEnter={() => { handleHoverOn() }} onMouseLeave={() => { handleHoverOff() }}>
                <div className='hoverTitle'>
                    <p>{title}</p>
                </div>
                <div className='itemHorizontalLine'></div>
                <div className='hoverLinkRow'>
                    {(() => {
                        if (Link === true) {
                            return (
                                <a className='hoverLinkContainer' href={LinkInput}>
                                    <div className='hoverLinkPhoto'>
                                        <img src={LinkLogo} />
                                    </div>
                                    <div className='hoverLinkTitle'>
                                        <p>Live Link</p>
                                    </div>
                                </a>
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
        )
    }
    else {
        return (
            <div className='projectItem' onMouseEnter={() => { handleHoverOn() }} onMouseLeave={() => { handleHoverOff() }}>
                <div className='projectTitle'>
                    <p>{title}</p>
                </div>
                <div className='projectDescription'>
                    <p>{description}</p>
                </div>
                <div className='projectDivider'></div>
                <div className='projectSkillHolder'>
                    <SkillTagRenderer skilltags={skilltags} />
                </div>
            </div>
        );
    }
}

function ProjectsTab({ activeFilter, SetActiveFilter }) {
    const projectObjects = [
        { title: "Edinburgh Digitisation Analysis", description: "Built a geospatial pipeline to process 3,700+ longitudinal data points using Pandas and GeoPandas. Utilized piecewise regression to model structural contraction trends, uncovering a 3x acceleration in digital banking shifts.", skillTags: ['Python', 'Matplotlib', 'Pandas', 2026], Link: true, Github: false, LinkInput: AnalysisDoc},
    ]

    return (
        <>
            <div>
                <div className='projectsTitle'>
                    <p><u style={{ textDecorationThickness: "3px", textDecorationColor: "lightgrey" }}>Projects</u></p>
                </div>
                <div className='projectsContainer'>
                    <div className='projectsRow'>
                        {projectObjects.map((items) => {
                            return (
                                <FilterRenderer activeFilter={activeFilter} title={items.title} description={items.description} skilltags={items.skillTags} Link={items.Link} Github={items.Github} LinkInput={items.LinkInput} />
                            );
                        })}
                    </div>
                    <div className='projectsRow'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsTab;