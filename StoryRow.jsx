import React from "react";
import Story from "./Story";
import "./StoryRow.css";
function StoryRow() {
  return (
    <div className="storyrow">
      <Story
        imgUrl={
          "https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg"
        }
        dispName={"SudharsanSandyy"}
        profilePic={"https://sqwebz.tech/Sandyy.jpg"}
      />
      <Story
        imgUrl={
          "https://www.holidify.com/images/cmsuploads/compressed/Woman-in-clear-turqoise-water-in-the-Maldives-with-stilted-houses-in-the-distance-1200x854_20190630085156.jpg"
        }
        dispName={"SudharsanSandyy"}
        profilePic={"https://sqwebz.tech/Sandyy.jpg"}
      />
      <Story
        imgUrl={
          "https://pix10.agoda.net/hotelImages/7458162/0/b516a92cb50c969a0834002737a4b068.jpg?ca=23&ce=0&s=1024x768"
        }
        dispName={"SudharsanSandyy"}
        profilePic={"https://sqwebz.tech/Sandyy.jpg"}
      />
      <Story
        imgUrl={
          "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg"
        }
        dispName={"SudharsanSandyy"}
        profilePic={"https://sqwebz.tech/Sandyy.jpg"}
      />
      <Story
        imgUrl={
          "https://www.holidify.com/images/cmsuploads/compressed/Woman-in-clear-turqoise-water-in-the-Maldives-with-stilted-houses-in-the-distance-1200x854_20190630085156.jpg"
        }
        dispName={"SudharsanSandyy"}
        profilePic={"https://sqwebz.tech/Sandyy.jpg"}
      />
    </div>
  );
}

export default StoryRow;
