import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeComponent from "./HomeComponent/HomeComponent";
import Leaderboard from "./Leaderboard/Leaderboard";
import NavBar from "./NavBar/NavBar";
import GlobalStyles from "./GlobalStyles";

const firebaseConfig = {
  apiKey: "AIzaSyCbs14hjF3wgeetZH73hLxCx78M_eo2KLQ",
  authDomain: "imagetagging-c1988.firebaseapp.com",
  projectId: "imagetagging-c1988",
  storageBucket: "imagetagging-c1988.appspot.com",
  messagingSenderId: "908570394601",
  appId: "1:908570394601:web:130fd002fde2e86fbc5578",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [locations, setLocations] = useState({});
  const db = firebase.firestore();
  const docRef = db.collection("imgs").doc("img-1");

  useEffect(() => {
    if (locations.length === 2) return;
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          // setLocations(doc.data());
          const locate = doc.data();
          setLocations(locate);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  console.log(locations);
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomeComponent locations={locations} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    </>
  );
};

export default App;
