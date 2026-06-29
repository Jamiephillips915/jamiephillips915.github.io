import './ProjectsSideBar.css';

function Filter({ title, SetActiveFilter }) {
    return (
        <div className="skillFilter" onClick={() => { SetActiveFilter(title) }}>
            <p>{title}</p>
        </div>
    );
}

function ProjectsSideBar({ activeFilter, SetActiveFilter }) {

    const technologies = ['Python', 'Matplotlib', 'Pandas'];
    const years = ['2026']

    return (
        <>
                <div className='filterSideBarTitle'>
                    <p>Filter by...</p>
                </div>

                <div className='horizontalLine' id='sideBarProjectAlignment'></div>

                <div className='filterTitle'>
                    <p>Technology:</p>
                </div>
                <div className='filterContainer' id='sideBarProjectAlignment'>
                    {technologies.map((technology) => {
                        return (
                            <Filter title={technology} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                        );
                    })}
                    <Filter title={'All'} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                </div>
                <div className='filterTitle'>
                    <p>Year:</p>
                </div>
                <div className='filterContainer' id='sideBarProjectAlignment'>
                    {years.map((year) => {
                        return (
                            <Filter title={year} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                        );
                    })}
                    <Filter title={'All'} activeFilter={activeFilter} SetActiveFilter={SetActiveFilter} />
                </div>
        </>
    );
}

export default ProjectsSideBar;