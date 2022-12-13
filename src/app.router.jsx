import { Route, Routes } from "react-router-dom";
import Search from "./routes/search";
import Project from "./routes/project";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Search />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default AppRouter;
