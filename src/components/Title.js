import React from 'react';
import styled, { keyframes } from 'styled-components';


const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 6%;
  right: 6%;
  max-width: 550px;
  zIndex: 999;
`
const IconInLeft = styled.a`
  animation-name: ${props => props.name};
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.duration};
  animation-timing-function: ${props => props.timingFunction};
  animation-iteration-count: ${props => props.iterationCount};
  animation-direction: ${props => props.direction};
  animation-fill-mode: ${props => props.fillMode};
  animation-play-state:  ${props => props.playState};
  display: ${props => props.display};
  text-decoration: ${props => props.textDecoration};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  margin-top: ${props => props.marginTop};
  font-family: 'Cabin', sans-serif;
`
const MainTitle = styled.div`
  animation-duration: ${props => props.duration};
  animation-timing-function: ${props => props.timingFunction};
  animation-delay: ${props => props.delay};
  animation-iteration-count: ${props => props.iterationCount};
  animation-direction: ${props => props.direction};
  animation-fill-mode: ${props => props.fillMode};
  animation-play-state:  ${props => props.playState};
  display: ${props => props.display};
  font-family: 'Cabin', sans-serif;
  font-size: 32px;
  color: white;
`;

IconInLeft.defaultProps = {
  delay: '3s',
  duration: '1s',
  timingFunction: 'ease',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'inline-block',
  target: '_blank',
  cursor: 'pointer',
  fontSize: '32px',
  color: 'white',
  marginTop: '20px',
  textDecoration: 'none',
}

MainTitle.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
}

const bounceInDownAnimation = keyframes`
  from, 60%, 75%, 90%, to {
     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
   }
   0% {
     opacity: 0;
     transform: translate3d(0, -3000px, 0);
   }
   60% {
     opacity: 1;
     transform: translate3d(0, 25px, 0);
   }
   75% {
     transform: translate3d(0, -10px, 0);
   }
   90% {
     transform: translate3d(0, 5px, 0);
   }
   to {
     transform: none;
   }
  `;

const bounceInUpAnimation = keyframes`
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;


const MainTitleBounceIn = styled(MainTitle)`
  animation-name: ${bounceInDownAnimation};
  animation-delay: 1s;
`;

const SubTitleBounceIn = styled(MainTitle)`
  animation-name: ${bounceInDownAnimation};
  animation-delay: 1.5s;
  font-size: 54px;
  padding-top: 10px;
  padding-bottom: 10px;
`
const ContentBounceIn = styled(MainTitle)`
  animation-name: ${bounceInUpAnimation};
  animation-delay: 2.5s;
  font-size: 20px;
`
const EmailInUp = styled(IconInLeft)`
  animation-name: ${bounceInUpAnimation};
  margin-left: 10px;
`
const Heading = ({ heading, subheading, content }) =>
  <div>
    <MainTitleBounceIn>{ heading }</MainTitleBounceIn>
    <SubTitleBounceIn>{ subheading }</SubTitleBounceIn>
    <ContentBounceIn>{ content }</ContentBounceIn>
  </div>
;

const Email = ({ text, className, href }) =>
  <EmailInUp href={ href } className={ className }>{ text }</EmailInUp>
;

const Title = () => (
  <Wrapper>
    <Heading
    heading="Welcome to our new domain | we are"
    subheading="Continental Real Estate Partners"
    content="Work is in progress in the backend and we glad you are checking us out.
    You can contact us, or just say Hi using the email icon below"/>
    <Email
    href="mailto:mudidi.jimmy@gmail.com?Subject=Hello%20again"
    className="icon-mail2" />
  </Wrapper>
);

export default Title;
