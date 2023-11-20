import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import { Col, Row } from "antd";

// Images
import bus from "./Images/bus.jpg";
import airplane from "./Images/airplane.jpg";
import train from "./Images/train.jpg";

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      {/* //   <Row
    //     style={{
    //       marginTop: "10px",
    //       width: "100%",
    //     }}
    //     gutter={[5, 5]}
    //   >
    //     <Col lg={{ span: 6 }} style={{ height: "100px" }}>
    //       <img
    //         src={carInterior1}
    //         alt=""
    //         style={{ objectFit: "cover", width: "100%", height: "100%" }}
    //       />
    //     </Col>
    //     <Col lg={{ span: 6 }} style={{ height: "100px" }}>
    //       <img
    //         src={carInterior2}
    //         alt=""
    //         style={{ objectFit: "cover", width: "100%", height: "100%" }}
    //       />
    //     </Col>
    //     <Col lg={{ span: 6 }} style={{ height: "100px" }}>
    //       <img
    //         src={carInterior3}
    //         alt=""
    //         style={{ objectFit: "cover", width: "100%", height: "100%" }}
    //       />
    //     </Col>
    //     <Col lg={{ span: 6 }} style={{ height: "100px" }}>
    //       <img
    //         src={carInterior4}
    //         alt=""
    //         style={{ objectFit: "cover", width: "100%", height: "100%" }}
    //       />
    //     </Col>
    //   </Row> */}
    </>
  );
}

export default App;
