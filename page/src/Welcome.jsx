import "./Welcome.scss";
import Coffes from "./assets/3-coffes.png";
import ShoppingBag from "./assets/Icons/icon-shopping-bag.png";
import BeansCoffe from "./assets/beans-coffe.png"
import CoffeToGoCreme from "./assets/CoffeToGoCream.png"
import IconCoffeBeans from "./assets/Icons/icon-coffe-bean.png"
import IconArrow from "./assets/Icons/icons-arrow.png"
import IconHalfStar from "./assets/Icons/icon-half-star.png"
import IconFacebook from "./assets/Icons/icon-facebook.png"
import IconDrawing from "./assets/Icons/icon-drawing.png"
import IconDartBoard from "./assets/Icons/icon-dartboard.png"
import IconCoffeToGo from "./assets/Icons/icon-coffetogo.png"

function Welcome() {
  return (
    <>
      <div id="welcome-container">
        <div id="left-side">
          <img src={IconCoffeBeans} alt="IconCoffeBeans" />
          <p>DISCOVER COFFE BLUES, STARTS HOUR BLUM TUBFILL JOURNAL HERL</p>
        </div>
        <div id="center">
          <p>LIFE BEGINS</p>
          <p>
            AFTER <span style={{ color: "var(--yellow)" }}>FLAVOUR</span>
          </p>
          <img src={Coffes} alt="Coffes" />
        </div>
        <div id="right-side">
          <img src={BeansCoffe} alt="BeansCoffe" />
          <p>EXAPBADO YOUR COFFE JOURNAL AND EALRY MONTAGE</p>
          <a href="#">MORE DETAILS</a>
          <div id="right-side-media">
            <button><img src={IconFacebook} alt="IconFacebook" /></button>
            <button><img src={IconDrawing} alt="IconDrawing" /></button>
            <button><img src={IconDartBoard} alt="IconDartBoard" /></button>
          </div>
        </div>
      </div>
      <div id="welcome-btn">
        <div className="welcome-btn-offer" style={{width:"60%", marginLeft:"3vw"}}>
          <div id="btn-left">
            <img src={IconArrow} alt="IconArrow" />
            <p style={{fontSize:"3vh"}}>TOP RATED COFFE</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
          <div id="btn-right">
            <p>5.00</p>
            <img src={IconHalfStar} alt="IconHalfStar" />
          </div>
        </div  >
        <div className="welcome-btn-offer-right" style={{width:"40%", marginRight:"3vw", backgroundColor:"white"}}>
          <div id="btn-left">
            <img src={IconCoffeToGo} alt="IconCoffeToGo" />
            <p style={{fontSize:"3vh"}}>TOP RATED COFFE</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div id="btn-right">
            <button id="cart-img">
              <img src={ShoppingBag} alt="cart" />
            </button>
            <img id="coffetogo-img" src={CoffeToGoCreme} alt="CoffeToGoCreme" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
