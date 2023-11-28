import view from "../components/asset/photo-1.jpg"
import view2 from "../components/asset/photo-2.jpg"
import view3 from "../components/asset/photo-3.jpeg"
import view4 from "../components/asset/photo-4.jpeg"
import view5 from "../components/asset/photo-5.jpeg"
import view6 from "../components/asset/photo-6.jpeg"
import view7 from "../components/asset/photo-7.jpg"
import view8 from "../components/asset/photo-8.jpeg"
import view9 from "../components/asset/photo-9.jpeg"
function Picture() {
    return(
        <div>
            <div class="first-image">
                <img src={view} class="photo-1" alt="view-1"/>
                <p class="narrate">
                    We’re - idealists and strategic thinkers.<br/>Over six years in the video business<br class="read"/> Read News & Events
                </p>
                <img src={view2} class="photo-2" alt="view-2"/>
            </div>
            <div class="heading-one">
                    <h1>Portfolio</h1>
            </div>
            <div class="another">
                <div>
                    <img src={view3} alt="view-3"/>
                    <h2>Effortless</h2>
                    <h3>Branding</h3>
                    <img src={view5} alt="view-5"/>
                    <h2>Health Technology</h2>
                    <h3>Art Direction</h3>
                </div>
                <div>
                    <img src={view4} alt="view-4"/>
                    <h2>Maki</h2>
                    <h3>Website</h3>
                    <img src={view6} alt="view-6"/>
                    <h2>The gig economy</h2>
                    <h3>Graphoc</h3>
                </div>
            </div>
            <h1 class="events">News & Events</h1>
            <div class="second-image">
                <div>
                    <img src={view7} class="photo-7" alt="view-7"/>
                    <h2>The rise of the gig economy spells the end for these workers the old system</h2>
                    <p>22 hours ago</p>
                </div>
                <div class="display">
                    <div  class="display-one">
                        <img src={view8} alt="view-8"/>
                        <h2 class="head-1">Job Opportunities:<br/> Digital, Marketing</h2>
                    </div>
                    <div class="display-two">
                        <img src={view9} alt="view-9"/>
                        <h2 class="head-1">What happened to new viral video</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Picture
