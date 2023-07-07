/* eslint-disable jsx-a11y/alt-text */
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as HttpStatus from "http-status-codes";

import LOGO from "../../../assets/images/coffee-logo.png";
import { defaultValues, LoggedInUser } from "../login";
import { getUser } from "../../user/user.services";

axios.defaults.withCredentials = true;

const Login: React.FC = () => {
  // const Login = () => {
  const { handleSubmit } = useForm({
    defaultValues: defaultValues,
    mode: "all",
  });
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmitForm: SubmitHandler<LoggedInUser> = async () => {
    try {
      // Here we would calling an api to VALIDATE THE CREDENTIALS
      console.log("dedeeeee", userName, password);
      await getUser({ userName, password });
      navigate("/");
    } catch (error: any) {
      if (error.response?.status === HttpStatus.UNPROCESSABLE_ENTITY) {
        setErrorMessage(error.response.data[0].message);
      } else {
        setErrorMessage("Please try again");
      }
    }
  };
  return (
    <>
      <form className="App" onSubmit={handleSubmit(onSubmitForm)}>
        <Container>
          <Row>
            <Col></Col>
            <Col sm={12} md={12} lg={4}>
              <Paper className="boxHeight">
                <Row className="rowHeight">
                  <Col sm={12} align={"center"}>
                    <img src={LOGO} width="30" />
                  </Col>
                </Row>
                <Row className="rowHeight">
                  <Col sm={12} align={"center"}>
                    <TextField
                      label="Username"
                      className="form-control"
                      autoComplete="password"
                      name="username"
                      id="username"
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setUserName(event.target.value)
                      }
                    ></TextField>
                  </Col>
                </Row>
                <Row className="rowHeight">
                  <Col sm={12} align={"center"}>
                    <TextField
                      label="Password"
                      id="password"
                      autoComplete="password"
                      className="form-control"
                      type={"password"}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                      }
                    ></TextField>
                  </Col>
                </Row>
                <Row className="rowHeight">
                  <Col sm={12} align={"center"}>
                    <Button
                      variant="outline-secondary"
                      className="login-btn cursor-pointer"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Paper>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </form>
    </>
  );
};
export default Login;
