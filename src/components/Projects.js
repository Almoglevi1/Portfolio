import React, { useEffect, useCallback, useState } from "react";
import "../styles.css";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import CostManagerImage from "../images/CostManagerImage.png";
import ReactWeatherAppImage from "../images/ReactWeatherAppImage.png";
import PopularMoviePredictionImage from "../images/PopularMoviePredictionImage.png";
import PaintImage from "../images/PaintImage.png";
import keeperAppImage from "../images/keeperAppImage.png";
import simonGameImage from "../images/simonGameImage.png";
import quizzyImage from "../images/quizzyImage.png";
import IotSmartLockImage from "../images/IotSmartLockImage.png";
import Carousel from "react-bootstrap/Carousel";
import ecommerceImg from "../images/ecommerceImg.png";
import ecommerceAdminImg from "../images/ecommerceAdminImg.png";
import weatherImage from "../images/weatherImage.png";
import articlesAPI from "../images/articlesAPI.png";

const cardItems = [
  {
    id: 1,
    headline: "Nike-Shoes Ecommerce",
    photo: ecommerceImg,
    description:
      "A Nike shoes E-commerce store built with Next.js, React.js and Tailwind CSS. The application utilizes a RESTful API for efficient server interaction. Features include product listing, shopping cart functionality and order processing with Stripe.",
    url: "https://nike-shoes-ecommerce1.vercel.app/",
  },
  {
    id: 2,
    headline: "Nike-Shoes Ecommerce Admin",
    photo: ecommerceAdminImg,
    description:
      "A Next.js project for a Nike shoes E-commerce admin panel, providing a user interface for managing products, orders and categories.",
    url: "https://github.com/Almoglevi1/Nike-Shoes-Ecommerce-Admin",
  },
  {
    id: 3,
    headline: "Weather-App",
    photo: weatherImage,
    description:
      "A Full Stack web application that fetches and displays weather information for cities around the world. Built with React for the client-side and Node.js with Express for the server-side. it utilizes the WeatherAPI (https://www.weatherapi.com/) to provide accurate weather data.",
    url: "https://github.com/Almoglevi1/Weather-App",
  },
  {
    id: 4,
    headline: "Articles-API",
    photo: articlesAPI,
    description:
      "Articles API is a RESTful API built with Node.js and Express, using MongoDB as the database. It allows users to create, read, update, and delete articles, manage categories, and handle user authentication (signup and login).",
    url: "https://github.com/Almoglevi1/Articles-API",
  },
  {
    id: 5,
    headline: "Cost Manager React web application",
    photo: CostManagerImage,
    description:
      "This app helps manage the user's expenses. Enables adding, editing, deleting, displaying the data, sorting and filtering.",
    url: "https://almoglevi1.github.io/Cost-Manager-App/",
  },
  {
    id: 6,
    headline: "React-WeatherApp",
    photo: ReactWeatherAppImage,
    description:
      "This app was developed using React while using OpenWeather API and GeoDB cities API.",
    url: "https://almoglevi1.github.io/Weather-App/",
  },
  {
    id: 7,
    headline: "Quizzy",
    photo: quizzyImage,
    description:
      "Quizzy Library in Java while using classic design patterns: Singleton, Factory, Prototype, Builder and Data Access Object.",
    url: "https://github.com/Almoglevi1/Quizzy",
  },
  {
    id: 8,
    headline: "Popular Movies Prediction",
    photo: PopularMoviePredictionImage,
    description: "Data science - machine learning project in python.",
    url: "https://github.com/Almoglevi1/Popular-Movies-Prediction",
  },
  {
    id: 9,
    headline: "Paint",
    photo: PaintImage,
    description: "Paint application was developed using C++ and MFC framework.",
    url: "https://github.com/Almoglevi1/Paint",
  },
  {
    id: 10,
    headline: "Keeper App",
    photo: keeperAppImage,
    description:
      "This app using React and Material-UI. Store ideas and notes in a structured way in the form of React components. Create a number of notes and can delete them too.",
    url: "https://almoglevi1.github.io/Keeper-App/",
  },
  {
    id: 11,
    headline: "Simon Game",
    photo: simonGameImage,
    description: "This game was developed using HTML, CSS and JavaScript.",
    url: "https://almoglevi1.github.io/Simon-Game/",
  },
  {
    id: 12,
    headline: "IOT Smart-Lock",
    photo: IotSmartLockImage,
    description: "IOT Smart Lock application developed using python.",
    url: "https://github.com/Almoglevi1/IOT-Smart-Lock",
  },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const Projects = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    let transitionInterval;
    if (!isHovered) {
      transitionInterval = setInterval(() => {
        handleCardTransition();
      }, 3000);
    }
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, isHovered]);

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };
  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="Projects">
      <h3 className="sectionHeader">My Projects</h3>

      <Carousel className="carousel slide card" variant="dark">
        {cardItems.map((card, index) => (
          <Carousel.Item interval={2000}>
            <Row>
              <Col lg={1} md={1}></Col>
              <Col
                className="projectDetails"
                lg={3}
                md={3}
                xs={{ span: "auto", order: 1 }}
              >
                <h2>{card.headline}</h2>
                <p>{card.description}</p>
                <Button
                  className="viewProjectBtn"
                  href={card.url}
                  target={"_blank"}
                  variant="primary"
                >
                  View Project
                </Button>
              </Col>
              <Col lg={7} md={7} xs={{ span: "auto", order: 2 }}>
                <Image
                  className="project-image"
                  src={card.photo}
                  alt={card.headline}
                />
              </Col>
            </Row>
            <Col lg={1} md={1}></Col>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
