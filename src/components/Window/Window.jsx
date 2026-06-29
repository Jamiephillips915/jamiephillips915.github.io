import { useEffect, useState } from "react";
import "./Window.css"
import "./TaskBar/TaskBar.css"
import HomeTab from "../Tabs/Home/HomeTab.jsx";
import ProjectsTab from "../Tabs/Projects/ProjectsTab.jsx"
import ExperienceTab from "../Tabs/Experience/ExperienceTab.jsx"
import SkillsTab from "../Tabs/Skills/SkillsTab.jsx"
import ContactMeTab from "../Tabs/Contact-Me/Contact-MeTab.jsx"
import HomeSideBar from "../Tabs/Home/HomeSideBar.jsx";
import ProjectsSideBar from "../Tabs/Projects/ProjectsSideBar.jsx";
import ExperienceSideBar from "../Tabs/Experience/ExperienceSideBar.jsx";
import SkillsSideBar from "../Tabs/Skills/SkillsSideBar.jsx";
import ContactMeSideBar from "../Tabs/Contact-Me/Contact-MeSideBar.jsx";

export function SideBar({ activeScreen, activeTimeline, ChangeTimeline, SetScreen, activeFilter, SetActiveFilter }) {
    switch (activeScreen) {
        case 'Home':
            return <HomeSideBar SetScreen={SetScreen} />;
        case 'Projects':
            return <ProjectsSideBar activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />;
        case 'Experience':
            return <ExperienceSideBar activeTimeline={activeTimeline} ChangeTimeline={ChangeTimeline} />;
        case 'Skills':
            return <SkillsSideBar />;
        case 'Contact Me':
            return <ContactMeSideBar />
        default:
            return null
    }
}

export function ContentRenderer({ activeScreen, activeTimeline, activeFilter, SetActiveFilter }) {
    switch (activeScreen) {
        case 'Home':
            return <HomeTab />;
        case 'Projects':
            return <ProjectsTab activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />;
        case 'Experience':
            return <ExperienceTab activeTimeline={activeTimeline} />;
        case 'Skills':
            return <SkillsTab />;
        case 'Contact Me':
            return <ContactMeTab />
        default:
            return null
    }
}

function Window() {
    const [activeScreen, SetScreen] = useState('Home')
    const [activeTimeline, ChangeTimeline] = useState('Education');
    const [scrollPosition, SetScrollPosition] = useState(0);
    const [activeFilter, SetActiveFilter] = useState('All');

    const tabs = ['Home', 'Projects', 'Experience', 'Skills', 'Contact Me'];

    useEffect(() => {
        const contentDiv = document.getElementById('contentDiv');
        if (!contentDiv) {
            return;
        }

        const HandleScroll = () => {
            SetScrollPosition(contentDiv.scrollTop)
        }

        contentDiv.addEventListener('scroll', HandleScroll);
        return () => {
            contentDiv.removeEventListener('scroll', HandleScroll);
        }
    }, [activeScreen])

    return (
        <div className="windowDiv">
            <div className="taskBarDiv">
                <div className="tabsDiv">
                    {tabs.map((tab) => (
                        <>
                            <a key={tab} href="#" className={`tabBox ${activeScreen === tab ? 'active' : ""}`} onClick={(e) => { e.preventDefault(); SetScreen(tab); ChangeTimeline('Education'); document.getElementById('contentDiv').scrollTop = 0; }}>
                                <div className="activeTabDiv">
                                    <div></div>
                                </div>
                                <div className="tabNameDiv">
                                    <p>{tab}</p>
                                </div>
                                <div className="tabExitDiv">
                                    <p>&#x2715;</p>
                                </div>
                            </a>
                        </>
                    ))}
                </div>
                <div className="tabButtonsDiv">
                    <a className="minimiseButton">
                        <p>&#8722;</p>
                    </a>
                    <a className="maximiseButton">
                        <p>&#9634;</p>
                    </a>
                    <a className="exitButton">
                        <p>&#x2715;</p>
                    </a>
                </div>
            </div>
            <div className="displayDiv">
                <div className="sideBarDiv">
                    <div className="sideBarGap">
                        <SideBar activeScreen={activeScreen} activeTimeline={activeTimeline} ChangeTimeline={ChangeTimeline} SetScreen={SetScreen} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                    </div>
                </div>
                <div className="displayDivider"></div>
                <div className="contentDiv" id='contentDiv'>
                    <ContentRenderer activeScreen={activeScreen} activeTimeline={activeTimeline} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                    <div className="scrollUpButton">
                        <a onClick={() => { document.getElementById('contentDiv').scrollTop = 0 }}>
                            <p>scroll to top</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Window