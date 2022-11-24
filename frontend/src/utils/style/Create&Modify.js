import styled from "styled-components";
import colors from "./colors";

// Works for both
export const FormStyle = styled.form`
  position: absolute;
  left: 23%;
  top: 5%;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  @media (max-width: 768px) {
    left: 40%;
    top: 20%;
  }
  @media (max-width: 375px) {
    left: 40%;
    top: 30%;
  }
`;
export const InputStyle = styled.input`
  
  width: 20%;
  font-size: 20px;
  position: relative;
  background-color:  ${colors.secondary};
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;
export const Textarea = styled.textarea`
  font-size: 20px;
  width: 95%;
  resize: none;
  background-color:  ${colors.secondary};
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    position: relative;
    
  }
 
  @media (max-width: 375px) {
    
    font-size: 15px;
  }
`;

export const ValidateStyle = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 80px;
  padding: 1rem;
  position: relative;
  font-size: 20px;
  background-color: ${colors.secondary};
  color: ${colors.thirdly};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    
  }
  @media (max-width: 375px) {
    
  }
`;

export const LabelStyle = styled.label`
  
  width: 20%;
  font-size: 20px;
  position: relative;
  background-color: ${colors.secondary};
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  color: ${colors.thirdly};
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    
  }
  @media (max-width: 375px) {
    
    font-size: 15px;
  }
`;

export const InputNone = styled.input`
  display: none;
`;
