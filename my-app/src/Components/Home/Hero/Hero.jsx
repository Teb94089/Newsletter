
import hero from "../../../assets/newsletter.jpg";
import heroDesign from "../../../assets/desk.jpg";
import { Typing, TypingStep } from "typing-effect-reactjs";
import ScrollServices from "../../../Utilities/ScrollServices/ScrollServices";
import "./Hero.css"



export default function Hero() {
  return (
    <div className="main-container " >
    <div id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
      <div className="info">
        <h1>
      <Typing text="Unlock Knowledge, Delivered to Your Inbox" />
         
      </h1>
       <em>
          Welcome to our platform, where the world of insights and expertise comes straight to your inbox.
          We believe in empowering you with knowledge from industry experts, thought leaders, and passionate creators. 
          Let's embark on a journey of discovery together.
          </em>
          <button>Sign In</button>
        </div>
        <div className="sale">
         
          <h1>
             Discover curated newsletters tailored to your interests. Stay informed and inspired with our handpicked content.
            <span></span>
          </h1>
  </div>
       
      </div>
    </div>
    </div>
  )
}
 