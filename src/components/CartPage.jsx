import React from "react";
import { Button, Col, Row } from "antd";
import Text from "antd/es/typography/Text.js";
import Title from "antd/es/typography/Title.js";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

// Images
import car from "../Images/car.jpg";

function CartPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          padding: "50px",
          backgroundColor: "#FBF4E8",
          minHeight: "100vh",
        }}
      >
        <div
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            cursor: "pointer",
          }}
        >
          <CaretLeft size={20} color="black" />
          <Text>Go back</Text>
        </div>

        <Row
          style={{
            backgroundColor: "white",
            padding: "20px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          gutter={[20, 20]}
        >
          <Col lg={{ span: 12 }} md={{ span: 24 }}>
            <div
              onClick={() => navigate("/")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1px",
                cursor: "pointer",
              }}
            >
              <CaretLeft size={20} color="#E8C78E" />
              <Text style={{ color: "#E8C78E" }}>Appointment Select</Text>
            </div>

            <Row>
              <Col>
                <Title level={3}>
                  In-Person: 20MIN Initial Styling % Hire Consultation - with
                  Stylist
                </Title>
                <Title
                  level={3}
                  style={{ color: "#E8C78E", marginTop: "-6px" }}
                >
                  Cloth and Confeti
                </Title>
              </Col>
            </Row>

            <Row style={{ gap: "10px" }}>
              <CalendarBlank size={20} color="#E8C78E" />
              <Text style={{ fontWeight: "bold" }}>Time and Date</Text>
              <Text>1:30AM(CET) on Wednesday November 15th, 2023</Text>
            </Row>
            <Row
              style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                overflowX: "scroll",
                marginTop: "10px",
              }}
            >
              <img
                src={car}
                alt=""
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            </Row>
          </Col>

          <Col
            lg={{ span: 12 }}
            md={{ span: 24 }}
            style={{
              border: ".3px solid gray",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row
              style={{
                // height: "60%",
                width: "100%",
              }}
            >
              <Col
                lg={{ span: 12 }}
                md={{ span: 24 }}
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#FAFAFA",
                  height: "100%",
                }}
              >
                <Title level={4}>Login to my account</Title>
                <Text>If you are a returning customer, log in now</Text>

                <Button style={{ backgroundColor: "orange" }}>Log in</Button>
              </Col>
              <Col
                lg={{ span: 12 }}
                md={{ span: 24 }}
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#FAFAFA",
                  height: "100%",
                }}
              >
                <Title level={4}>Sign up</Title>
                <Text>Create an account for extra convenience and benefit</Text>

                <Button style={{ backgroundColor: "orange" }}>Sign up</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CartPage;
