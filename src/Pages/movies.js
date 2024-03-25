import React, { useState } from "react";
import moviedata from "../Utility/moviedata.json";
import { Avatar, Card, CardHeader, Collapse, IconButton, Typography } from "@mui/material";
import { ExpandMore, FavoriteBorderOutlined, MoreVertOutlined, Share } from "@mui/icons-material";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import Header from '../Components/header'

export default function Movies() {
  const [expanded, setExpanded] = useState({});
  console.log('moviedata: ', moviedata);

  const handleExpandClick = (movieId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [movieId]: !prevState[movieId],
    }));
  };

  return (
    <>
    <Header />
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {moviedata.movies.map((movie, index) => (
        <Card key={index} sx={{ width: 250, marginLeft: 7, marginTop: 4 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                R
              </Avatar>
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
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlined />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <IconButton
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded[index]}
              aria-label="show more"
            >
              <ExpandMore />
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
