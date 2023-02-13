import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState, useRef } from "react";
import Granim from "granim";
import bg from "./assests/bg.png";
import Priority from "./components/Priority";
import Footer from "./components/Footer";
import star from "./assests/star.png";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const ref = useRef(null);

  const scroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    // console.log(ref.current.value);
  };

  const toggleModal = (e) => {
    setModal(!modal);
    e.preventDefault();
    if (inputName.current.value && inputEmail.current.value) {
      inputName.current.value = "";
      inputEmail.current.value = "";
    }
  };

  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#FF445B", "#BA2AD1"],
            ["#6212DC", "#FF445B"],
            ["#5404FF", "#BA2AD1"],
            ["#FF445B", "#BA2AD1"],
            ["#6212DC", "#FF445B"],
            ["#5404FF", "#BA2AD1"],
          ],
          transitionSpeed: 2000,
        },
      },
    });

    new Granim({
      element: "#canvas",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#5404FF", "#BA2AD1"],
            ["#FF445B", "#BA2AD1"],
            ["#6212DC", "#FF445B"],
            ["#5404FF", "#BA2AD1"],
            ["#FF445B", "#BA2AD1"],
            ["#6212DC", "#FF445B"],
          ],
          transitionSpeed: 2000,
        },
      },
    });

    new Granim({
      element: "#canvass",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#5404FF", "#BA2AD1"],
            ["#FF445B", "#BA2AD1"],
            ["#FF445B", "#BA2AD1"],
            ["#6212DC", "#FF445B"],
            ["#6212DC", "#FF445B"],
            ["#5404FF", "#BA2AD1"],
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);

  return (
    <div className="bg-[#121B27] min-h-screen relative px-6 md:px-16 overflow-hidden z-10">
      <img src={bg} alt="bg " className="mid-grad mt-64" />
      <Navbar scroll={scroll} />
      <canvas className="ball grad2 " id="canvas" />
      <canvas className="ball grad1 " id="logo-canvas" />
      <canvas className="ball grad3 " id="canvass" />
      <canvas className="ball grad4" id="canvass" />
      <img src={star} alt="star" className="absolute star1" />
      <img src={star} alt="star" className="absolute star2" />
      <img src={star} alt="star" className="absolute star3" />
      <img src={star} alt="star" className="absolute star4" />
      <img src={star} alt="star" className="absolute star5" />
      <img src={star} alt="star" className="absolute star6" />
      <Home
        inputName={inputName}
        inputEmail={inputEmail}
        toggleModal={toggleModal}
      />
      <Priority ref={ref} />
      <Footer />
      <Modal modal={modal} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
