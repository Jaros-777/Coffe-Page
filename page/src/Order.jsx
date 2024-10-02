import "./Order.scss";
import CoffeBeans from "./assets/coffe-beans-bg.png";
import SurpriseCoffee from "./assets/surprise-coffee.png";

function Order() {
  return (
    <>
      <div id="order-container">
        <div id="coffe-bg">
          <img src={CoffeBeans} alt="CoffeBeans" />
        </div>
        <div id="order-coffe">
          <p>ORDER NOW</p>
          <div id="coffee-container">
            <p>Enjoy your coffee</p>
            <img src={SurpriseCoffee} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
