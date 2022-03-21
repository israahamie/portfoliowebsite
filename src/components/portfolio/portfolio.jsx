import "./portfolio.css";
import placeholderImg from "../../images/wall-bgrd.jpg";
const Portfolio = () => {
  return (
    <div id="Portfolio" className="portfolio">
      <div className="portfolio-title">
        <h1 className="p-title">Some of my work</h1>
      </div>
      <div className="projects">
        <div className="grid-item" id="item1">
          <a className="project-link" href="https://www.w3schools.com/">
            CLICK 1
          </a>
          {/*testing link*/}
        </div>
        <div className="grid-item" id="item2">
          <a className="project-link" href="https://www.w3schools.com/">
            CLICK 2
          </a>
        </div>
        <div className="grid-item" id="item3">
          <a className="project-link" href="https://www.w3schools.com/">
            CLICK 3
          </a>
        </div>
        <div className="grid-item" id="item4">
          <a className="project-link" href="https://www.w3schools.com/">
            CLICK 4
          </a>
        </div>
        <div className="grid-item" id="item5">
          <a className="project-link" href="https://www.w3schools.com/">
            CLICK 5
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
