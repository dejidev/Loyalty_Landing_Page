import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Granim from "granim";

function App() {
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
      {/* <div className="mid-grad"></div> */}
      <Navbar />
      <canvas className="ball grad2 " id="canvas" />
      <canvas className="ball grad1 " id="logo-canvas" />
      <canvas className="ball grad3 " id="canvass" />

      <article className="text-center text-white satochi">
        <h1 className=" md:w-2/3 text-4xl md:text-6xl m-auto font-extrabold pt-8 pb-4">
          Turn your best customers into
          <span className="text-[#A75FD2]"> Loyal fans</span>
        </h1>

        <p className="text-lg lg:1/2 md:2/3 m-auto">
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
      </article>


    </div>
  );
}

export default App;
