import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import PostBody from "./PostBody";
import db from "./firebase";

function App() {
  const [posts, setPosts] = useState();

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>  {
			setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
				data: doc.data()
			})));
		});
	}, [])

	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/">
						<NavBar />
						<Banner />
						<Form />

						<div className="app__posts">
							<Container>
								{posts?.map(({ id, data}) => (
								  <Posts key={id} id={id} data={data}/>
								))}
							</Container>
						</div>
					</Route>
					<Route path="/post/:id">
						<PostBody  />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
