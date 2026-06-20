import "./Home.css";
import { useNavigate } from "react-router-dom";
import bannerImage from "./assets/banner.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* Banner Section */}
      <div className="banner-section">
        <img src={bannerImage} alt="Flavors of Pavartty restaurant banner" className="banner-image" />
      </div>

      {/* Hero Section */}
      <div className="home-container">
        <div className="hero-section">
          <h1 className="title">Flavors of Pavartty</h1>
          <h3 className="subtitle">Authentic Kerala Cuisine Experience</h3>
          <p className="description">
            Welcome to Flavors of Pavartty — a modern Kerala-inspired restaurant reservation system.
            Reserve your table, explore traditional dishes, and enjoy a seamless dining experience
            inspired by Kerala's backwaters and heritage.
          </p>
          <div className="button-group">
            <button className="primary-btn" onClick={() => navigate("/login")}>
              Login to Reserve
            </button>
            <button className="secondary-btn" onClick={() => navigate("/code")}>
              Restaurant Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;