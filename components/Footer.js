import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-300 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> ABOUT</h5>
        <p> How Aitbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p> Airbnb Plus</p>
        <p> Airbnb Luxery</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> COMMUNITY</h5>
        <p> Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p> Refferals accepted</p>
        <p> Papafam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST</h5>
        <p> Andy React</p>
        <p>Presents</p>
        <p> Zero to Full Stack Hero</p>
        <p> Hundreds of Students</p>
        <p> Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> SUPPORT</h5>
        <p> Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p> Eater Eggs</p>
        <p> For the Win</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
