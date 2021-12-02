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
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route exact path="/movies/Trending" component={TrendingPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />  
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/shows/tvShowsPage" component={TvShowsPage} />
        <Route exact path="/movies/:id" component={MoviePage} /> 
        <Route exact path="/shows/:id" component={tvDetailsPage} /> 
        <Route exact path="/" component={HomePage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route path="/tvreviews/:id" component={tvReviewPage} />
        <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));