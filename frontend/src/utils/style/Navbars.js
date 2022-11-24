import styled from "styled-components";
import colors from "../style/colors";

export const NavShape = styled.nav`
  position: absolute;
  left: 0%;
  height: 100%;
  background-color:  ${colors.secondary};
  @media (max-width: 768px) {
    height: 18vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  
  @media (max-width: 375px) {
    height: 15vh;
    width: 100%;
  }
`;

//Main titles for navbar all pages

export const NavTitle = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  font-size: 35px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 28px;
    left: 38%;
    top: -15%;
  }
 
  @media (max-width: 375px) {
    font-size: 18px;
    font-weight: 200;
    top: -20%;
    left: 35%;
  }
`;
export const NavTitleCreate = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  font-size: 35px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 28px;
    left: 38%;
    margin-top: 3rem;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    top: -80%;
    left: 35%;
    font-weight: 200;
  }
`;
export const NavTitleSee = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  font-size: 35px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 28px;
    left: 42%;
    margin-top: 0rem;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    top: 0%;
    left: 42%;
    font-weight: 200;
  }
`;
//////////////////////////////////

//Element of creation for all pages

export const NavElement = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
    top: 5%;
    left: -30%;
  }
  
  @media (max-width: 375px) {
    font-size: 15px;
    top: -30%;
    left: -30%;
    margin: 5px;
  }
`;
export const NavCreatePosts = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 25px;
    top: -10%;
    left: -85%;
  }
  @media (max-width: 584px) {
    left: -150%;
  }
  @media (max-width: 544px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    left: -200%;
  }
  
  @media (max-width: 375px) {
    font-size: 15px;
    top: -15%;
    left: -90%;
    margin: 5px;
  }
`;
export const NavSeePosts = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 13%;
    left: -30%;
  }
  @media (max-width: 768px) {
    left: -30%;
  }
  @media (max-width: 512px) {
    top: 0%;
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: -30%;
    margin: 5px;
  }
`;
export const NavSeePostsModify = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 10%;
    left: -58%;
  }
  @media (max-width: 768px) {
    left: -60%;
  }
  @media (max-width: 574px) {
    top: 0%;
    font-size: 20px;
    left: -80%;
  }
  @media (max-width: 462px) {
    left: -110%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: -50%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    top: -25%;
    left: -70%;
  }
`;
//////////////////////////////////

//Logout for all pages

export const NavElementLogout = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 5%;
    left: 0%;
  }
  @media (max-width: 768px) {
    left: 0%;
  }
  @media (max-width: 756px) {
    left: -5%;
  }
  @media (max-width: 488px) {
    font-size: 22px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: -4%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
export const NavElementLogoutPosts = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: -10%;
    left: -11%;
  }
  @media (max-width: 768px) {
    left: -12%;
  }
  @media (max-width: 584px) {
    left: -20%;
  }
  @media (max-width: 544px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    left: -30%;
  }
  @media (max-width: 444px) {
    left: -35%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -15%;
    left: -12%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: -10%;
    top: -20%;
  }
`;
export const NavElementLogoutCreate = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 13%;
    left: -2%;
  }
  @media (max-width: 768px) {
    left: -5%;
  }
  @media (max-width: 512px) {
    top: 0%;
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: -5%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
export const NavElementLogoutModify = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 10%;
    left: -8%;
  }
  @media (max-width: 768px) {
    left: -10%;
  }
  @media (max-width: 574px) {
    top: 0%;
    font-size: 20px;
  }
  @media (max-width: 462px) {
    left: -20%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -15%;
    left: -5%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: -10%;
    top: -25%;
  }
`;
//////////////////////

//Delete account for all pages
export const NavElementDelete = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 5%;
    left: 9%;
  }
  @media (max-width: 820px) {
    left: 2%;
  }
  @media (max-width: 756px) {
    left: -3%;
  }
  @media (max-width: 488px) {
    font-size: 22px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: 0%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
export const NavElementDeletePosts = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: -10%;
    left: -5%;
  }
  @media (max-width: 768px) {
    left: -3%;
  }
  @media (max-width: 584px) {
    left: -10%;
  }
  @media (max-width: 544px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    left: -20%;
  }
  @media (max-width: 444px) {
    left: -30%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -15%;
    left: -3%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: -5%;
    top: -40%;
  }
`;
export const NavElementDeleteCreate = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 13%;
    left: 3%;
  }
  @media (max-width: 768px) {
    left: -3%;
  }
  @media (max-width: 512px) {
    top: 0%;
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -20%;
    left: -5%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
export const NavElementDeleteModify = styled.li`
  position: relative;
  text-align: center;
  text-decoration: none;
  list-style: none;
  padding-top: 70px;
  font-size: 25px;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 820px) {
    font-size: 25px;
    top: 10%;
    left: 0%;
  }
  @media (max-width: 768px) {
    left: 0%;
  }
  @media (max-width: 574px) {
    top: 0%;
    font-size: 20px;
  }
  @media (max-width: 462px) {
    left: -15%;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    top: -15%;
    left: -5%;
    margin: 5px;
  }
  @media (max-width: 375px) {
    left: -7%;
    top: -25%;
  }
`;
//////////////////////////////
