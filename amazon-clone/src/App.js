import "./App.css";
import React,{useEffect}from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


//promise loads stripe and stores in it 

const promise = loadStripe('pk_test_51IOx4TLXDq5uaLddu5xNgK8M0G5vPlhLjTqxEYS8zj6zlPK75ytpnCI0ETkQ85wHWEU0wE0ZcyNlPO0qndKMGqjq00l4kj7Vp5');

function App() {

  const [{}, dispatch]= useStateValue();

  useEffect(() => {
   
   //will only change when the app component loads again

   auth.onAuthStateChanged(authUser => {
     console.log("the user is >>", authUser);

     console.log('the user is ', authUser);
     if(authUser){
       // the user is logged or was logged in 
       dispatch({
         type: 'SET_USER',
         user: authUser
       })
     }

     else{

       //the user is logged out
        dispatch({
         type: 'SET_USER',
         user: null
                })
     }
   })
    }
   , [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <h2>the payment page </h2>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
