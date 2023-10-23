import React from 'react';
import styled from 'styled-components';
import serviceBackground from '../../assets/newsletters.jpg';
import service1Icon from '../../assets/market.jpg';
import service2Icon from '../../assets/email.png';
import service3Icon from '../../assets/desk.jpg';
import { TitleStyles, ButtonStyles } from '../ReusableStyle/ReusableStyle';
import { Typing, TypingStep } from "typing-effect-reactjs";

const Features = ({ icon, title, description, buttonText }) => (
  <ServiceContainer>
    <ServiceIcon src={icon} alt={`${title} Icon`} />
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
    <ServiceButton>{buttonText}</ServiceButton>
  </ServiceContainer>
);

const features = () => (
  <Section id="features">
  
    <ServiceSection>
      <ServiceTitle className="yellow">What do we offer?</ServiceTitle>
      <ServiceDescription>
      <Typing text="Welcome to Mocha Cafe, where the passion for coffee and the love of community come together to create an exceptional experience. Inspired by the vibrant coffee culture of places, we set out on a journey to craft a unique space that not only serves exceptional coffee but also fosters meaningful connections." />
        
      </ServiceDescription>
    </ServiceSection>
   
    <ServicesGrid>
      <Features icon={service1Icon} title="Intuitive Newsletter Builder with Drag-and-Drop Interface" description="A user-friendly, drag-and-drop interface for creating newsletters is essential. It allows users to easily design and customize newsletters without requiring advanced technical skills. The ability to choose and arrange elements (text, images, buttons) intuitively enhances the overall user experience and encourages more users to create engaging newsletters effortlessly." buttonText="Read More"/>
      <Features icon={service2Icon} title="Responsive Templates and Customization Options:" description="Offering a variety of professionally designed, mobile-responsive templates is crucial. Users appreciate having a starting point that looks great on all devices. Additionally, providing customization options within these templates (colors, fonts, layouts) allows users to tailor the design to match their brand, making their newsletters unique and visually appealing." buttonText="Discover" />
      <Features icon={service3Icon} title="Comprehensive Analytics and Reporting:" description="Robust analytics and reporting features are vital for users to measure the success of their newsletters. Metrics such as open rates, click-through rates, subscriber engagement, and geographical insights enable users to optimize their content and strategies. Providing actionable insights empowers users to make data-driven decisions, helping them improve the effectiveness of their newsletters over time." buttonText="Explore" />
      
    </ServicesGrid>
  </Section>
);

// ... (previous imports and component definitions)

const Section = styled.section`
margin: 50px 0 0 0;
height: auto;
min-height: 35rem;
padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  position: relative;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(80%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1; 
`;

const ServiceSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-radius: 20px;
  background: rgb(69 211 255 / 27%);
   
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ServiceIcon = styled.img`
  height: 100px;
`;

const ServiceTitle = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  color: #f9c74f;
        
        letter-spacing: 0.5rem;
`;

const ServiceDescription = styled.p`
  margin-top: 1rem;
  color: black; 
`;

const ServiceButton = styled.button`
  ${ButtonStyles};
  margin-top: 1rem;
  background-color: rgba(11, 190, 173,0.8);
`;



export default Features;
