import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from 'react-icons/ai'
import React, { useRef } from 'react'
import {  FormStyle, InputStyle, Textarea, ValidateStyle, LabelStyle, InputNone } from "../utils/style/Create&Modify"
import { NavSeePosts, NavTitle, NavShape, NavElementLogoutCreate, NavElementDeleteCreate } from "../utils/style/Navbars"


const Edit = () => {

  const deleteAccount = () => {
    axios.delete(`http://localhost:4000/api/auth/delete`)
      .then(res => {
        localStorage.clear()
        navigate('/')
      }).catch(err => {
        alert(err.message + ' - Erreur lors de la suppression du compte')
      });
  }

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const fileInput = useRef();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.imageUrl[0])
    formData.append("name", data.name)
    formData.append("description", data.description)
    axios.post('http://localhost:4000/api/posts', formData)
      .then(res => {
        navigate('/my-posts')
      }).catch(err => {
        alert(err.message + ' - Erreur lors de la création de la note')
      });
  }

  return (
    <>
      
        <NavShape>
          <NavTitle>Créer</NavTitle>
          <Link style={linkStyle} to="/my-posts"><NavSeePosts>Voir les publications</NavSeePosts></Link>
          <NavElementLogoutCreate onClick={logout}>Se déconnecter</NavElementLogoutCreate>
          <NavElementDeleteCreate onClick={deleteAccount}>Supprimer son compte</NavElementDeleteCreate>
        </NavShape>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputStyle type="text" name="name" placeholder='Titre' {...register('name', { required: true })} />
          <Textarea placeholder='Description' rows="8" {...register('description', { required: true })} />
          <LabelStyle for="imageUrl">Image</LabelStyle>
          <InputNone id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: true })} />
          <ValidateStyle type="submit" placeholder='valider'>
            <AiOutlineCheck />
          </ValidateStyle>
        </FormStyle>
      
    </>
  )
}

export default Edit;
