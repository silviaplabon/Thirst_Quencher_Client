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
import Filter from  './components/Filter/Filter'
import Alcoholic from './components/Alcoholic/Alcoholic';
import GlassData from './components/GlassData/GlassData';
import CategoryData from './components/CategoryData/CategoryData';
import Glass from './components/Glass/Glass';
import Category from './components/Category/Category';
import NonAlcoholic from './components/NonAlcoholic/NonAlcoholic';
import EditProducts from './components/EditProducts/EditProducts';
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
          <PrivateRoute exact path="/:name">
            <Drinks></Drinks>
          </PrivateRoute>
          <Route exact path="/auth/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/auth/setup/admin">
            <Admin/>
          </PrivateRoute>
          <Route exact path="/drinksByName/:name">
            <HomeDrinkDetails />
          </Route>
          <PrivateRoute exact path="/auth/filter">
            <Filter></Filter>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/alcoholic">
            <Alcoholic></Alcoholic>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/nonalcoholic">
            <NonAlcoholic></NonAlcoholic>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/glass">
            <Glass></Glass>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/category">
             <Category></Category>
          </PrivateRoute>
          <PrivateRoute exact path="/filter/glass/:name">
            <GlassData></GlassData>
          </PrivateRoute>
          <PrivateRoute exact path="/filter/category/:name">
            <CategoryData></CategoryData>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/:drinkname/:id">
            <EditProducts></EditProducts>
          </PrivateRoute>
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
