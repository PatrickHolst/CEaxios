import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "../components/Header";
import ParentList from "../components/ParentList";
import Home from "../components/Home";
import AddParent from "../components/AddParent";
import EditParent from "../components/EditParent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<ParentList />} exact />
            <Route path="/add" element={<AddParent />} />
            <Route path="/update/:ParentId" element={<EditParentWrapper />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

// Create a wrapper component to retrieve the ParentId from the URL and pass it to the EditParent component
const EditParentWrapper = () => {
  const { ParentId } = useParams();
  return <EditParent ParentId={ParentId} />;
};

export default AppRouter;
