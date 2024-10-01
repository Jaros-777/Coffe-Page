import NavBar from "./NavBar";
import Welcome from "./Welcome";
import BigText from "./BigText";
import Belt from "./Belt";
import Categories from "./Categories"
import Order from "./Order";

function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <BigText></BigText>
      <Belt></Belt>
      <Categories></Categories>
      <Order></Order>
    </>
  );
}

export default HomePage;
