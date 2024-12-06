import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { MdDelete } from "react-icons/md";
import TextField from "./TextField";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const TodoApp = () => {
  const [Input, setInput] = useState("");
  const [Tasks, setTask] = useState([]);

  const AddTask = () => {
    if (Input.trim() !== "") {
      setTask([...Tasks, Input]);
      setInput("");
    }
  };

  const RemoveTask = (index) => {
    const UpdatedTasks = [...Tasks];
    UpdatedTasks.splice(index, 1);
    setTask(UpdatedTasks);
  };
  const RemoveAll = () => {
    const UpdatedTasks = [...Tasks];
    UpdatedTasks.splice(0);
    setTask(UpdatedTasks);
  };
  // -------------------------------------------------------------
  const [Tasks1, setTask1] = useState([]);
  const AddTask1 = () => {
    setTask1([...Tasks1, <TextField />]);
  };
  const RemoveTask1 = (index) => {
    const UpdatedTasks1 = [...Tasks1];
    UpdatedTasks1.splice(index, 1);
    setTask1(UpdatedTasks1);
  };
  const RemoveAll1 = () => {
    const UpdatedTasks1 = [...Tasks1];
    UpdatedTasks1.splice(0);
    setTask1(UpdatedTasks1);
  };
  return (
    <div>
      <Row style={{ borderTop: "1px solid black" }}>
        <Col md={6} xs={12}>
          <Form>
            <Form.Group className="d-flex justify-content-center mt-5">
              <Form.Control
                className="me-3"
                style={{ width: "50%" }}
                placeholder="Enter Task"
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              ></Form.Control>
              <Button onClick={AddTask}>Add</Button>
              <Button
                className="ms-3"
                variant="danger"
                onClick={() => RemoveAll()}
              >
                Delete All
              </Button>
            </Form.Group>
          </Form>
          <ul className="m-4 fw-bold fs-3" style={{ listStyleType: "none" }}>
            {Tasks.map((task, index) => (
              <li key={index}>
                {task}
                <MdDelete
                  onClick={() => RemoveTask(index)}
                  className="ms-5"
                  style={{ width: "5%", color: "red" }}
                />
              </li>
            ))}
          </ul>
        </Col>
        <Col md={6} xs={12} style={{ borderLeft: "1px solid black" }}>
          <Form.Group className=" justify-content-center mt-4">
            <h6>
              <b>*Click on Add button for textfield</b>
            </h6>
            <Button onClick={AddTask1}>Add</Button>
            <Button
              className="ms-3"
              variant="danger"
              onClick={() => RemoveAll1()}
            >
              Delete All
            </Button>
          </Form.Group>

          <ul className="m-4 fw-bold fs-3" style={{ listStyleType: "none" }}>
            {Tasks1.map((task1, index) => (
              <li className="d-flex mt-3" key={index}>
                {task1}
                <IoIosRemoveCircleOutline
                  onClick={() => RemoveTask1(index)}
                  className="ms-4"
                  style={{ width: "7%", color: "red" }}
                />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default TodoApp;
