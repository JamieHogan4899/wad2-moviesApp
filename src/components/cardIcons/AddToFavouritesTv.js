import React, { useContext } from "react";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavoritesTvIcon = ({ show }) => {
  const context = useContext(TvContext);

  const handleAddToTvFavorites = (e) => {
    e.preventDefault();
    context.addToTvFavorites(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTvFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesTvIcon;