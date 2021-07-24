import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

import "./Posts.scss";

function PostNav() {
  return (
    <div className="postNav">
      <Container>
        <div className="postNav__container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://miro.medium.com/max/211/1*3JpFy_cqGKInkYACk6EBEg.png"
              alt="logo"
            />
          </Link>

          <div>
            <Button style={{ marginRight: "10px" }}>Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PostNav;
