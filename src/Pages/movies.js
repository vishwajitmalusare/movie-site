import React, { useState } from "react";
import moviedata from "../Utility/moviedata.json";
import {
  Avatar,
  Card,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Bookmark,
  BookmarkAdd,
  BookmarkAdded,
  ExpandMore,
  Favorite,
  FavoriteBorderOutlined,
  InfoSharp,
  InfoTwoTone,
  MoreVertOutlined,
  Share,
} from "@mui/icons-material";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import Header from "../Components/header";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  //Method for like
  const toggleLike = () => {
    setLiked(!liked);
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
      V: "#999999",
      W: "#cccccc",
      X: "#dddddd",
      Y: "#bbbbbb",
      Z: "#aaaaaa",
      // Add more colors for other letters if needed
    };
    const defaultColor = "#2196f3"; // Default color if no match is found

    const firstLetter = initial.charAt(0).toUpperCase();
    return colors[firstLetter] || defaultColor;
  };

// Method to handle saving or unsaving a movie
const handleSave = (movie) => {
  if (isMovieSaved(movie)) {
    // If the movie is already saved, remove it from savedMovies
    setSavedMovies(savedMovies.filter(savedMovie => savedMovie.id !== movie.id));
  } else {
    // If the movie is not saved, add it to savedMovies
    setSavedMovies([...savedMovies, movie]);
  }
};

  // Method to check if a movie is saved
  const isMovieSaved = (movie) => {
    return savedMovies.some((savedMovie) => savedMovie.id === movie.id);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {moviedata.movies.map((movie, index) => (
          <Card key={index} sx={{ width: 250, marginLeft: 7, marginTop: 4 }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: getAvatarBackgroundColor(movie.title),
                    // bgcolor: "red", // Set your desired background color here
                    color: "white", // Set text color to contrast with background
                    width: 48, // Adjust size as needed
                    height: 48, // Adjust size as needed
                    fontSize: 24, // Adjust font size as needed
                  }}
                  aria-label="recipe"
                >
                  {movie?.title ? movie?.title.charAt(0).toUpperCase() : "M"}
                </Avatar>
                // <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                //   {movie?.title ? movie?.title.charAt(0).toUpperCase() : 'M'}
                // </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertOutlined />
                </IconButton>
              }
              title={movie.title}
              subheader={movie.release_date}
            />
            <CardMedia
              component="img"
              height="160"
              image={movie.posterUrl}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {movie.overview}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
      
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <IconButton
                onClick={() =>
                  navigate("/moviedetails", { state: { movieid: movie.id } })
                }
                aria-label=" show details"
              >
                <InfoTwoTone />
              </IconButton>
              <IconButton aria-label="save" onClick={() => handleSave(movie)}>
                {isMovieSaved(movie) ? (
                  <BookmarkAdded color="primary" />
                ) : (
                  <BookmarkAdd />
                )}
              </IconButton>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Additional Movie Details:</Typography>
                {/* Map through movie details and render them */}
                {Object.entries(movie).map(([key, value]) => (
                  <Typography key={key} paragraph>
                    <strong>{key}:</strong> {value}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}
