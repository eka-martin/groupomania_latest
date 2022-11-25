import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import { MainImageLogin, MainTitle, SuperContainer, LoginCard, Groupomania, InputStyle, ValidateStyle, RedirectSignup } from "../utils/style/Login&Signup"
import { Link } from 'react-router-dom';

const Home = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#fd230d",
  };
  //useNavigation est un hook qui donne accès à l'objet de navigation. 
  //C'est utile lorsque ons ne peut pas 
  //passer directement le prop de navigation dans le composant
  const navigate = useNavigate();
  //Les objets FormData sont utilisés pour capturer le formulaire HTML 
  //et le soumettre en utilisant fetch ou une autre méthode réseau
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:4000/api/auth/login', data)
      .then(res => {
        // On enregistre le token dans le localStorage
        localStorage.token = res.data.token;
        // Ajout du userId
        localStorage.userId = res.data.userId;
        // On "enregistre" le token dans la conf. de Axios
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        // On "navigate" (redirige) vers '/my-posts'
        navigate('/my-posts');
      }).catch(err => {
        alert(err.message + ' - Paire email / mot de passe incorrecte');
      })
  }
  return (
    <>
      <MainImageLogin></MainImageLogin>
      <SuperContainer>
        <LoginCard>
          <Groupomania></Groupomania>
          <MainTitle>Se connecter</MainTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputStyle
              type="text"
              name="email"
              placeholder="email"
              rules={{ required: true }} {...register('email', { required: true })}>
            </InputStyle>
            <InputStyle
              type="password"
              name="password"
              placeholder="mot de passe"
              rules={{ required: true }} {...register('password', { required: true })}>
            </InputStyle>
            <ValidateStyle
              type="submit"
              name="valider"
              value="Valider">
            </ValidateStyle>
          </form>
          <RedirectSignup>Pas encore inscrit ? Créez un compte
            <Link
              style={linkStyle}
              to="/signup"> ici
            </Link>
          </RedirectSignup>
        </LoginCard>
      </SuperContainer>
      

    </>
  )
}

export default Home