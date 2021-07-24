import React, { useEffect, useState } from "react";
import { Container, Button } from "@material-ui/core";

import "./NavBar.scss";

function NavBar() {
	const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

	return (
		<div className={`navBar ${active && "active"}`}>
			<Container>
				<div className="navBar__container">
					<img
						src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
						alt="Medium"
					/>

          <div className="navBar__lists">
            <ul>
              <li>Our Story</li>
              <li>Membership</li>
              <li>Write</li>
              <li>Sign In</li>
              <li><Button>Get Started</Button></li>
            </ul>
          </div>
				</div>
			</Container>
		</div>
	);
}

export default NavBar;
