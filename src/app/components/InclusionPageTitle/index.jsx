'use client'
import CountUp from 'react-countup';
const InclusionPage = () => {
    return (
        <>
        <h1>Inclusion makes a difference</h1>
        <p>Organisations with higher inclusion among coworkers have according to [source]: </p>
        <div className="animation">
            <div className="percentage">
                <CountUp end={31} duration={7} suffix="%"/>
                <p>Less isolation</p>
            </div>
            <div className="percentage">
                <CountUp end={41} duration={7} suffix="%"/>
                <p>Lower sick leave</p>
            </div>
            <div className="percentage">
                <CountUp end={59} duration={7} suffix="%"/>
                <p>Lower staff turnover</p>
            </div>
            <div className="percentage">
                <CountUp end={61} duration={7} suffix="%"/>
                <p>More satisfied employees</p>
            </div>
        </div>
        </>
    );
};
export default InclusionPage;