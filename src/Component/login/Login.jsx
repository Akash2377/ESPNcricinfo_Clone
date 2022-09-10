import React from "react";
import { Box, Text, Input, Heading, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import NavbarFant from "../Fantacy-navbar/Navbar";
import Sideimg from "../sideimg/Sideimg";
const Login = () => {
  const navigate = useNavigate();
  const [pass, setpass] = React.useState("");
  const [email, setemail] = React.useState("");
  const [data, setdata] = React.useState({ email: "", pass: "", name: "" });

  React.useEffect(() => {
    fetch("https://rupesh-team.herokuapp.com/login")
      .then((res) => res.json())
      .then((res) => setdata(res))
      .catch((err) => alert(err));
  }, []);
  function loginfn() {
    if (email == data.email && pass == data.pass) {
      alert("Login Successfull");
      navigate("/matches");
    } else {
      alert("Enter Wrong Password or Email");
    }
  }
  return (
    <>
      <NavbarFant />
      <Sideimg />
      <Box display="flex">
        <Box mt="20" w="40%">
          <Box
            gap="5"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Heading>LOGIN</Heading>
            <Text mt="-2" mb="5">
              Please Enter Your Email and Password
            </Text>
            <Input
              onChange={(e) => setemail(e.target.value)}
              w="70%"
              bg="#f1f2f4"
              type="email"
              size="lg"
              name="email"
              placeholder="Enter Email"
            />
            <Input
              onChange={(e) => setpass(e.target.value)}
              w="70%"
              bg="#f1f2f4"
              type="text"
              size="lg"
              name="pass"
              placeholder="Enter Password.."
            />
            <Button onClick={loginfn} w="70%" colorScheme="purple" size="lg">
              Login
            </Button>
            <Text mb="-12px">Don't Have Account SignUp</Text>
            <Link to="/signup">
              <Button variant="link" color="red">
                SignUp
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
