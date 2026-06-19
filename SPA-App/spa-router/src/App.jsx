import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Users from "./Components/Users";
import UserTodos from "./Components/UserTodos";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-todos/:userId" element={<UserTodos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
