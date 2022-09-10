import React from "react";
import { Box, Text, Input, Heading, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import NavbarFant from "../Fantacy-navbar/Navbar";
import Sideimg from "../sideimg/Sideimg";
const init = {
  name: "",
  email: "",
  pass: "",
};

const Signup = () => {
  const [form, setform] = React.useState(init);
  const navigate = useNavigate();

  const inputfn = (e) => {
    const { value, name } = e.target;
    setform((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const signupfn = () => {
    let newform = JSON.stringify(form);
    fetch("https://rupesh-team.herokuapp.com/login", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: newform,
    });
    alert("SignUp Sucsessfull");
    navigate("/login");
  };

  return (
    <>
      <NavbarFant /> <Sideimg />
      <Box display="flex">
        <Box mt="20" w="40%" h="80vh">
          <Box
            gap="5"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Heading>Sign up</Heading>
            <Text mt="-2" mb="5">
              Please Enter Your Details
            </Text>
            <Input
              onChange={inputfn}
              w="70%"
              bg="#f1f2f4"
              type="email"
              size="lg"
              name="email"
              placeholder="Enter Email"
            />
            <Input
              onChange={inputfn}
              w="70%"
              bg="#f1f2f4"
              type="text"
              size="lg"
              name="name"
              placeholder="Enter Name"
            />
            <Input
              onChange={inputfn}
              w="70%"
              bg="#f1f2f4"
              type="text"
              size="lg"
              name="pass"
              placeholder="Enter Password.."
            />
            <Button onClick={signupfn} w="70%" colorScheme="purple" size="lg">
              Sign Up
            </Button>
            <Text mb="-12px">Already have Account</Text>
            <Link to="/login">
              <Button variant="link" color="red">
                Login Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
