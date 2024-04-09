import {
  ArrowBack,
  BookmarkAdd,
  BookmarkAdded,
  ExpandMore,
  Favorite,
  FavoriteBorderOutlined,
  MoreVertOutlined,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moviedata from "../Utility/moviedata.json";
import Header from "../Components/header";

export default function MovieDetails() {
  const location = useLocation();
  const movieId = location.state.movieid;
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  //Movie Data
  const movie = moviedata.movies.find((movie) => movie.id === movieId);
  console.log("movie: ", movie);

  //Method for like
  const toggleLike = () => {
    setLiked(!liked);
  };

  //Method for save
  const toggleSave = () => {
    setSaved(!saved)
  }

  //Method for handle back click
  const handleBack = () => {
    navigate("/dashboard");
  };

  //Method for Avatar Color
  const getAvatarBackgroundColor = (initial) => {
    const colors = {
      A: "#f44336",
      B: "#e91e63",
      C: "#9c27b0",
      D: "#673ab7",
      E: "#3f51b5",
      F: "#2196f3",
      G: "#03a9f4",
      H: "#00bcd4",
      I: "#009688",
      J: "#4caf50",
      K: "#8bc34a",
      L: "#cddc39",
      M: "#ffeb3b",
      N: "#ffc107",
      O: "#ff9800",
      P: "#ff5722",
      Q: "#795548",
      R: "#9e9e9e",
      S: "#607d8b",
      T: "#333333",
      U: "#666666",
      V: "#757ce8",
      W: "#cccccc",
      X: "#dddddd",
      Y: "#bbbbbb",
      Z: "#aaaaaa",
    };
    const defaultColor = "#2196f3"; // Default color if no match is found

    const firstLetter = initial.charAt(0).toUpperCase();
    return colors[firstLetter] || defaultColor;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Movie Details</h2>
        <Card
          raised
          sx={{
            maxWidth: "70%",
            margin: "0 auto",
            padding: "0.1em",
          }}
        >
          <CardHeader
            sx={{ textAlign: "center" }}
            avatar={
              <Avatar
                sx={{
                  bgcolor: getAvatarBackgroundColor(movie.title),
                  justifyContent: "center",
                  alignItems: "center",
                }}
                aria-label="recipe"
              >
                {movie?.title ? movie?.title.charAt(0).toUpperCase() : "M"}
              </Avatar>
            }
            action={
              <IconButton aria-label="back" onClick={handleBack}>
                <ArrowBack />
              </IconButton>
            }
            title={movie.title}
            subheader={movie.year}
          />
          <CardMedia
            component="img"
            height="250"
            image={movie?.posterUrl}
            alt={"alt"}
            title={movie?.title}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Director : {movie?.director}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Actor : {movie?.actors}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Genres:
              {movie.genres.map((genre, index) => (
                <React.Fragment key={index}>
                  {genre}
                  {index < movie.genres.length - 1 && ", "}
                </React.Fragment>
              ))}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Runtime : {movie?.runtime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Plot : {movie?.plot}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "auto", // This will push the CardActions to the bottom
            }}
          >
            <IconButton aria-label="add to favorites" onClick={toggleLike}>
              {liked ? (
                <Favorite style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <IconButton aria-label="save" onClick={toggleSave}>
              { saved ? (
                <BookmarkAdded color="primary"/>
              ) : (
                <BookmarkAdd/>
              )}
            </IconButton>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </CardActions>
        </Card>
      </div>
    </>
  );
}
