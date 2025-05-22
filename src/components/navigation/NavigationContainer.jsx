import ShippingStatement from "./shared/ShippingStatement";
import MobileNavbar from "./mobile/MobileNavbar";
import Navbar from "./desktop/Navbar";

const NavigationContainer = () => {
  return (
    <div className="navigation-container">
      <Navbar />
      <MobileNavbar />
      <ShippingStatement />
    </div>
  );
};

export default NavigationContainer;
