import '../../css/components/Overview.css';
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke [Converted].png'

const Overview = () => {
    return(
        <div id='projectOverview'>
            <h2 className='projectHeading' id='projectHeadingTop'>CLIENT PROJECT</h2>
                <div id="projectView">
                    <img id='overviewImage' src={astronautImage} alt="An astronaut." />
                    <p id='projectText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            <h2 className='projectHeading' id='projectHeadingBottom'> -&gt; PROJECTVERSLAG</h2>
        </div>
    )
}
export default Overview;