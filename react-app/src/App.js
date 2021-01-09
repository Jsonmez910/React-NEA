import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import Recipes from './Components/pages/Recipes'
import Ingredients from './Components/pages/Ingredients'
import Login from './Components/pages/Login'
import SingleRecipe from './Components/SingleRecipe';
import Videos from './Components/pages/Videos.js'
import SingleVideo from './Components/SingleVideo.js'
import Signup from './Components/Signup.js'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
import Account from './Components/pages/Account'
import ForgotPassword from './Components/ForgotPassword.js'
import UpdateProfile from './Components/UpdateProfile.js'
import Favourites from './Components/pages/Favourites.js'


function App() {
  return (
    <div className="App">
      <Router>

        <AuthProvider>
          <Switch>
            <Route exact path='/'  component={Home}></Route>
            <PrivateRoute path='/Account' component={Account}></PrivateRoute>
            <Route path='/Recipes' component={Recipes}></Route>
            <Route path='/Ingredients' component={Ingredients}></Route>
            <Route path='/Videos' component={Videos}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path="/SingleRecipe/:id" component={SingleRecipe}></Route>
            <Route path="/SingleVideo/:youTubeId" component={SingleVideo}></Route>
            <Route path='/Signup' component={Signup}></Route>
            <Route path="/Forgot-Password" component={ForgotPassword}></Route>
            <PrivateRoute path="/Update-Profile" component={UpdateProfile}></PrivateRoute>
            <PrivateRoute path="/Favourites" component={Favourites}></PrivateRoute>

          </Switch>

        </AuthProvider>


      </Router>
    </div>
  );
}

export default App;
