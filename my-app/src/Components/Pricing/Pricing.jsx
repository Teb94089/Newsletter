import React, { useState } from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "../ReusableStyle/ReusableStyle";

import ScrollReveal from "scrollreveal";
import ScrollServices from "../../Utilities/ScrollServices/ScrollServices";

import product1 from "../../assets/desk.jpg";
import product2 from "../../assets/email.png";
import product3 from "../../assets/newsletter.jpg";
import product4 from "../../assets/desk.jpg";

export default function Pricing() {
  const data = [
    {
      image: product1,
      name: "Free",
      price: "R69.99",
    },
    {
      image: product2,
      name: "Lite",
      price: "R59.99",
    },
    {
      image: product3,
      name: "Standard",
      price: "R80",
    },

    {
      image: product4,
      name: "Premium",
      price: "R100",
    },
   
  ];

 
  return (
    <><Section1 id="pricing">
      <div className="title">
        <h1>
          <span>Sign up</span> For Free!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
               
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p> </p>
              <button>Get Started</button>
            </div>);
        })}
      </div>
    </Section1>
   </>
  );
}
const Section1 = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 50px 0 0 0;
height: auto;
min-height: 40rem;
padding: 8rem 0;
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #f9c74f;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
        
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background:  rgba(11, 190, 173,0.8);
        text-transform: uppercase;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    h2 {
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;
