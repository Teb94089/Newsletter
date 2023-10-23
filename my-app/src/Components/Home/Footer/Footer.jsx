import React from "react";
import styled from "styled-components";
import { TitleStyles } from "../../ReusableStyle/ReusableStyle"
import logo from "../../../assets/Mochalogo.png";
export default function Footer() {
  return (
    <div className="footer">
      <Section1 id="newsletter">
      <div className="title">
        <h3>
          <span>Subscribe</span> Newsletter
        </h3>
        <p>
        Be the first to know of any specials, launches, rewards and more.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="email@example.com" />
        <button>Subscribe</button>
      </div>
    </Section1>
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
          Unlock Knowledge, Delivered to Your Inbox
          </p>
         
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
          Discover curated newsletters tailored to your interests. Stay informed and inspired with our handpicked content.
          
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+27 213123129</p>
          <p>n&htechnologies@gmail.com</p>
          <p>@N&H Technologies</p>
          <p>412 Street, Ground Floor, South Africa</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2023 <span>N&H Technologies</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section1 = styled.section`
  border: 0.01rem solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background:  #FF5823;
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.3rem 6rem 1.3rem 0.8rem;
      font-size: 1rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.5rem 3rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 2rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
const Section = styled.footer`
  margin: 0;
  background:  #FF5823;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6vw;
  padding: 1vw;
  p {
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background: rgb(69 211 255 / 27%);
  color: grey;
  padding: 1rem;
  h2 {
    span {
      color: #FF5823;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
