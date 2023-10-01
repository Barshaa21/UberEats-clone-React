import { useState, ReactElement } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Mobile from "./components/MobileAdd";
import Images from "./components/Images";
import Map from "./components/Map";
import Countries from "./components/Countries";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Modal from "./components/Modal";

function App(): ReactElement {
  const [show, setShow] = useState(false);
  const [ClickedItem, setClickedItem] = useState("");

  const onClick = (item: string): void => {
    setShow(true);
    setClickedItem(item);
  };

  const closeModal = (): void => setShow(false);

  return (
    <>
      <div className="h-screen w-screen bg-cover bg-[url('./assets/ubereats.png')] bg-no-repeat">
        <Navbar onClick={onClick} />
        {show && <Modal closeModal={closeModal} item={ClickedItem} />}
        <Body />
      </div>
      <Mobile />
      <Images />
      <Map />
      <Countries />
      <Downloads />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
