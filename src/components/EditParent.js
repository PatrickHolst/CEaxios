import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import api from "../services/ApiService";

const EditParent = ({ ParentId }) => {
  const [parent, setParent] = useState({ name: "", salary: "", days: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/parent/${ParentId}`)
      .then((res) => {
        const { name, salary, days } = res.data;
        setParent({ name, salary, days });
      })
      .catch((err) => console.log(err));
  }, [ParentId]);

  const handleInputChange = (e) => {
    setParent({ ...parent, [e.target.name]: e.target.value });
  };

  const updateParent = (e) => {
    e.preventDefault();

    const updatedFields = Object.entries(parent).reduce((acc, [key, value]) => {
      if (value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    api
      .put(`/update/${ParentId}`, updatedFields)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleBack = async () => {
    await navigate("/");
  };

  return (
    <Container className="split-container">
      <h4>Update</h4>
      <Form onSubmit={updateParent}>
        <Form.Control
          type="text"
          name="name"
          value={parent.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
        <Form.Control
          type="number"
          name="salary"
          value={parent.salary}
          placeholder="Salary"
          onChange={handleInputChange}
        />
        <Form.Control
          type="number"
          name="days"
          value={parent.days}
          placeholder="Days"
          onChange={handleInputChange}
        />
        <Button className="btn btn-primary" type="submit">
          Update
        </Button>
        <Button variant="danger" onClick={handleBack}>
          Back
        </Button>
      </Form>
    </Container>
  );
};

export default EditParent;
