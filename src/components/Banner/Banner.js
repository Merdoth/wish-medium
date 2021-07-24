import React from "react";
import { Button, Container, Grid } from "@material-ui/core";

import "./Banner.scss";

function Banner() {
	return (
		<div className="banner">
			<Container>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item lg={6}>
						<h1>Where good ideas find you</h1>

						<p>
							Read and share new perspectives on just about any topic.
							Everyone’s welcome. <a href="!#">Learn more.</a>
						</p>

						<Button>Get Started</Button>
					</Grid>

					<Grid item container justifyContent="center" lg={6}>
						<img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo"/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Banner;
