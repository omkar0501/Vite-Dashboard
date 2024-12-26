import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  division,
  multiplication,
  substraction,
} from "./ArithmaticSlice"; //action creators

export const Arithmatic = () => {
  const [ip1, setIp1] = useState("");
  const [ip2, setIp2] = useState("");
  const inputs = {
    Ip1: ip1,
    Ip2: ip2,
  };
  const ans = useSelector((state) => state.arithmatic.ans);
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Row>
          <Form.Control
            className="col m-2"
            type="text"
            value={ip1}
            onChange={(e) => setIp1(e.target.value)}
          />
          <Form.Control
            className="col m-2"
            type="text"
            value={ip2}
            onChange={(e) => setIp2(e.target.value)}
          />
        </Row>
        <Row>
          <Col md={3}>
            <Button
              onClick={() => {
                dispatch(addition(inputs));
              }}
            >
              Add
            </Button>{" "}
            {/* u can add onlt one argument to a dispatch () ,if u wanna pass more than one argument pass through a object      */}
          </Col>
          <Col md={3}>
            <Button
              onClick={() => {
                dispatch(substraction(inputs));
              }}
            >
              Sub
            </Button>
          </Col>
          <Col md={3}>
            <Button
              onClick={() => {
                dispatch(multiplication(inputs));
              }}
            >
              Multi
            </Button>
          </Col>
          <Col md={3}>
            <Button
              onClick={() => {
                dispatch(division(inputs));
              }}
            >
              Div
            </Button>
          </Col>
        </Row>
        <p>Ans : {ans}</p>
      </Form>
    </>
  );
};
