import './SkillsSideBar.css';

function SkillsSideBar() {
    return (
        <>
            <div className='skillsSideBarTitle'>
                <p>Data Methodologies</p>
            </div>
            <div className='horizontalLine' id='sideBarProjectAlignment'></div>
            <div className='skillsSideBarContainer'>
                <div className='skillsPill'>
                    <p>Exploratory Data Analysis</p>
                </div>
                <div className='skillsPill'>
                    <p>Statistical Modelling</p>
                </div>
                <div className='skillsPill'>
                    <p>Predictive Modelling (ML)</p>
                </div>
                <div className='skillsPill'>
                    <p>Data Visualisation</p>
                </div>
                <div className='skillsPill'>
                    <p>Version Control</p>
                </div>
            </div>
        </>
    );
}

export default SkillsSideBar;

