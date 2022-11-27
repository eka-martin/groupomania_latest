import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PostCard, PostName, PostDescription, PostImage, Buttons, ModifyButton, DeleteButton, LikeAndDislike, Like, Dislike, ImageContainer } from "../utils/style/SeeOne"
import { NavElement, NavTitleSee, NavShape, NavElementLogout, NavElementDelete, Groupomania } from "../utils/style/Navbars"
import Likes from "./LikesDislikes"

const SeeOne = () => {
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
  const [post, setPost] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)


  
  useEffect(() => {
    axios
    .get(`http://localhost:4000/api/posts/${params.id}`)
    .then((res) => {
      setPost(res.data);
    });
    axios
    .get(`http://localhost:4000/api/auth/${localStorage.userId}`)
    .then((res) => {
      setIsAdmin(res.data.admin);
    })
  }, []);

  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:4000/api/posts/${postId}`)
      .then((res) => {
        navigate('/my-posts')
      })
      .catch((err) => {
        alert(err.message + " - Erreur lors de la suppression de la note");
      });
  }

  return (
    <>
      <NavShape>
      <Groupomania></Groupomania>
        <NavTitleSee>Post</NavTitleSee>
        <Link
          style={linkStyle}
          to="/my-posts"><NavElement>Voir les publications
          </NavElement>
        </Link>
        <NavElementLogout
          onClick={logout}>Se déconnecter
        </NavElementLogout>
        <NavElementDelete
          onClick={deleteAccount}>Supprimer son compte
        </NavElementDelete>
      </NavShape>
      <PostCard>
        <PostName 
          id={post._id}>{post.name}
        </PostName>
        <PostDescription
          id={post._id}>{post.description}
        </PostDescription>
        <ImageContainer>
          <PostImage
            src={post.imageUrl}
            id={post._id}
            alt="post">
          </PostImage>
        </ImageContainer>
      </PostCard>
      {isAdmin || localStorage.userId === post.userId
        ? (<Buttons>
          <ModifyButton>
            <Link
              style={linkStyle}
              to={`/modify/${post._id}`}>Modifier
            </Link>
          </ModifyButton>
          <DeleteButton
            onClick={() => deletePost(post._id)}>Supprimer
          </DeleteButton>
        </Buttons>)
        : null
      }
      <Likes post={post} />

    </>
  );
};

export default SeeOne;