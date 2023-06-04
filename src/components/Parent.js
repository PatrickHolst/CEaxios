// import React, { useState, useEffect } from "react";
// import { Button, Card, Table, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import api from "../services/ApiService";

// const Parent = () => {
//   const [parents, setParents] = useState([]);
//   const navigate = useNavigate();

//   const fetchParents = async () => {
//     try {
//       let response = await api.get("/parents");
//       console.log(response.data);
//       setParents(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchParents(); // Fetch all parents on initial load
//   }, []);

//   // DELETE with Axios
//   const deleteParent = async (ParentId) => {
//     try {
//       await api.delete(`/parent/${ParentId}`);
//       setParents(
//         parents.filter((parent) => {
//           return parent.ParentId !== ParentId;
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Card className="parent-list">
//       <Card.Body>
//         return (
//         <div className="post-card" key={ParentId}>
//           <h5 className="post-title">{parent.name}</h5>
//           <p className="post-body">Salary: {parent.salary}</p>
//           <p className="post-body">Leave days: {parent.days}</p>
//           <Card.Footer>
//             <Button
//               variant="danger"
//               onClick={() => deleteParent(parent.ParentId)}
//             >
//               Delete
//             </Button>
//             <Button
//               variant="primary"
//               onClick={() => navigate(`/edit/${parent.ParentId}`)}
//             >
//               Edit
//             </Button>
//           </Card.Footer>
//         </div>
//         );
//       </Card.Body>
//     </Card>
//   );
// };
// export default Parent;
