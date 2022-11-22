import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from 'react-icons/ai';
import React, { useState, useEffect } from "react";
import {  FormStyle, InputStyle, Textarea, ValidateStyle, LabelStyle, InputNone } from "../utils/style/Create&Modify"
import { NavSeePostsModify, NavTitle, NavShape, NavElementLogoutModify, NavElementDeleteModify } from "../utils/style/Navbars"
import { TbWorld } from "react-icons/tb"

const Modify = () => {
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
  const params = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts/${params.id}`).then((res) => {
      setPost(res.data);
      
    });
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.imageUrl[0])
    formData.append("name", data.name)
    formData.append("description", data.description)
    axios
      .put(`http://localhost:4000/api/posts/${params.id}`, formData)
      .then((res) => {
        navigate("/my-posts");
      })
      .catch((err) => {
        console.error(err.response.data);
        alert(err.message + " - Erreur lors de la modification de la note");
      });
  };

  return (
    <>
      
        <NavShape>
          <NavTitle>Modifier</NavTitle>
          <Link style={linkStyle} to="/my-posts"><NavSeePostsModify>Voir les publications</NavSeePostsModify></Link>
          <NavElementLogoutModify onClick={logout}>Se déconnecter</NavElementLogoutModify>
          <NavElementDeleteModify onClick={deleteAccount}>Supprimer son compte</NavElementDeleteModify>
        </NavShape>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputStyle
            type="text"
            name="titre"
            value={post.name}
            {...register("name", { required: true })}
          />
          <Textarea
            value={post.description}
            rows="8"
            {...register("description", { required: true })}
          />
          <LabelStyle htmlFor="imageUrl">Image</LabelStyle>
          <InputNone id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: true })} />
          <ValidateStyle type="submit" placeholder='valider'>
            <AiOutlineCheck />
          </ValidateStyle>
        </FormStyle>
      
    </>
  );
};

export default Modify;