import React, { useState, useEffect } from "react";
import style from "./Gallery.module.css";
import img1 from "../../assets/277790509_5438991389453780_1897423721682429725_n.jpg";
import img2 from "../../assets/309508292_5965123636840550_2558392402016952115_n.jpg";
import img3 from "../../assets/277790509_5438991389453780_1897423721682429725_n.jpg";
import img4 from "../../assets/277790509_5438991389453780_1897423721682429725_n.jpg";
import img5 from "../../assets/277790509_5438991389453780_1897423721682429725_n.jpg";
import img6 from "../../assets/277790509_5438991389453780_1897423721682429725_n.jpg";

export default function Gallery() {
  // let images = [img1, img2, img3, img4, img5, img6];
  let images =[ 
    {path: img1 , id:1},
    {path: img2 , id:2},
    {path: img3 , id:3},
    {path: img4 , id:4},
    {path: img5 , id:5},
    {path: img6 , id:6},
  ]
 

  function test(z) {
    let x = document.querySelector("#ahmed");
    let y = document.querySelector("#main-image");
    x.classList.replace("hidden", "block");
    y.setAttribute("src",z)
    console.log(y.getAttribute("src"));
  }

  function closeModal() {
    let x = document.querySelector("#ahmed");
    x.classList.replace("block", "hidden");
  }

  return (
    <>
      {/* modal togle */}
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div className="w-1/4" key={image.id}>
            <img onClick={function(){test(image.path)}} src={image.path} className="w-full" />
          </div>
        ))}
      </div>


      {/* modal body */}
      <div onClick={closeModal} id="ahmed" className={`fixed top-0 left-0 w-full h-full hidden ${style.demo}`}>
        <div className="fixed top-5 right-5">
          <i
            onClick={closeModal}
            id="close-icon"
            className="fa-solid fa-circle-xmark text-gray-300"
          ></i>
        </div>
        <div className="w-1/2 m-auto mt-28">
          <img id="main-image" src={img1} className="w-1/2 m-auto" />
        </div>
      </div>


    </>
  );
}
