import ShoppingBag from "./assets/Icons/icon-shopping-bag.png";
import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <div id="nav-container">
        <div id="nav-btn">
          <button>STORIES</button>
          <button>COFFE</button>
          <button>IMPORTANT</button>
          <button>STORE</button>
        </div>
        <div id="nav-logo">
          <p>CAFFO</p>
          <p style={{color:"#fec51c"}} >.</p>
        </div>

        <div id="nav-right">
          <button id="nav-order-img">
            <img src={ShoppingBag} alt="cart" />
          </button>
          <button>ORDER NOW</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
