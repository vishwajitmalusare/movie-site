import React, { useState } from "react";
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
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { registerUser } from "../Services/authservice";
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (password == confirmPassword) {
        setIsPasswordSame(true);
      } else {
        alert("Entered Password is not Matched !!");
        return;
      }
      const data1 = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };
      const response = await registerUser(data1);
      navigate('/login')

    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6%",
        }}
      >
        <Card
          raised
          sx={{
            width: "30%",
            height: "85vh",
          }}
        >
          <CardHeader
            style={{
              textAlign: "center",
            }}
            title="Registration"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <TextField
                value={firstName}
                label="First Name"
                variant="standard"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                value={lastName}
                label="Last Name"
                variant="standard"
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                value={email}
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                value={password}
                label="Password"
                variant="standard"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                value={confirmPassword}
                label="Confirm Password"
                variant="standard"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "70px",
                  marginTop: "20px",
                }}
              >
                <Button variant="outlined" onClick={handleRegister}>
                  Signup
                </Button>
                <Button variant="outlined" onClick={handleClear}>
                  Clear
                </Button>
              </div>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                href="/login"
                underline="hover"
              >
                Already have account ? Please Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
