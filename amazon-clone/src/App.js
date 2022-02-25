import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //data link layer connected with firebase
    // will only run once when the app component loads...
    //its like a if statement in react
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER", 
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER", //remove the user from data layer
          user: null,
        });
      }
    });
  }, [] )
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Header /> */}
          <Route path = "/" element={ [<Header/>,<Home />]} />
          <Route path = "/payment" element={[<Header/>,<Payment/>]} />
          <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
          <Route path = "/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
