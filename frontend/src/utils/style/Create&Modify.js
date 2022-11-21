import styled from "styled-components";
// import img from "../../assets/create.jpg";
// import img2 from "../../assets/modify.jpg";
import colors from "./colors";

// Only for Create page
// export const MainImageCreate = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100vh;
//   width: 100%;
// `;
// Only for Modify page
// export const MainImageModify = styled.div`
//   background: url(${img2}) no-repeat center/cover;
//   height: 100vh;
//   width: 100%;
// `;
// Works for both
export const FormStyle = styled.form`
  position: absolute;
  left: 30%;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  @media (max-width: 820px) {
    left: 20%;
    top: 20%;
  }
  @media (max-width: 414px) {
    left: 20%;
  }
`;
export const InputStyle = styled.input`
  margin: 20px;
  width: 20%;
  font-size: 25px;
  position: relative;
  left: 33%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
  @media (max-width: 820px) {
    width: 40%;
    left: 25%;
  }
  @media (max-width: 414px) {
    width: 60%;
    left: 15%;
    font-size: 15px;
  }
`;
export const Textarea = styled.textarea`
  font-size: 25px;
  width: 95%;
  resize: none;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  &::placeholder {
    color: black;
    opacity: 0.5;
  }
  @media (max-width: 863px) {
    position: relative;
    left: 10%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 414px) {
    width: 100%;
    left: 20%;
    font-size: 15px;
  }
`;

export const ValidateStyle = styled.button`
  margin-top: 40px;
  width: 10%;
  height: 12%;
  position: relative;
  left: 43%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 820px) {
    width: 20%;
    left: 45%;
    height: 5%;
  }
  @media (max-width: 414px) {
    width: 20%;
    left: 50%;
  }
`;

export const LabelStyle = styled.label`
  margin: 20px;
  width: 20%;
  font-size: 25px;
  position: relative;
  left: 33%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  border-radius: 10px 10px 10px 10px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 1rem;
  color: #607274;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 820px) {
    width: 40%;
    left: 25%;
  }
  @media (max-width: 414px) {
    width: 60%;
    left: 15%;
    font-size: 15px;
  }
`;

export const InputNone = styled.input`
  display: none;
`;
