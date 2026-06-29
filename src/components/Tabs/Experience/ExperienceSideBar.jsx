import "./ExperienceSideBar.css";
import { useState } from "react";

function ExperienceSideBar({activeTimeline, ChangeTimeline}) {
    return (
        <>
            <div className="experienceSideBarTitle">
                <p>Categories...</p>
            </div>
            <div className="horizontalLine" id="sideBarExperienceAlignment"></div>
            <div className="experienceCategoryTitle">
                <p>Education:</p>
            </div>
            <div className="categoryContainer" id="sideBarExperienceAlignment" style={{ height: "10%" }}>
                <div key={'Education'} className={`categoryButton ${activeTimeline === 'Education' ? 'active' : ''} `} onClick={(e) => {e.preventDefault(); ChangeTimeline('Education');}}>
                    <p>Education</p>
                </div>
            </div>
            <div className="experienceCategoryTitle">
                <p>Professional Experience:</p>
            </div>
            <div className="categoryContainer" id="sideBarExperienceAlignment">
                <div key={'Work-Experience'} className={`categoryButton ${activeTimeline === 'Work Experience' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); ChangeTimeline('Work Experience')}}>
                    <p>Work Experience</p>
                </div>
                <div key={'Open-Source-Development'} className={`categoryButton ${activeTimeline === 'Open Source Development' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); ChangeTimeline('Open Source Development')}}>
                    <p>Open Source Development</p>
                </div>
                <div key={'Hackathons'} className={`categoryButton ${activeTimeline === 'Hackathons' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); ChangeTimeline('Hackathons')}}>
                    <p>Hackathons</p>
                </div>
            </div>
            <div className="experienceCategoryTitle">
                <p>Certifications:</p>
            </div>
            <div className="categoryContainer" id="sideBarExperienceAlignment" style={{ height: "10%" }}>
                <div key={'Certifications'} className={`categoryButton ${activeTimeline === 'Certifications' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); ChangeTimeline('Certifications')}}>
                    <p>Certifications</p>
                </div>
            </div>
        </>
    );
}

export default ExperienceSideBar;