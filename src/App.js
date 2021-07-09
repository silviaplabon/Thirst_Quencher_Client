import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HomeDrink from  './components/Home/HomeDrink/HomeDrink'
import { createContext, useState } from 'react';

import HomeDrinkDetails from './components/Home/HomeDrinkDetails/HomeDrinkDetails'
import HomeIngredientDetails from './components/Home/HomeIngredientDetails/HomeIngredientDetails';
import Filter from './components/FilterResult/Filter/Filter'
import Alcoholic from './components/FilterResult/Alcoholic/Alcoholic'
import NonAlcoholic from './components/FilterResult/NonAlcoholic/NonAlcoholic';
import OptionalAlcoholic from './components/FilterResult/OptionalAlcoholic/OptionalAlcoholic';
import GlassData from './components/FilterResult/GlassData/GlassData';
import CategoryData from './components/FilterResult/CategoryData/CategoryData';
import Glass from './components/FilterResult/Glass/Glass';
import Category from './components/FilterResult/Category/Category';

import EditProducts from './components/Admin/EditProducts/EditProducts';
import Ingredient from './components/FilterResult/Ingredient/Ingredient'
import IngredientData from './components/FilterResult/IngredientData/IngredientData';
import OrderList from './components/Users/OrderList/OrderList'
import ShipmentAndPayment from './components/Users/ShipmentAndPayment/ShipmentAndPayment';
import ShipmentDetails from './components/Users/ShipmentDetails/ShipmentDetails';
import AddTestimonial from './components/Users/AddTestimonial/AddTestimonial';
import OrderLength from './components/Shared/OrderLength/OrderLength';

// login Import 
import IsloggedIn from './components/Shared/Login/IsLoggedIn/IsloggedIn'
import Login from './components/Shared/Login/Login/Login';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';

import Drinks from './components/Home/Drinks/Drinks';
import AllDrinksShowList from './components/Admin/AllDrinksShowList/AllDrinksShowList'
import Admin from './components/Admin/Admin/Admin'
import AddProducts from './components/Admin/AddProducts/AddProducts'
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';




export const UserContext = createContext();
export const CartContext = createContext();
export const DeleteContext = createContext();
export const ValueContext = createContext();
function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  const [cart,setCart]=useState([]);
  const [deleteUpdate,setDeleteUpdate]=useState(false);
  const [value,setValue]=useState(false);
  const token=localStorage.getItem('token');
  

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <CartContext.Provider value={[cart,setCart]}>
      <DeleteContext.Provider value={[deleteUpdate,setDeleteUpdate]}>
      <ValueContext.Provider value={[value,setValue]}>
      <Router>
        {
          token &&  <IsloggedIn></IsloggedIn>
        }
        {
          (token && loggedInUser.email||!cart)&&<OrderLength></OrderLength>
        }
         {
          (token && loggedInUser.email&&cart)&&<OrderLength></OrderLength>
        }
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/:name">
            <Drinks></Drinks>
          </PrivateRoute>
          
          <PrivateRoute exact path="/user/ShipmentDetail">
          <ShipmentDetails></ShipmentDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/user/AddTestimonials">
        <AddTestimonial></AddTestimonial>
          </PrivateRoute>
          <PrivateRoute exact path="/user/ShipmentAndPayment">
            <ShipmentAndPayment></ShipmentAndPayment>
          </PrivateRoute>
          <Route exact path="/auth/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/auth/setup/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute exact path="/drinksByName/:name">
            <HomeDrinkDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/user/drinksById/:id">
            <HomeDrinkDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter">
            <Filter></Filter>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/alcoholic">
            <Alcoholic></Alcoholic>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/nonalcoholic">
            <NonAlcoholic></NonAlcoholic>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/optionalalcoholic">
            <OptionalAlcoholic></OptionalAlcoholic>
          </PrivateRoute>
          <PrivateRoute exact path="/auth/filter/ingredient">
            <Ingredient></Ingredient>
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
          <PrivateRoute exact path="/filter/ingredient/:name">
            <IngredientData></IngredientData>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/:drinkname/:id">
            <EditProducts></EditProducts>
          </PrivateRoute>
          <PrivateRoute exact path="/ingredientsByName/:name">
            <HomeIngredientDetails />
          </PrivateRoute>

          <PrivateRoute exact path="/user/OrderListShow">
            <OrderList></OrderList>
          </PrivateRoute>
       
          <PrivateRoute exact path="/auth/AllDrinkDetails">
            <AllDrinksShowList></AllDrinksShowList>
          </PrivateRoute> 
        </Switch>
      </Router>
      </ValueContext.Provider>
      </DeleteContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
