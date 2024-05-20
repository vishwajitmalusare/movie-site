import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Card, CardContent, Container, Modal, TableRow } from '@mui/material';
import { getUser } from '../Services/authservice';
import { useState, useRef, useEffect } from 'react';
import { AddAPhoto, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function SearchAppBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem
  //Ref for the profile card
  const profileRef = useRef(null);

  useEffect(() => {
    //Function to handle click outside the profile card
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    //Add event listner when the profile card is open
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      //Remove event listner when the profile card is closed
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  //Toggle profile card open/close
  const handleProfile = async () => {
    try {
      setIsProfileOpen(true);
      const userDetails = await getUser();
      console.log('userDetails: ', userDetails);
      setUser(userDetails);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
    setIsProfileOpen(!isProfileOpen);
  };

  //Close Profile method
  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: { bgcolor: stringToColor(name), },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movie App
          </Typography>
          <IconButton
            size="small"
            // edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            Popular
            {/* <MenuIcon /> */}
          </IconButton>
          <IconButton
            size="small"
            // edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            Top Rated
            {/* <MenuIcon /> */}
          </IconButton>
          <IconButton
            size="small"
            // edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            Upcoming
            {/* <MenuIcon /> */}
          </IconButton>
          <Search sx={{ mr: 1 }} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div
            onClick={handleProfile} ref={profileRef}
          >
            <Person style={{ height: "50px", width: "42px" }} />
          </div>
        </Toolbar>
      </AppBar>
      {isProfileOpen &&
        <Card variant="outlined" style={{ height: "350px", width: "350px", position: 'absolute', top: '64px', right: '16px', zIndex: 999 }} ref={profileRef}>
          <CardContent>

            <Typography mb={2} align='center' variant='h4' gutterBottom>User Details</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar sx={{ width: 75, height: 75, margin: 'auto' }} />
              <AddAPhoto sx={{ width: 25, height: 25, marginBottom: 2 }} color='primary' />
            </div>
            <Typography mb={2} variant='h5' gutterBottom>Name: {user?.first_name + " " + user?.last_name}</Typography>
            <Typography mb={2} variant='h5' gutterBottom>Email: {user?.email}</Typography>
            {/* Add whatever user details you want to display */}
            <Button variant='outlined' onClick={handleLogout} style={{ marginRight: 100 }}>Logout</Button>
            <Button variant='outlined' color='error' onClick={handleCloseProfile}>Close</Button>
          </CardContent>
        </Card>
      }
    </Box>
  );
}
