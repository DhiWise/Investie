import React from "react";
import OrderDetails from "pages/OrderDetails";
import Desktop from "pages/Desktop";
import AccountDetails from "pages/AccountDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
