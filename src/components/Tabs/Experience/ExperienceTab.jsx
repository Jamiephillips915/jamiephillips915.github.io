import { useState } from 'react';
import './ExperienceTab.css';

function Leaf({ Title, Subtitle1, Subtitle2, Description }) {
    return (
        <div className='leaf'>
            <div className='leafTitle'>
                <p>{Title}</p>
            </div>
            <div className='leafSubtitle'>
                <p>{Subtitle1}</p>
            </div>
            <div className='leafSubtitle'>
                <p>{Subtitle2}</p>
            </div>
            <div className='leafDescription'>
                <p>{Description}</p>
            </div>
        </div>

    );
}

function EducationTimeline() {
    return (
        <>
            <div className='timelineRow'>
                <Leaf Title={"University of Edinburgh"} Subtitle1={"Sep 2024 - Present"} Subtitle2={"BSc. Computer Science"} Description={"Grade: TBC"} />
                <div className='timelineMarker'></div>
            </div>
            <div className='timelineRow'>
                <Leaf Title={"Deferrers Sixth Form"} Subtitle1={"Sep 2022 - Jun 2024"} Subtitle2={"A-Levels"} Description={"Grades: Computer Science - A, Mathematics - A, History - B"} />
                <div className='timelineMarker'></div>
            </div>
            <div className='timelineRow'>
                <Leaf Title={"Granville Academy"} Subtitle1={"Sep 2017 - Jun 2022"} Subtitle2={"GCSEs"} Description={"Grades: Computer\u00A0Science\u00A0\u2011\u00A08, Mathematics\u00A0\u2011\u00A08, Further\u00A0Mathematics\u00A0\u2011\u00A07, Chemistry\u00A0\u2011\u00A07, History\u00A0\u2011\u00A07, English\u00A0Literature\u00A0\u2011\u00A07, Physics\u00A0\u2011\u00A06, English\u00A0Language\u00A0\u2011\u00A06, Biology\u00A0\u2011\u00A06, French\u00A0\u2011\u00A05, Creative\u00A0IMedia\u00A0\u2011\u00A0L2P"} />
                <div className='timelineMarker'></div>
            </div>
            <div className='timelineLine'></div>
        </>
    );
}

function WorkExperienceTimeline() {
    return (
        <>
            <div className='timelineRow'>
                <Leaf Title={"Freelance Full-Stack Developer"} Subtitle1={"Jun 2026 - Present"} Subtitle2={"Independent Automotive Electrician"} Description={"Designing and architecting a responsive, full-stack web application from scratch using React and JavaScript to modernize business operations. Engineering a component-driven frontend with seamless client-side state management, while designing a lightweight database schema to securely persist, query, and manage inbound client bookings and service requests."} />
                <div className='timelineMarker'></div>
            </div>
            <div className='timelineLine'></div>
        </>
    );
}

function OpenSourceDevelopmentTimeline() {
    return (
        <>
            <div className='timelineLine'></div>
        </>
    );
}

function HackathonsTimeline() {
    return (
        <>
            <div className='timelineRow'>
                <Leaf Title={"AdaHack 2025"} Subtitle1={"October 2025"} Subtitle2={"Edinburgh, UK"} Description={"Worked in a team of 4 to create a Full-Stack budgeting website for people that struggle with personal finances, including budgeting tools and spending analysis, which was achieved in 12 hours using React, Tailwind and Javascript."} />
                <div className='timelineMarker'></div>
            </div>
            <div className='timelineLine'></div>
        </>
    );
}

function CertificationsTimeline() {
    return (
        <>
            <div className='timelineLine'></div>
        </>
    );
}

function TimelineRenderer({ activeTimeline }) {
    switch (activeTimeline) {
        case 'Education':
            return <EducationTimeline />;
        case 'Work Experience':
            return <WorkExperienceTimeline />;
        case 'Open Source Development':
            return <OpenSourceDevelopmentTimeline />;
        case 'Hackathons':
            return <HackathonsTimeline />;
        case 'Certifications':
            return <CertificationsTimeline />;
        default:
            return null;
    }
}

function ExperienceTab({ activeTimeline }) {
    return (
        <>
            <div>
                <div className='experienceTitle'>
                    <p><u>Experience</u></p>
                </div>
                <div className='timelineTitle'>
                    <p>{activeTimeline}</p>
                </div>
                <div className='timelineContainer'>
                    <TimelineRenderer activeTimeline={activeTimeline} />
                </div>
            </div>
        </>
    );
}

export default ExperienceTab;