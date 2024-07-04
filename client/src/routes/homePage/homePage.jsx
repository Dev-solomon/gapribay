import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">We Sell Land & Houses, Trusted Place To Buy.</h1>
          <p>
          Discover your dream property with us. 
          Browse a curated selection of prime lands and homes tailored to your lifestyle.
           Whether you're investing, building, or settling down,
            find the perfect place to call home with our expert guidance and extensive listings
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Satisfied Customers</h2>
            </div>
            <div className="box">
              <h1>300+</h1>
              <h2>Properties Available</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
