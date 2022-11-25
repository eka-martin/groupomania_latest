import React, { useState, useEffect } from 'react'
import { BsHandThumbsUp } from "react-icons/bs"
import { LikeAndDislike, Like } from "../utils/style/SeeOne"
import axios from 'axios'
import { useParams } from "react-router-dom";

const LikesDislikes = ({ post }) => {
  //On souhaite récupérer les paramètres de route 
  //à partir du composant fonctionnel rendu par la route correspondante.
  const params = useParams();
  //Le hook useState est utilisé pour stocker des variables 
  //qui font partie de l'état d'une application et qui changeront au fur et à mesure 
  //que l'utilisateur interagit avec un site Web.
  //le composant LikesDislikes peut être re-render autant de fois que nécessaire,
  //mais la valeur du like sera préservée.
  const [like, setLike] = useState(0)
  //Le premier élément est la valeur actuelle, 
  //et le deuxième est une fonction qui permet de la modifier
  const [likeActive, setLikeActive] = useState(false)


  //Le hook useEffect permet aux composants de réagir aux événements du cycle 
  //de vie tels que le montage sur le DOM, le re-rendu et le démontage
  useEffect(() => {
    //nombre de likes
    setLike(post.likes)
    //info sur les users qui ont likés le post
    setLikeActive(
      post && post.usersLiked && post.usersLiked.includes(localStorage.userId)
    )
  }, [post])


  function LikeBack() {
    const numberLikes = { like: likeActive ? 0 : 1 };
    axios.post(`http://localhost:4000/api/posts/${params.id}/like`, numberLikes)
      .then((res) => {
        setLikeActive(res.data.likeActive)
      })
    likeActive ? setLike(like - 1) : setLike(like + 1)


      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <>
      <LikeAndDislike>
        <Like
          onClick={LikeBack}>
          <BsHandThumbsUp />{like}
        </Like>
      </LikeAndDislike>
    </>
  )
}

export default LikesDislikes