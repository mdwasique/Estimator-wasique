import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Dashboard from "./screens/userScreens/dashboard/Dashboard";
import GenralInformation from "./screens/userScreens/genralInformation/GenralInformation";
import CreateRole from "./screens/userScreens/createRole/CreateRole";
import RateCard from "./screens/userScreens/rateCard/RateCard";
import ReactTable from "./screens/userScreens/reactTable/ReactTable";
// import Login from "./screens/userScreens/login/Login";
// import Layout from "./screens/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<div>hiii</div>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="genral-information" element={<GenralInformation />} />
            <Route path="creater-role" element={<CreateRole />} />
            <Route path="rate-card" element={<RateCard />} />
            <Route path="react-table" element={<ReactTable />} />
            {/* <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} /> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="layout" element={<Layout />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
