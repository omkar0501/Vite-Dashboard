import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { RiAdminFill } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import { FaUser } from "react-icons/fa";
import InputGroup from "react-bootstrap/InputGroup";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";

function Admin_Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("checkbox")) {
      setUsername(localStorage.getItem("username"));
      setPassword(localStorage.getItem("password"));
    }
  }, []);

  const Authenticate = () => {
    if (username == "sanket09@gmail.com" && password == "Sanket@123") {
      alert("success");
      localStorage.setItem("Name", username);
      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("checkbox", rememberMe);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("checkbox");
      }
      navigate("/dashboard");
    }
  };
  {
    localStorage.getItem("Name") ? navigate("/dashboard") : "";
  }
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card
          className="p-0 d-flex justify-content-center align-items-center"
          style={{ height: "auto", width: "100%" }}
        >
          <div className="mt-3 d-flex justify-content-center">
            <RiAdminFill style={{ height: 70, width: "100%" }} />
          </div>
          <Card.Body>
            <Card.Title>
              <h3 className="mb-3 d-flex justify-content-center fw-bold">
                Admin Login
              </h3>
            </Card.Title>
            <form className="needs-validation p-2" noValidate>
              <div className="mb-3 ">
                <label
                  htmlFor="YourIDInput"
                  className="d-flex justify-content-left mb-2"
                >
                  Username
                </label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="YourIDInput"
                  className="d-flex justify-content-left mb-2"
                >
                  Password
                </label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <RiLockPasswordFill />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup>
                  <Checkbox
                    type="checkbox"
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="dark"
                    checked={rememberMe}
                  ></Checkbox>
                  <label className="mt-2" style={{ fontSize: "small" }}>
                    Remember Me
                  </label>
                </InputGroup>
              </div>
            </form>
            <Button
              className="mb-3"
              variant="contained"
              style={{ width: "90%", backgroundColor: "black" }}
              type="submit"
              onClick={Authenticate}
            >
              Login
            </Button>
            <p
              className="mb-2 d-flex justify-content-center"
              style={{ fontSize: "15px" }}
            >
              Forgot Password ?
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Admin_Login;
