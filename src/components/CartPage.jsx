import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Text from "antd/es/typography/Text.js";
import Title from "antd/es/typography/Title.js";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Switch from "react-switch";

// Images
import car from "../Images/car.jpg";

function CartPage() {
  const navigate = useNavigate();

  // Placeholder for login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            {!isLoggedIn ? (
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
                  }}
                >
                  <Title level={4}>Login to my account</Title>
                  <Text>If you are a returning customer, log in now</Text>

                  <Button style={{ backgroundColor: "orange" }} onClick={()=>{setIsLoggedIn(true)}}>Log in</Button>
                </Col>
                <Col
                  lg={{ span: 12 }}
                  md={{ span: 24 }}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <Title level={4}>Sign up</Title>
                  <Text>
                    Create an account for extra convenience and benefit
                  </Text>

                  <Button style={{ backgroundColor: "orange" }}>Sign up</Button>
                </Col>
              </Row>
            ) : (
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
                    padding: "10px",
                    border: "1px solid #C1C1C1",
                  }}
                >
                  <Title level={4} style={{ padding: "0", margin: "0" }}>
                    Welcome back, Joel van Amerongen
                  </Title>
                  <Text>Check your details below and place your order</Text>

                  <Row
                    style={{
                      padding: "5px",
                      backgroundColor: "#C1C1C1",
                      border: "1px solid #0000CA",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Title level={4} style={{ margin: "0", padding: "0" }}>
                        Joel van Amerongen
                      </Title>
                      <Text style={{ color: "gray" }}>Straat 123</Text>
                      <Text style={{ color: "gray" }}>1234RE Leiden</Text>
                      <Text style={{ color: "gray" }}>
                        joel-test@vanamerongen.eu
                      </Text>
                    </div>
                  </Row>
                  <Text style={{ color: "gray" }}>
                    To place your order you must first agree to the terms and
                    conditions below:
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    Download legal information
                  </Text>

                  <Row style={{ alignItems: "center", marginTop: "10px" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <Switch
                        onChange={() => {}}
                        checked={() => {}}
                        checkedIcon={false}
                        width={40}
                        height={20}
                      />
                      <span>Agreement with the payment obligation</span>
                    </label>
                  </Row>

                  <Row style={{ alignItems: "center", marginTop: "10px" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      <Switch
                        onChange={() => {}}
                        checked={() => {}}
                        checkedIcon={false}
                        width={40}
                        height={20}
                      />
                      <span>Agreement with the payment obligation</span>
                    </label>
                  </Row>
                </Col>
                <Col
                  lg={{ span: 12 }}
                  md={{ span: 24 }}
                  style={{
                    padding: "10px",
                    border: "1px solid #C1C1C1",
                    display: "flex",
                    flexDirection: "column",

                    gap: "15px",
                  }}
                >
                  <Row
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text>Total rental</Text>
                    <Text>$ 50.00</Text>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text>Total security deposit</Text>
                    <Text>$ 100.00</Text>
                  </Row>
                  <Row
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text>Total VAT (21%)</Text>
                    <Text>$ 10.50</Text>
                  </Row>

                  <div>
                    <hr />
                  </div>

                  <Row
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <Text>Total</Text>
                    <Text>$ 160.50</Text>
                  </Row>

                  <Text style={{ color: "gray" }}>
                    I understand that whenplacing this order I enter into a
                    payment obligation
                  </Text>

                  <Button
                    style={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "#4096ff",
                      color: "#fff",
                      borderRadius: "20px",
                    }}
                  >
                    Order Now
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CartPage;
