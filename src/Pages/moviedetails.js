import {
  ExpandMore,
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
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import moviedata from "../Utility/moviedata.json";
import Header from '../Components/header'

export default function MovieDetails() {
const location = useLocation();
const movieId = location.state.movieid;
  // get navigate states  --> {location.state.name}

  const movie = moviedata.movies.find(movie => movie.id === movieId);
  console.log('movie: ', movie);

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2 >Movie Details</h2>
      <Card sx={{ height: "500px", width: "70%",  marginLeft: 7, marginTop: 4 }}>
        <CardHeader
        sx={{ textAlign: 'center' }}
          avatar={
            <Avatar sx={{ bgcolor: "red[500]", justifyContent: 'center', alignItems: 'center'}} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.year}
        />
        <CardMedia
          component="img"
          height="160"
          image={movie?.posterUrl}
          alt={movie?.title}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            Director :  {movie?.director}.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actor :  {movie?.actors}.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Genres :  {movie?.genres}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Runtime :  {movie?.runtime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plot :  {movie?.plot}.
          </Typography>
        </CardContent>
        <CardActions 
          sx={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 'auto', // This will push the CardActions to the bottom
          }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          {/* <IconButton
            onClick={() => handleExpandClick(index)}
            aria-expanded={expanded[index]}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton> */}
        </CardActions>
        {/* <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Additional Movie Details:</Typography>
            {/* Map through movie details and render them /*}
            {Object.entries(movie).map(([key, value]) => (
              <Typography key={key} paragraph>
                <strong>{key}:</strong> {value}
              </Typography>
            ))}
          </CardContent>
        </Collapse> */}
      </Card>
      </div>    
  </>
  );
}
