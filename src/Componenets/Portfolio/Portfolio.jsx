import React from "react";
import "./Portfolio.css";
import {
  BlogApp,
  Cpp,
  ExpoFirebase,
  ExpoMap,
  Spotify,
  FitnessClub,
  PingPong,
  RatInMaze,
  TicTacToe,
  TodoList,
  TypoTune,
  MileMarker
} from "../../Assets/Images";

const Portfolio = () => {
  const data = [
    {
      id: 12,
      image: MileMarker,
      title: "Mile Marker (Working)",
      github: "https://github.com/TyRoopam9599/Exp_MileMarker",
      demo: ""
    },
    {
      id: 1,
      image: FitnessClub,
      title: "Fitness Club Website",
      github: "https://github.com/TyRoopam9599/React_Fitness",
      demo: "https://tyroopam9599.github.io/React_Fitness",
    },
    {
      id: 2,
      image: TypoTune,
      title: "Typo Tune",
      github: "https://github.com/TyRoopam9599/React-Typo-Tune",
      demo: "https://tyroopam9599.github.io/React-Typo-Tune",
    },
    {
      id: 3,
      image: ExpoMap,
      title: "Expo Google Maps Integration",
      github: "https://github.com/TyRoopam9599/Expo_Google-Maps_Integration",
      demo: "",
    },
    {
      id: 4,
      image: ExpoFirebase,
      title: "Expo Firebase Email Authentication",
      github: "https://github.com/TyRoopam9599/Expo_Firebase_EmailAuth",
      demo: "",
    },
    {
      id: 5,
      image: Spotify,
      title: "Spotify",
      github: "https://github.com/TyRoopam9599/RN_Spotify",
      demo: "",
    },
    {
      id: 6,
      image: Cpp,
      title: "Travel Management System",
      github: "https://github.com/TyRoopam9599/CPP_TravelManagementSystem",
      demo: "",
    },
    {
      id: 7,
      image: BlogApp,
      title: "Blog Application",
      github: "https://github.com/TyRoopam9599/Django_BlogApplication",
      demo: "",
    },
    {
      id: 8,
      image: TicTacToe,
      title: "Tic-Tac_Toe",
      github: "https://github.com/TyRoopam9599/JS_Tic-Tac_Toe",
      demo: "https://tyroopam9599.github.io/JS_Tic-Tac-Toe/",
    },
    {
      id: 9,
      image: TodoList,
      title: "Todo List Application",
      github: "https://github.com/TyRoopam9599/JS_TodoListApp",
      demo: "https://tyroopam9599.github.io/JS_TodoListApp/",
    },
    {
      id: 10,
      image: PingPong,
      title: "Ping Pong",
      github: "https://github.com/TyRoopam9599/JS_PingPong",
      demo: "https://tyroopam9599.github.io/JS_PingPong/",
    },
    {
      id: 11,
      image: RatInMaze,
      title: "Rat In Maze",
      github: "https://github.com/TyRoopam9599/JS_RatInMaze",
      demo: "https://tyroopam9599.github.io/JS_RatInMaze/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="project_image" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="blank" className="btn">
                  Github
                </a>
                {demo === "" ? (
                  <></>
                ) : (
                  <a href={demo} target="blank" className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
