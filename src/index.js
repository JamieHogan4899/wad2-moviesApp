import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";  
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviePage from "./pages/upcomingMoivesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TrendingPage from "./pages/TopRatedMoviesPage";
import TvShowsPage from "./pages/tvShowsPage";
import tvDetailsPage from "./pages/tvDetailsPage";
import tvReviewPage from "./pages/tvReviewPage";
import TvFavouritePage from "./pages/tvFavouritesPage";
import testPage from "./pages/test";
import AuthProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./privateRoute";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <PrivateRoute exact path="/Trending" component={TrendingPage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute exact path="/upcoming" component={UpcomingMoviePage} />  
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute exact path="/shows/tvShowsPage" component={TvShowsPage} />
        <PrivateRoute exact path="/shows/TvShowFavPage" component={TvFavouritePage} />
        <PrivateRoute exact path="/movies/:id" component={MoviePage} /> 
        <PrivateRoute exact path="/shows/:id" component={tvDetailsPage} /> 
        <Route exact path="/test" component={testPage} /> 
        <Route exact path="/SignUP" component={SignUpPage} /> 
        <PrivateRoute exact path="/" component={HomePage} /> 
        <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute path="/tvreviews/:id" component={tvReviewPage} />
        <Redirect from="*" to="test" />
        </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));