import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
import PropTypes from "prop-types"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
     <img src={about_img} alt="" className='about-img'/>
     <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
    <h3>ABOUT university</h3>
    <h2>Nurturing Tommorows Leader Today</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, pariatur minus! Voluptates qui amet consequuntur aliquam nisi accusamus aut omnis beatae asperiores, animi, doloremque, eius nihil harum consectetur obcaecati ex.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto error doloremque asperiores autem, quam sapiente cumque! Beatae iusto provident suscipit, at sequi neque quo quis, placeat ab aspernatur ullam!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit mollitia vitae saepe libero aperiam earum. Architecto quo maxime aut ad dolore adipisci accusamus rerum amet, quos dolor optio pariatur?</p>
      </div>
    </div>
  )
}

About.propTypes = {
  setPlayState: PropTypes.string.isRequired,
};

export default About
