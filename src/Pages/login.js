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
import { loginUser } from "../Services/authservice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email) {
        alert("Email is mandatory...");
        return;
      }
      if (!password) {
        alert("Password is mandatory...");
        return;
      }

      const loginData = {
        email: email,
        password: password,
      };

      const response = await loginUser(loginData);
      console.log("Response in Login :- ",response);
      navigate('/dashboard');
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
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
            height: "70vh",
          }}
        >
          <CardHeader
            style={{
              textAlign: "center",
            }}
            title="Login"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              <TextField
                value={email}
                label="Login Id"
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "60px",
                  marginTop: "10px",
                }}
              >
                <Button variant="outlined" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="outlined" onClick={handleClear}>
                  Cancel
                </Button>
              </div>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                href="/registration"
                underline="hover"
              >
                Don't have account ? Please Signup
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
