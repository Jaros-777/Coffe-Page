import "./BigText.scss";
import CoffeToGo1 from "./assets/CoffeToGoCream.png";
import CoffeToGo2 from "./assets/coffe-to-go.png";
import CoffeToGo3 from "./assets/3-coffes.png";
import BeansCoffe from "./assets/beans-coffe.png";

function BigText() {
  return (
    <>
      <div id="big-text-container">
        <div id="abstract-text">
          <p>Coffe Bliss</p>
        </div>
        <div id="main-text">
          <p>USE</p>
          <img id="first-img" src={CoffeToGo1} alt="CoffeToGo1" />
          <p>PREMIUM </p>
          <p> ARABICA </p>
          <p> FRESH</p>
          <p> BEANS </p>
          <img id="second-img" src={BeansCoffe} alt="BeansCoffe" />
          <p>AND</p> <p>FRESHLY</p>
          <img id="third-img" src={CoffeToGo2} alt="CoffeToGo2" />
          <p>GROUND</p> <p>SPICES</p> <p>TO </p>
          <img id="fourth-img" src={CoffeToGo3} alt="CoffeToGo3" />
          <p>UNDENIABLY</p> <p>FLAVOURS</p> <p>COFFE</p>
        </div>
      </div>
    </>
  );
}

export default BigText;
