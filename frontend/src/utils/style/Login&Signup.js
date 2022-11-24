import styled from "styled-components";
import illustration from "../../assets/illustration-home.png";
import illustrationSign from "../../assets/illustration-signup.png";
import logo from "../../assets/groupomania.png";
import logo1 from "../../assets/logo-groupomania.png"
import logo2 from "../../assets/logo-groupomania-mini.png"
import colors from "./colors";

// Specific styles for login
export const MainImageLogin = styled.div`
  background: url(${illustration}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  display: flex;
`;
export const RedirectSignup = styled.p`
  
  text-align: center;
  padding-top: 50px;
  font-size: 20px;
  color: black;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding-top: 20px;
    font-size: 12px;
  }
`;
// Specific styles for signup
export const MainImageSignup = styled.div`
  background: url(${illustrationSign}) no-repeat center/cover;
  display: flex;
  height: 100vh;
  width: 100%;
`;
// Generic styles for both

export const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
position: absolute;
    @media (max-width: 768px) {
    
  }
  @media (max-width: 375px) {
    
  }
`;
export const Groupomania = styled.div`
background-image: url(${logo}) ;
  
  padding-top: 100px;
  width: 100%;
  height: 200px;
  @media (max-width: 768px) {
    background-image: url(${logo1}) ;
    
  }
  @media (max-width: 375px) {
    background-image: url(${logo2});
    
  }
`;
export const MainTitle = styled.h2`
  color: ${colors.thirdly};
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px;
  position: relative;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 30px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
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
  color: ${colors.thirdly};
  &:hover {
    border-bottom: 4px solid;
    border-bottom-color: #eee;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    
  }
  
  @media (max-width: 375px) {
    
    font-size: 18px;
  }
`;
export const ValidateStyle = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  color: ${colors.thirdly};
  font-size: 35px;
  padding: 2rem;
  cursor: pointer;
  border-bottom-color: #eee;
  &:hover {
    color: ${colors.primary};
    border-bottom: 3px solid;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 25px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 15px;
  }
`;
export const LoginCard = styled.div`
  position: absolute;
  margin-top: 100px;
  width: 600px;
  height: 600px;
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  background-color: white;
  @media (max-width: 768px) {
    width: 400px;
    
  }
  @media (max-width: 375px) {
       
  }
 
`;
