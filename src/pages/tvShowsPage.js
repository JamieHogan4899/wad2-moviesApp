import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
//import {getTvShows} from '../api/tmdb-api'
import {getTvShows} from '../api/movie-api'
import PageTemplate from "../components/templateTvShowList";
import AddToFavoritesTvIcon from '../components/cardIcons/AddToFavouritesTv'




const TvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tvShows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  


  
  const shows = data.results;

 // Redundant, but necessary to avoid app crashing.
 const Tvfavorites = shows.filter(s => s.favorite)
 localStorage.setItem('favorites', JSON.stringify(Tvfavorites))


  return (
    <PageTemplate
      title="TV Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesTvIcon show={show} 
    
        />
      }}
    />
);
};

export default TvShowsPage;