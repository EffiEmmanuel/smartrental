import React, { useState } from "react";
import { Row, Col, Typography, Button, DatePicker } from "antd";
import { Link } from "react-router-dom";

import backgroundImage from "../Images/background.webp";
import carImage from "../Images/car.jpg";
import carInterior1 from "../Images/car-interior1.jpg";
import carInterior2 from "../Images/car-interior2.jpg";
import carInterior3 from "../Images/car-interior3.jpg";

const { Title, Text } = Typography;

const Hero = () => {
  const [currentSrcImg, setCurrentSrcImg] = useState(carImage);
  const [selectedDate, setSelectedDate] = useState(null);

  const listOfImages = [
    { src: carImage, name: "Chevrolet" },
    { src: carInterior1, name: "Interior" },
    { src: carInterior2, name: "Lorem" },
    { src: carInterior3, name: "Ipsum" },
  ];

  const dateTimeArray = [
    {
      date: "2023-11-12",
      available: true,
    },
    {
      date: "2023-11-13",
      available: true,
    },
    {
      date: "2023-11-26",
      available: false,
    },
    {
      date: "2023-12-15",
      available: false,
    },
  ];

  const handleCurrentImg = (params) => {
    setCurrentSrcImg(params);
  };

  const disabledDate = (current) => {
    // Disable past dates
    if (current && current < new Date()) {
      return true;
    }

    // Disable dates marked as unavailable
    const formattedCurrentDate = current.format("YYYY-MM-DD");
    const matchingDate = dateTimeArray.find(
      (date) => date.date === formattedCurrentDate
    );

    return matchingDate ? !matchingDate.available : false;
  };

  return (
    <Row
      gutter={[24, 24]}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
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
              onChange={(date) => setSelectedDate(date)}
              disabledDate={disabledDate}
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
              onChange={(date) => setSelectedDate(date)}
              disabledDate={disabledDate}
            />
          </Col>
          <Col span={24}>
            <Button type="primary" style={{ width: "100%", height: "45px" }}>
              Search Time slots
            </Button>
          </Col>
        </Row>
      </Col>
      <Col lg={{ span: 12 }} md={{ span: 24 }}>
        <Row style={{ backgroundColor: "white", padding: "20px" }}>
          <div style={{ height: "280px", width: "100%" }}>
            <img
              src={currentSrcImg}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <Row
            style={{
              marginTop: "10px",
              width: "100%",
            }}
            gutter={[5, 5]}
          >
          {listOfImages.map((image)=>
            <Col lg={{ span: 6 }} style={{ height: "100px" }}>
            <img
              onClick={()=>{handleCurrentImg(image.src)}}
              src={image.src}
              alt={image.name}
              style={{ objectFit: "cover", width: "100%", height: "100%",cursor:"pointer" }}
            />
            </Col>      
          )
          }

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
              <Link to={"/cart"}>
                <Button >Go to Cart</Button>
              </Link>
        </Row>
      </Col>
    </Row>
  );
};

export default Hero;
