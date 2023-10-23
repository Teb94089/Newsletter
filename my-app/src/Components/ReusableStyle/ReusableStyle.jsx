import { css } from "styled-components";

export const imageZoomEffect = css`
  img {
    transition: 0.8s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TitleStyles = css`
  .title {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      span {
        color:   rgba(245, 127, 23,0.2);
      }
    }
    .yellow {
      color: #f9c74f;
    }
    h3 {
      font-size: 2rem;
      text-transform: uppercase;
      span {
        color:  #FF5823;
      }
    }
    .yellow {
      color: #f9c74f;
    }
    p {
      padding: 0 10vw;
      font-size: 1.1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .title {
      gap: 1rem;
      h1 {
        font-size: 2rem;
      }
      p {
        padding: 0 1vw;
      }
    }
  }
`;

// Define ButtonStyles here
export const ButtonStyles = css`
  padding: 0.6rem 3rem;
  letter-spacing: 0.2rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  border: none;
  color: white;
  background-color: #fc4958;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #f9c74f;
  }
`;
//main-container
export const Main = css`
.main-container {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
  height: auto;
  min-height: 35rem;
  padding: 14rem 0;
}
`;