import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PageTemplate from "../components/templateTvShowList";


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



  return (
    <PageTemplate
      title="TV Shows"
      shows={shows}
    
      
    />
);
};

export default TvShowsPage;