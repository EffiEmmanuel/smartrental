import React from "react";
import { Col, Row } from "antd";

// Images
import bus from "../Images/bus.jpg";
import airplane from "../Images/airplane.jpg";
import train from "../Images/train.jpg";
import Text from "antd/es/typography/Text.js";
import Title from "antd/es/typography/Title.js";
import Navbar from "./NavBar";

function CartPage() {
  return (
    <>
      <div style={{ marginTop: "20px", padding: "50px" }}>
        <Row>
          <Title level={3}>Other products</Title>
        </Row>
        <Row
          style={{
            width: "100%",
            display: "flex",
            gap: "10px",
            overflowX: "scroll",
          }}
        >
          <Col
            style={{
              height: "200px",
              width: "300px",
              backgroundImage: `url(${bus})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "10px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 4 }}>
              <Title
                level={4}
                style={{
                  color: "white",
                }}
              >
                25% OFF
              </Title>
              <Text style={{ color: "white" }}>On Bus Booking</Text>
            </div>

            {/* overlay */}
            <div
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: "20%",
                zIndex: 2,
              }}
            ></div>
          </Col>
          <Col
            style={{
              height: "200px",
              width: "300px",
              backgroundImage: `url(${airplane})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "10px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 4 }}>
              <Title
                level={4}
                style={{
                  color: "white",
                }}
              >
                25% OFF
              </Title>
              <Text style={{ color: "white" }}>On Flight Booking</Text>
            </div>

            {/* overlay */}
            <div
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: "20%",
                zIndex: 2,
              }}
            ></div>
          </Col>
          <Col
            style={{
              height: "200px",
              width: "300px",
              backgroundImage: `url(${train})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "10px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 4 }}>
              <Title
                level={4}
                style={{
                  color: "white",
                }}
              >
                25% OFF
              </Title>
              <Text style={{ color: "white" }}>On Train Booking</Text>
            </div>

            {/* overlay */}
            <div
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: "20%",
                zIndex: 2,
              }}
            ></div>
          </Col>
          <Col
            style={{
              height: "200px",
              width: "300px",
              backgroundImage: `url(${bus})`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "10px",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", zIndex: 4 }}>
              <Title
                level={4}
                style={{
                  color: "white",
                }}
              >
                25% OFF
              </Title>
              <Text style={{ color: "white" }}>On Bus Booking</Text>
            </div>

            {/* overlay */}
            <div
              style={{
                backgroundColor: "black",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: "20%",
                zIndex: 2,
              }}
            ></div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CartPage;
