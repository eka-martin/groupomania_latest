import React, { useState, useEffect } from 'react'
import { BsHandThumbsUp } from "react-icons/bs"
import { LikeAndDislike, Like } from "../utils/style/SeeOne"
import axios from 'axios'
import { useParams } from "react-router-dom";

const LikesDislikes = ({ post }) => {
  const params = useParams();
  const [like, setLike] = useState(0)
  const [likeActive, setLikeActive] = useState(false)

  useEffect(() => {
    setLike(post.likes)
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