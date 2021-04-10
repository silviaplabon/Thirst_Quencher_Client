import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Drinks from './components/Drinks/Drinks';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import HomeDrinkDetails from './components/HomeDrinkDetails/HomeDrinkDetails';
import HomeIngredientDetails from './components/HomeIngredientDetails/HomeIngredientDetails';
import AddProducts from './components/AddProducts/AddProducts';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/:name">
            <Drinks></Drinks>
          </Route>
          <Route exact path="/auth/login">
            <Login></Login>
          </Route>
          <Route exact path="/auth/admin">
            <Admin />
          </Route>
          <Route exact path="/drinksByName/:name">
            <HomeDrinkDetails />
          </Route>
          <Route exact path="/ingredientsByName/:name">
            <HomeIngredientDetails />
          </Route>
          <Route exact path="/drinksById/:id">
            <HomeDrinkDetails />
          </Route>
          {/* <PrivateRoute exact path="/drinks/:id">
            <DrinkDetails></DrinkDetails>
          </PrivateRoute>  */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
