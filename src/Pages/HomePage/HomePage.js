
import ASSETS from "../../Assets";
import CustomButton from "../../Components/CustomButtton/CustomButton";
import COLOR from "../../config/config";
import "./styles.css";


function HomePage() {
  return (
    <div
      className="baseContainer"
      style={{
        backgroundImage: `url(${ASSETS.homePageBackImage})`,
      }}
    > <div className="navBar">
      <ul class="menu">
        <li>Home</li>
        <li> About</li>
        <li>Setting</li>
      </ul>
    </div>
        <quizImage className="icon" />
        <CustomButton
          backgroundColor={ COLOR.secondSecondaryColor}
          color={COLOR.blackColor}
          title={"START QUIZ"}
          onClick={() => alert("Click Done")}
        />
  
      
      </div>
  );
}

export default HomePage;