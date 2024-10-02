import "./Categories.scss";
import CoffeCategories from "./assets/coffee-categories.png";

function Categories() {
  return (
    <>
      <div id="categories-container">
        <div id="top-text">
          <p>COFFEE BY <span style={{color:"var(--yellow)"}}>CATEGORIES</span></p>
        </div>
        <div id="categories">
          <div id="cat-left">
            <img src={CoffeCategories} alt="CoffeCategories" />
          </div>
          <div id="cat-right">
            <h5>Latte</h5>
            <p>A latte is an espresso-based coffee drink with steamed milk and a thin layer of foam.</p>
            <h5>Cappucino</h5>
            <p>A cappuccino is made with espresso, steamed milk, and a thick layer of foamed milk. It often has a sprinkle of cocoa powder on top.</p>
            <h5>Macchiato</h5>
            <p>A macchiato is an espresso with a small amount of foamed milk. It's essentially an espresso "marked" with a dollop of foam.</p>
            <h5>Americano</h5>
            <p>An americano is an espresso shot diluted with hot water, resulting in a longer, less concentrated coffee.</p>
            <h5>Espresso</h5>
            <p> Espresso is a strong coffee made by forcing hot water under pressure through finely-ground coffee beans.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
