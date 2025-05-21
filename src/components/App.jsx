import Navbar from "./navigation/Navbar";
import ShippingStatement from "./navigation/ShippingStatement";

{
  /* 
  Todo:
    - Navbar component to be replaced with search bar component
*/
}

const App = () => {
  return (
    <div className="app-container">
      <div className="app-navbar-wrapper">
        <Navbar />
        <ShippingStatement />
      </div>
    </div>
  );
};

export default App;
