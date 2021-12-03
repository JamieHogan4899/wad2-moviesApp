import React, { useState } from "react";
export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favorites, setTvFavorites] = useState( [] )
  //const [myReviews, setMyReviews] = useState( {} ) 
  //const [myPlaylist, setMyPlaylist] = useState([] ) 

  const addToTvFavorites = (show) => {
    setTvFavorites([...favorites,show.id])
  };
 // We will use this function in a later section
 const removeFromFavorites = (show) => {
    setTvFavorites( favorites.filter(
      (sId) => sId !== show.id
    ) )
  };
  return (
    <TvContext.Provider
      value={{
        favorites,
        addToTvFavorites,
        removeFromFavorites,   
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;