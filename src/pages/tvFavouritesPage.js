import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowList";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvFavorites from "../components/cardIcons/removeFromTvFavourites";

const FavoriteShowsPage = () => {
  const {favorites: showIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const shows = favoriteShowQueries.map((q) => q.data);


  return (
    <PageTemplate
      title="Favorite Tv Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromTvFavorites show={show} />
            
          </>
        );
      }}
    />
  );
};

export default FavoriteShowsPage;

