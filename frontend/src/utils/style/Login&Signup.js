import styled from "styled-components";
import illustration from "../../assets/illustration-home.png";
import illustrationSign from "../../assets/illustration-signup.png";
import logo from "../../assets/groupomania.png";
import colors from "./colors";

// Specific styles for login
export const MainImageLogin = styled.div`
  background: url(${illustration}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const RedirectSignup = styled.p`
  position: absolute;
  bottom: 0%;
  left: 1%;
  font-size: 30px;
  color: black;
  @media (max-width: 820px) {
    bottom: 2%;
  }
  @media (max-width: 630px) {
    bottom: 0%;
    font-size: 25px;
  }
  @media (max-width: 414px) {
    bottom: 0%;
    left: 5%;
    width: 90%;
  }
  @media (max-width: 375px) {
    left: 5%;
    bottom: 0%;
    font-size: 23px;
  }
`;
// Specific styles for signup
export const MainImageSignup = styled.div`
  background: url(${illustrationSign}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
// Generic styles for both

export const SuperContainer = styled.div`
  position: absolute;
  left: 55%;
  top: 0%;
  transform: translateX(-50%);
  width: 50%;
  @media (max-width: 820px) {
    width: 90%;
    left: 55%;
  }
`;
export const Groupomania = styled.h1`
  font-size: 65px;
  color: black;
  position: relative;
  left: 10%;
  padding-top: 100px;
  width: 100%;
  @media (max-width: 820px) {
    left: 15%;
    width: 80%;
  }
  @media (max-width: 554px) {
    left: -5%;
  }
  @media (max-width: 440px) {
    font-size: 55px;
    left: 0%;
  }
  @media (max-width: 393px) {
    font-size: 45px;
    left: 0%;
  }
  @media (max-width: 414px) {
    left: 0%;
    padding-top: 50px;
  }
  @media (max-width: 375px) {
    left: -7%;
  }
`;
export const MainTitle = styled.h2`
  color: black;
  text-align: center;
  font-size: 35px;
  position: relative;
  @media (max-width: 375px) {
    left: -10%;
  }
`;
export const InsistOnBlue = styled.span`
  color: black;
`;
export const InputStyle = styled.input`
  width: 100%;
  height: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  padding: 2rem;
  border-bottom-color: #eee;
  font-size: 30px;
  color: black;
  &:hover {
    border-bottom: 4px solid;
    border-bottom-color: #eee;
  }
  &::placeholder {
    color: black};
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 820px) {
    font-size: 25px;
    width: 70%;
  }
  @media (max-width: 414px) {
    font-size: 27px;
  }
  @media (max-width: 397px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    width: 70%;
    font-size: 23px;
  }
`;
export const ValidateStyle = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  color: #eee;
  font-size: 35px;
  padding: 2rem;
  cursor: pointer;
  border-bottom-color: #eee;
  &:hover {
    border-bottom-color: #eee;
    border-bottom: 3px solid;
  }
  @media (max-width: 820px) {
    width: 80%;
  }
  @media (max-width: 414px) {
    width: 60%;
  }
  @media (max-width: 397px) {
    font-size: 25px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 23px;
  }
`;
export const LoginCard = styled.div`
  position: absolute;
  right: 30%;
  top: 100%;
  @media (max-width: 820px) {
    left: 17%;
    top: 150%;
  }
  @media (max-width: 525px) {
    top: 100%;
  }
  @media (max-width: 414px) {
    right: 20%;
    top: 100%;
  }
`;
