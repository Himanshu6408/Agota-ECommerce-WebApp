import React from "react";
import insta1 from "../assets/instragram-img1.jpg";
import insta2 from "../assets/instragram-img2.jpg";
import insta3 from "../assets/instragram-img3.jpg";
import insta4 from "../assets/instragram-img4.jpg";
import insta5 from "../assets/instragram-img5.jpg";
import insta6 from "../assets/instragram-img1.jpg"; // corrected file name

function Logo() {
  const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <>
      {/* Instagram Images */}
      <div className="h-fit w-[99vw] flex mt-20 ">
        {instaImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Logo;
