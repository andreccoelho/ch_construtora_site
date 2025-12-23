import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WhatsAppOverlay from "../components/WhatsAppOverlay/WhatsAppOverlay";

const Base = (props) => (
  <>
    <Header />
    <div className="container">
      {props.children}
    </div>
    <Footer />
    <WhatsAppOverlay />
  </>
)

export default Base;