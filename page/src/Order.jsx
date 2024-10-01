import "./Order.scss";
import CoffeBeans from "./assets/coffe-beans-bg.png";
import SurpriseCoffee from "./assets/surprise-coffee.png"

function Order() {
  return (
    <>
      <div id="order-container">
        <div id="coffe-bg">
          <img src={CoffeBeans} alt="CoffeBeans" />
        </div>
        <p id="order-coffe">ORDER NOW</p>
        <div id="coffee-container">
          <p>Enjoy your coffee</p>
          <img src={SurpriseCoffee} alt="" />
        </div>
      </div>
    </>
  );
}

export default Order;
