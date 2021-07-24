import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import { CircularProgress } from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import "./App.scss";
import db from './firebase';
import PostNav from './components/Posts/PostNav';

function PostBody() {
  const [dataPost, setDataPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  
  useEffect(() => {
    db.collection("posts")
    .doc(id)
    .get()
    .then((doc) => {
      setDataPost(doc.data());
      setLoading(false);
    })
  }, [id])

  return (
    <div className="postBody">
      <PostNav />
      { loading ? (
        <CircularProgress
          style={{ margin: "100px 0", color: "#9AC4F8" }}
          size={100}
        />
      ) : (
      <div className="postBody__container postContainer">
        <h1>{dataPost?.title}</h1>

        <div
            className="postBody__image"
            style={{ backgroundImage: `url(${dataPost?.image})` }}
          />

        <p>{dataPost?.paragraph}</p>

        <div className="postBody__icons">
          <div className="postBody__wrapper">
            <ThumbsUpDownIcon />
            <h3 style={{ marginRight: "20px" }}>35</h3>
            <ChatBubbleOutlineIcon />
            <h3>53</h3>
          </div>
          <div className="postBody__wrapper">
            <SaveAltIcon />
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default PostBody;
