import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import api from "../services/ApiService";

const AddParent = () => {
  const [parents, setParents] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [days, setDays] = useState("");

  const fetchParents = async () => {
    try {
      let response = await api.get("/parents");
      console.log(response.data);
      setParents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addParent = async (name, salary, days) => {
    try {
      let response = await api.post("/post", {
        name: name,
        salary: salary,
        days: days,
      });
      setName("");
      setSalary("");
      setDays("");
      fetchParents(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addParent(name, salary, days);
    await fetchParents();
  };
  return (
    <Container className="split-container">
      <h1>Add a Parent</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          className="input-control"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="number"
          className="input-control"
          value={salary}
          placeholder="Salary"
          onChange={(e) => setSalary(e.target.value)}
        />
        <Form.Control
          type="number"
          className="input-control"
          value={days}
          placeholder="Days"
          onChange={(e) => setDays(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
export default AddParent;
