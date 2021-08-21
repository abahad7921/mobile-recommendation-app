import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [ecosystem, setEcosystem] = useState("IOS");

  //usestate for devices

  const [phone1, setPhone1] = useState("Iphone 12Pro Max");
  const [phone2, setPhone2] = useState("Iphone 12");
  const [phone3, setPhone3] = useState("Iphone 12 Mini");

  //usesate for ratings

  const [rating1, setRating1] = useState("4.9");
  const [rating2, setRating2] = useState("4.5");
  const [rating3, setRating3] = useState("4");

  function onChangeHandler(event) {
    console.log(event.target.value);

    setValue(event.target.value);
  }

  function onClickHandlerIphone(event) {
    setEcosystem("IOS");

    setPhone1("Iphone 12Pro Max");
    setPhone2("Iphone 12");
    setPhone3("Iphone 12 Mini");

    //set the ratings

    setRating1(4.5);
    setRating2(4.2);
    setRating3(4);
  }

  function onChangeHandlerAndroid(event) {
    setEcosystem("Android");

    setPhone1("Google Pixel 4a");
    setPhone2("Oneplus 9 Pro");
    setPhone3("Samsung M51");

    //set the ratings

    setRating1(4.5);
    setRating2(4.2);
    setRating3(4);
  }
  return (
    <div className="App">
      <h1>Mobile Recommendations App</h1>
      <p>select your ecosystem</p>

      <button onClick={onClickHandlerIphone}>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021663000"
          style={{ height: "200px", cursor: "pointer" }}
        ></img>
      </button>

      <button onClick={onChangeHandlerAndroid}>
        <img
          src="https://cdn.vox-cdn.com/thumbor/TzVXx4TCgo42XYawW-y5-A_ranA=/0x0:5120x2880/920x613/filters:focal(2151x1031:2969x1849):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69319101/PIXEL_6_PRO_5K3.0.jpeg"
          style={{ height: "200px", cursor: "pointer" }}
        ></img>
      </button>

      <div>
        <h2>ecosystem choosen is {ecosystem}</h2>
        <p>here are my top picks for {ecosystem} devic</p>

        <ul style={{ listStyle: "none" }}>
          <li>
            {phone1} ,rating = {rating1}
          </li>
          <li>
            {phone2} ,rating = {rating2}
          </li>
          <li>
            {phone3} ,rating = {rating3}
          </li>
        </ul>
      </div>
    </div>
  );
}
