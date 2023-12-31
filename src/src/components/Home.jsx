import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Button, DatePicker } from "antd";

// Images
import backgroundImage from "../Images/background.webp";
import carImage from "../Images/car.jpg";
import bus from "../Images/bus.jpg";
import airplane from "../Images/airplane.jpg";
import train from "../Images/train.jpg";

const { Title, Text } = Typography;

const Home = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectDateTime, setSelectDateTime] = useState();

  const datetimearray = [
    {
      date: "2023-11-12",
      available: false,
    },
    {
      date: "2023-11-13",
      timeslots: [
        { time: "01:00-02:00", available: true },
        { time: "02:00-03:00", available: true },
        { time: "03:00-04:00", available: false },
      ],
    },
  ];

  useEffect(() => {
    const selectedDateTime = datetimearray.find(
      (item) => item.date === selectedDate
    );

    if (selectedDateTime) {
      const selectedTimeSlot = selectedDateTime.timeslots.find(
        (slot) => slot.time === selectedTime
      );
      setSelectDateTime(selectedTimeSlot);
    }
  }, [selectedDate, selectedTime]);

  return (
    <Row
      gutter={[24, 24]}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        // display: "flex",
        padding: "50px",
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Col lg={{ span: 12 }} md={{ span: 24 }}>
        <Row
          gutter={[16, 16]}
          style={{
            backgroundColor: "rgba(0, 0, 50, 0.7)",
            padding: "20px",
            borderRadius: "10px",
            //   width: "50%",
            height: "300px",
          }}
        >
          <Col span={24}>
            <Title level={3} style={{ color: "white" }}>
              Choose your start and end date
            </Title>
            <hr />
          </Col>
          <Col span={12}>
            <Text style={{ color: "white" }}>Depart date</Text>
            <DatePicker
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "1px solid white",
                borderRadius: 0,
                color: "white",
                caretColor: "white",
              }}
              onChange={(date) => setSelectedDate(date.format("YYYY-MM-DD"))}
            />
          </Col>
          <Col span={12}>
            <Text style={{ color: "white" }}>Return date</Text>
            <DatePicker
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "1px solid white",
                borderRadius: 0,
                color: "white",
                caretColor: "white",
              }}
              onChange={(date) => setSelectedTime(date.format("YYYY-MM-DD"))}
            />
          </Col>
          <Col span={24}>
            <Button  style={{ width: "100%", backgroundColor: "#1677ff", color: "white", height: "45px" }}>
              Search Time slots
            </Button>
          </Col>
        </Row>
      </Col>
      <Col lg={{ span: 12 }} md={{ span: 24 }}>
        <Row style={{ backgroundColor: "white", padding: "20px" }}>
          <div style={{ height: "280px", width: "100%" }}>
            <img
              src={carImage}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* <Row
            style={{
              marginTop: "10px",
              width: "100%",
            }}
            gutter={[5, 5]}
          >
            <Col lg={{ span: 6 }} style={{ height: "100px" }}>
              <img
                src={carInterior1}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Col>
            <Col lg={{ span: 6 }} style={{ height: "100px" }}>
              <img
                src={carInterior2}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Col>
            <Col lg={{ span: 6 }} style={{ height: "100px" }}>
              <img
                src={carInterior3}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Col>
            <Col lg={{ span: 6 }} style={{ height: "100px" }}>
              <img
                src={carInterior4}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Col>
          </Row> */}
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
              backgroundPosition: 'cover',
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

          {/* Car Description */}
          <Row>
            <Col>
              <Title level={3}>Audi Q3</Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  marginTop: "-20px",
                }}
              >
                <Title level={3} style={{ color: "red" }}>
                  € 99,00
                </Title>
                <Text>/ per day</Text>
              </div>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
