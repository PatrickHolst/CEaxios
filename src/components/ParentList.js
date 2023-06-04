import React, { useState, useEffect } from "react";
import { Button, Card, Table, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import api from "../services/ApiService";

const ParentList = () => {
  const [parents, setParents] = useState([]);
  const navigate = useNavigate();

  const fetchParents = async () => {
    try {
      let response = await api.get("/parents");
      console.log(response.data);
      setParents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteParent = async (ParentId) => {
    try {
      await api.delete(`/parent/${ParentId}`);
      setParents(
        parents.filter((parent) => {
          return parent.ParentId !== ParentId;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchParents(); // Fetch all parents on initial load
  }, []);
  return (
    // <div className="parent-list">
    <Card>
      <Card.Body>
        {parents.map((parent) => {
          return (
            <div key={parent.ParentId}>
              <Table bordered striped hover>
                <thead>
                  <tr>
                    <th>{parent.name}</th>
                    <th>Salary: {parent.salary}</th>
                    <th>Leave days: {parent.days}</th>
                  </tr>
                </thead>
              </Table>
              {/* <h5>{parent.name}</h5>
              <p>Salary: {parent.salary}</p>
              <p>Leave days: {parent.days}</p> */}
              <Card.Footer>
                <Button
                  variant="danger"
                  onClick={() => deleteParent(parent.ParentId)}
                >
                  Delete
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update/${parent.ParentId}`)}
                >
                  Edit
                </Button>
              </Card.Footer>{" "}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
};
export default ParentList;

// import React, { useContext, useState, useEffect } from "react";
// import _ from "lodash";
// import Parent from "./Parent";
// import api from "../services/ApiService";

// const ParentList = () => {
//   const [parents, setParents] = useState([]);
//   const fetchParents = async () => {
//     try {
//       let response = await api.get("/parents");
//       console.log(response.data);
//       setParents(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // GET with Axios
//   useEffect(() => {
//     fetchParents(); // Fetch all parents on initial load
//   }, []);
//   return (
//     <React.Fragment>
//       <div className="parent-list">
//         {!_.isEmpty(parents) ? (
//           parents.map((parent) => (
//             <Parent
//               key={parent.ParentId}
//               {...parent}
//               // handleRemoveParent={handleRemoveParent}
//             />
//           ))
//         ) : (
//           <p className="message">
//             No calculations available. Please add some calculations.
//           </p>
//         )}
//       </div>
//     </React.Fragment>
//   );
// };
// export default ParentList;
