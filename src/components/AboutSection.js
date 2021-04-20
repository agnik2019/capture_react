import home1 from "../img/home1.png"
import {About, Hide, Image, Description} from "../styles"

const AboutSection = () => {
    return(
            <About>
                <Description >
                    <div className="title">
                        <Hide>
                            <h2>We work to make</h2>
                        </Hide>
                        <Hide>
                            <h2>Your <span>dreams</span> come </h2>
                         </Hide>
                         <Hide>
                            <h2>true.</h2>
                        </Hide>
                    </div>
                    <p>Contact us for any photography or videography ideas that you have. We have professioanals
                        with amazing skills. </p>
                    <button>Contact us</button>
                    </Description>
                <Image>
                    <img src={home1} alt="guy with a camera"/>
                </Image>
            </About>

    );
}



export default AboutSection;