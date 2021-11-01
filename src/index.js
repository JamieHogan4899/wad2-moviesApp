import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviePage from "./pages/upcomingMoivesPage";

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />      {/* New Header  */}
    <Switch>
        <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />  
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));